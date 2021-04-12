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
      <IconButton>
        <KeyboardBackspaceIcon
          color='primary'
          fontSize='large'
          onClick={history.goBack}
        />
      </IconButton>

      <h1 className='Heading'>{title}</h1>

      <Tooltip title='Sign Out' arrow placement='left'>
        <IconButton style={{ marginLeft: 'auto' }}>
          <ExitToAppIcon
            color='primary'
            fontSize='large'
            onClick={() => {
              signout();
              history.push('login');
            }}
          />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Header;
