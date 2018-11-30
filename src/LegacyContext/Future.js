import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

import { messages } from './mock';

const ColorContext = React.createContext('red');

class Button extends Component {
  static contextType = ColorContext;
  render() {
    return (
      <button style={{ background: this.context }}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
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
      <ColorContext.Provider value="green">
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
