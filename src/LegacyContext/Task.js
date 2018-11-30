import React, { Component } from 'react';

import { messages } from './mock';

const Button = ({ color, children }) => (
  <button style={{ background: color }}>{children}</button>
);

const Message = ({ color, text }) => (
  <div>
    {text} <Button color={color}>Delete</Button>
  </div>
);

class MessageList extends Component {
  render() {
    const color = 'purple';
    const children = this.props.messages.map(message => (
      <Message text={message.text} color={color} />
    ));
    return <div>{children}</div>;
  }
}

const Task = () => (
  <>
    <h1>Legacy Context TASK: </h1>
    <MessageList messages={messages} />
  </>
);

export default Task;
