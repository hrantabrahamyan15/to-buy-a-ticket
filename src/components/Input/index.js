import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

const FlexInput = ({ type, name, refy, onChange, className, placeholder }) => (
  <input
    ref={refy}
    name={name}
    type={type}
    pattern={type === 'number' ? '[0-9]*' : null}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
  />
);

FlexInput.propTypes = {
  refy: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

FlexInput.defaultProps = {
  refy: noop,
  name: '',
  type: 'text',
  onChange: noop,
  className: null,
  placeholder: 'Введите название',
};

export default FlexInput;
