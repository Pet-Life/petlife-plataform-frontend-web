import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const ButtonSecondary = ({ text }) => {
  return <S.ButtonStyles type="button">{text}</S.ButtonStyles>;
};

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired
};

export default ButtonSecondary;
