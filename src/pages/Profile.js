import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button, TextField } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Header from '../components/Header';

function Profile() {
  const { currentUser, updateProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    currentUser.displayName && setName(currentUser.displayName);
    currentUser.email && setEmail(currentUser.email);
  }, [currentUser]);

  const handleProfileUpdate = (e) => {
    try {
      e.preventDefault();
      updateProfile(name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header title='My Profile' />
      <div className='ProfilePageContainer'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt='Profile'
              className='UserProfileImage'
            />
          ) : (
            <AccountCircleRoundedIcon
              style={{ fontSize: '200px', color: 'var(--app-gray)' }}
            />
          )}

          {/* <Button
          variant='contained'
          color='primary'
          type='password'
          onClick={() => updateProfile(name)}
          className='my'
        >
          Edit Profile Image
        </Button> */}
        </div>

        <div className='ProfileContainer'>
          <form autoComplete='off' className='ProfileForm'>
            <TextField
              className='TextField mb'
              label='Email'
              value={email}
              disabled={true}
            />
            <TextField
              className='TextField mb'
              label='Display Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              variant='outlined'
              color='primary'
              onClick={handleProfileUpdate}
              className='my'
            >
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
