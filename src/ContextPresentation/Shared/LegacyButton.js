import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class LegacyButton extends Component {
  render() {
    const { color, title } = this.context;
    return <button style={{ background: color }}>{title}</button>;
  }
}

LegacyButton.contextTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};

export default LegacyButton;
