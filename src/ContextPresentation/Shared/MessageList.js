import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

export const MessageListContext = React.createContext({ color: 'red' });

class MessageList extends Component {
  getChildContext() {
    return { color: 'purple', title: 'legacy' };
  }

  render() {
    const { button, messages } = this.props;
    const children = messages.map(message => (
      <Message text={message.text} button={button} />
    ));

    return (
      <MessageListContext.Provider value={{ color: 'blue', title: 'future' }}>
        <div>{children}</div>
      </MessageListContext.Provider>
    );
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};

MessageList.propTypes = {
  messages: {
    id: PropTypes.number,
    title: PropTypes.string
  },
  button: PropTypes.element
};

export default MessageList;
