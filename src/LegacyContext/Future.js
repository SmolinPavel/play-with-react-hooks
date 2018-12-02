import React, { Component, createContext } from 'react';

import { messages } from './mock';

const ColorContext = React.createContext({ color: 'red', title: 'myTitle' });

class Button extends Component {
  static contextType = ColorContext;
  render() {
    const { color, title } = this.context;
    return <button style={{ background: color }}>{title}</button>;
  }
}

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
  render() {
    const children = this.props.messages.map(message => (
      <Message text={message.text} />
    ));
    return (
      <ColorContext.Provider value={{ color: 'red', title: 'myTitle' }}>
        <div>{children}</div>
      </ColorContext.Provider>
    );
  }
}

const Solution = () => (
  <>
    <h1>Legacy Context FUTURE: </h1>
    <MessageList messages={messages} />
  </>
);

export default Solution;
