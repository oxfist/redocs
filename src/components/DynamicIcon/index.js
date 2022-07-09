import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

function DynamicIcon({ icon }) {
  const [library, iconComponent] = icon.split("/");
  const lib = library.toLowerCase();

  const Icon = loadable(() => import(`react-icons/${lib}/`), {
    resolveComponent: (el) => el[iconComponent],
  });

  return <Icon />;
}

DynamicIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DynamicIcon;
