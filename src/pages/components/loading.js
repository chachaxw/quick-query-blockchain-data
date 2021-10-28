/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './loading.css';

const Loading = (props) => {
  const { loading } = props;

  if (!loading) {
    return null;
  }

  return <span className="loading" />;
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

export default Loading;
