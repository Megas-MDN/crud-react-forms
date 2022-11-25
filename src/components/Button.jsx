import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, type, disabled } = this.props;
    return (
      <button
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  type: 'button',
  disabled: false,
};

export default Button;
