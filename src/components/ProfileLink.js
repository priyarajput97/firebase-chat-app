import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Button, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

function ProfileLink() {
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  const goToProfilePage = () => {
    history.push('/profile');
  };

  return (
    <div className='ProfileLinkContainer'>
      {currentUser.photoURL ? (
        <img
          src={currentUser.photoURL}
          alt='Profile'
          className='UserProfileAvatar'
        />
      ) : (
        <AccountCircleRoundedIcon
          fontSize='large'
          style={{ color: 'white', marginRight: '5px' }}
        />
      )}
      <div className='UserTitleContainer'>
        <span className='UserTitle'>
          Hi, {currentUser.displayName || currentUser?.email}
          <IconButton style={{ marginLeft: '10px' }} onClick={goToProfilePage}>
            <EditIcon style={{ color: 'white', cursor: 'pointer' }} />
          </IconButton>
        </span>
        <Button
          variant='outlined'
          size='small'
          color='secondary'
          onClick={() => {
            signout();
            history.push('login');
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default ProfileLink;
