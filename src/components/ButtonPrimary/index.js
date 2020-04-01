import React from "react";
import PropTypes from "prop-types";

import { ButtonStyle } from "./styled";

const ButtonPrimary = ({ text }) => {
  return <ButtonStyle type="button">{text}</ButtonStyle>;
};

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired
};

export default ButtonPrimary;
