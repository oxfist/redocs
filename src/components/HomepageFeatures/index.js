import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./styles.module.css";

const FeatureList = [
  {
    id: 1000,
    title: "Fácil de usar",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus fue diseñado desde cero para ser instalado fácilmente y usado
        para tener tu sitio corriendo rápidamente.{" "}
      </>
    ),
  },
  {
    id: 1001,
    title: "Enfócate en lo que realmente importa",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus te permite enfocarte en tu documentación, nosotros nos
        encargaremos de los trámites. Comienza agregando tu documentación en la
        carpeta <code>docs</code>.
      </>
    ),
  },
  {
    id: 1002,
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extiende o personaliza el diseño de tu sitio usando React. Puedes
        extender Docusaurus y usar el mismo <em>header</em> y <em>footer</em>.{" "}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  Svg: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Feature.propTypes = {};

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(({ Svg, title, description, id }) => (
            <Feature
              key={id}
              Svg={Svg}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
