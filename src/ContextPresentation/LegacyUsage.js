import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageList from './Shared/MessageList';
import { messages } from './Shared/mock';

class Button extends Component {
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
    <h1>Legacy Context SOLUTION: </h1>
    <MessageList messages={messages} button={<Button />} />
  </>
);

export default LegacyUsage;
