import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { messages } from './mock';

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

class Message extends Component {
  render() {
    return (
      <div>
        {this.props.text} <Button />
      </div>
    );
  }
}

class MessageList extends Component {
  getChildContext() {
    return {
      color: 'purple',
      title: 'myTitle'
    };
  }

  render() {
    const children = this.props.messages.map(message => (
      <Message text={message.text} />
    ));
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};

const Solution = () => (
  <>
    <h1>Legacy Context SOLUTION: </h1>
    <MessageList messages={messages} />
  </>
);

export default Solution;
