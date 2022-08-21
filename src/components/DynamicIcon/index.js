import React from "react";
import PropTypes from "prop-types";
import { SiEslint, SiPrettier } from "react-icons/si";

const CATEGORY_TO_ICON_MAPPING = {
  eslint: <SiEslint />,
  prettier: <SiPrettier />,
};

Object.freeze(CATEGORY_TO_ICON_MAPPING);

function DynamicIcon({ icon }) {
  return CATEGORY_TO_ICON_MAPPING[icon];
}

DynamicIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DynamicIcon;
