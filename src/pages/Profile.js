import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button, TextField } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Header from '../components/Header';
import { uploadFile } from '../firebase-functions/fileUpload';

function Profile() {
  const { currentUser, updateProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const hiddenFileInput = useRef(null);

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

  const handleImgUpload = async (event) => {
    const file = event.target.files[0];
    const fileURL = await uploadFile(file);
    updateProfile(null, fileURL);
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
              style={{ fontSize: '200px', color: 'var(--app-green-light)' }}
            />
          )}

          <input
            type='file'
            ref={hiddenFileInput}
            onChange={handleImgUpload}
            style={{ display: 'none' }}
          />

          <Button
            variant='outlined'
            color='primary'
            type='password'
            onClick={() => hiddenFileInput.current.click()}
            className='my'
          >
            Edit Profile Image
          </Button>
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
