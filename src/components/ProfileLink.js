import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Button } from '@material-ui/core';

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
        <span className='UserTitle' onClick={goToProfilePage}>
          Hi, {currentUser.displayName || currentUser?.email}
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
