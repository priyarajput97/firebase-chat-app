import React, { useState } from 'react';
import { Fab, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function Chats() {
  const [msg, setMsg] = useState('');

  return (
    <div className='ChatsSection'>
      <div className='ChatsContainer'>chats</div>

      <div className='ChatInputSection'>
        <TextField
          className='ChatInput'
          placeholder='Type your text message...'
          variant='outlined'
          value={msg}
          onChange={(val) => setMsg(val.target.value)}
        />
        <Fab color='primary'>
          <SendIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Chats;
