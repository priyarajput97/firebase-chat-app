import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ChatHeader({ chatName }) {
  const [menuItem, setMenuItem] = useState(null);

  const handleClick = (event) => {
    setMenuItem(event.currentTarget);
  };

  const handleClose = () => {
    setMenuItem(null);
  };
  return (
    <div className='ChatHeader'>
      <img
        src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
        className='friendAvatar'
        alt='friend'
      />
      {chatName}

      <IconButton
        aria-controls='friendAction'
        aria-haspopup='true'
        style={{ marginLeft: 'auto' }}
        onClick={handleClick}
      >
        <MoreVertIcon color='primary' />
      </IconButton>
      <Menu
        id='friendAction'
        anchorEl={menuItem}
        keepMounted
        open={Boolean(menuItem)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>View Profile</MenuItem>
      </Menu>
    </div>
  );
}

export default ChatHeader;
