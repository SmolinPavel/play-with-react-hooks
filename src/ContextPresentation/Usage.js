import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageList, { MessageListContext } from './Shared/MessageList';
import { messages } from './Shared/mock';

class Button extends Component {
  static contextType = MessageListContext;
  render() {
    const { color, title } = this.context;
    return <button style={{ background: color }}>{title}</button>;
  }
}

Button.contextTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};

const LegacyUsage = () => (
  <>
    <h1>Context USAGE: </h1>
    <MessageList messages={messages} button={<Button />} />
  </>
);

export default LegacyUsage;
