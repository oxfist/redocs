import React, { useEffect } from "react";
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

function HomepageHeader() {
  const headerAnimationConfig = useSpring(MAIN_HEADER_SPRING_CONFIG);
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

  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <animated.h1
          style={headerAnimationConfig}
          className={clsx("hero__title", "redocs")}
        >
          {siteConfig.title}
        </animated.h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            ¡Quiero ver!{" "}
            <animated.span style={arrowAnimationConfiguration}>
              🚀
            </animated.span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Holi bbs ⚡️`}
      description="Las mejores herramientas para desarrollo web, fácilmente a tu disposición"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
