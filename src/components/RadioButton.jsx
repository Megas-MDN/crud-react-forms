import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const styles = {
  display: 'flex',
  justifyContent: 'center',
   gap: '10px',
   margin: '20px',
}

export default class RadioButton extends Component {
  render() {
    const { name, onChange, values, value } = this.props;
    return (
      <div style={ styles }>
        {
          values.map((val, i) => (
            <Input
            key={ i + val }
            type="radio"
            label={ val }
            name={ name }
            value={ val }
            onChange={ onChange }
            radio={ true }
            checked={ value === val }
            />
          ))
        }
      </div>
    );
  }
}

RadioButton.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string),
};

RadioButton.defaultProps = {
  name: '',
  values: [],
  onChange: () => {},
};
