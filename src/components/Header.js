import React from 'react';
import { useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../contexts/AuthContext';
import { IconButton, Tooltip } from '@material-ui/core';

function Header({ title }) {
  let history = useHistory();
  const { signout } = useAuth();

  return (
    <div className='HeaderContainer'>
      <IconButton onClick={history.goBack}>
        <KeyboardBackspaceIcon color='primary' fontSize='large' />
      </IconButton>

      <h1 className='Heading'>{title}</h1>

      <Tooltip title='Sign Out' arrow placement='left'>
        <IconButton
          style={{ marginLeft: 'auto' }}
          onClick={() => {
            signout();
            history.push('login');
          }}
        >
          <ExitToAppIcon color='primary' fontSize='large' />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Header;
