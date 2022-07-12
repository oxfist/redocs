import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useSpring, animated } from "react-spring";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import useBoop from "../hooks/useBoop";

import styles from "./index.module.css";

const MAIN_HEADER_SPRING_CONFIG = {
  to: { opacity: 1, y: 0 },
  from: { opacity: 0, y: 60 },
  config: {
    tension: 300,
    friction: 20,
  },
};
const ROCKET_SPRING_CONFIG = {
  x: 5,
  y: -5,
};

function RedocsLogo({ text }) {
  const headerAnimationConfig = useSpring(MAIN_HEADER_SPRING_CONFIG);

  return (
    <animated.h1
      style={headerAnimationConfig}
      className={clsx("hero__title", "redocs")}
    >
      {text}
    </animated.h1>
  );
}

RedocsLogo.propTypes = {
  text: PropTypes.string.isRequired,
};

function BoopingRocket() {
  const [arrowAnimationConfiguration, triggerBoop] =
    useBoop(ROCKET_SPRING_CONFIG);

  useEffect(() => {
    let intervalId;
    const timeoutId = window.setTimeout(() => {
      triggerBoop();

      intervalId = window.setInterval(() => {
        triggerBoop();
      }, 5000);
    }, 2000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [triggerBoop]);

  return <animated.span style={arrowAnimationConfiguration}>🚀</animated.span>;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <RedocsLogo text={siteConfig.title} />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg button--shadow"
            to="/intro"
          >
            ¡Quiero ver! <BoopingRocket />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Holi bbs ⚡️"
      description="Las mejores herramientas para desarrollo web, fácilmente a tu disposición"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
