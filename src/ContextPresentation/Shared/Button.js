import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { MessageListContext } from './MessageList';

class LegacyButton extends Component {
  static contextType = MessageListContext;
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
