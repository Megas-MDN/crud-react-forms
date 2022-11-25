import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, radio, checked } = this.props;
    return (
      <label className="label" htmlFor={ radio ? value : name }>
        { label }
        <div className="control">
          <input
            className="input"
            autoComplete="off"
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ radio ? value : name }
            checked={checked}
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  radio: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
  radio: false,
};

export default Input;