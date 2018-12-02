import React from 'react';

import MessageList from './Shared/MessageList';
import Button from './Shared/Button';

import { messages } from './Shared/mock';

const LegacyUsage = () => (
  <>
    <h1>USAGE OF BOTH KINDS OF CONTEXT API: </h1>
    <MessageList messages={messages} button={<Button />} />
  </>
);

export default LegacyUsage;
