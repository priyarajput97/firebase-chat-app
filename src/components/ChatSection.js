import React from 'react';
import ChatHeader from './ChatHeader';
import Chats from './Chats';

function Chat() {
  return (
    <div style={{ height: '100%' }}>
      <ChatHeader chatName='Spider Man' />
      <Chats />
    </div>
  );
}

export default Chat;
