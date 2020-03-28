import React from 'react';
import PropTypes from 'prop-types';

import { TitleContent } from './styled';

const Title = ({ title }) => {
  return <TitleContent>{title}</TitleContent>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title;
