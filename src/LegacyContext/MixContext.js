import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { messages } from './mock';

const ColorContext = React.createContext({
  color: 'defaultColor',
  title: 'defaultTitle'
});

class Button extends Component {
  // static contextType = ColorContext; // toggler between legacy and future
  render() {
    const { color, title } = this.context;
    return (
      <button style={{ background: color }}>
        {this.props.children} {title}
      </button>
    );
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
        {this.props.text} <Button>Engoy:</Button>
      </div>
    );
  }
}

class MessageList extends Component {
  getChildContext() {
    return { color: 'purple', title: 'legacy' };
  }

  render() {
    const children = this.props.messages.map(message => (
      <Message text={message.text} />
    ));
    return (
      <ColorContext.Provider value={{ color: 'blue', title: 'future' }}>
        <div>{children}</div>
      </ColorContext.Provider>
    );
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
