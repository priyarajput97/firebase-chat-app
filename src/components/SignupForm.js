import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Error from '../components/Error';
import { validateUsername } from '../helpers/HelperFunction';
import { useHistory } from 'react-router-dom';

function SignupForm({ toggleAuthType }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    if (username && password && confirmPassword) {
      if (validateUsername(username)) {
        setError("Username can't contain spaces.");
        return;
      }
      history.push('/profile');
    } else {
      setError('Please fill all the fields.');
    }
  };

  return (
    <form noValidate autoComplete='off' className='FormContainer'>
      <TextField
        label='Username'
        variant='outlined'
        className='mb'
        value={username}
        onChange={(val) => setUsername(val.target.value)}
      />
      <TextField
        label='Password'
        type='password'
        variant='outlined'
        className='mb'
        value={password}
        onChange={(val) => setPassword(val.target.value)}
      />
      <TextField
        label='Password'
        type='password'
        variant='outlined'
        className='mb'
        value={confirmPassword}
        onChange={(val) => setConfirmPassword(val.target.value)}
      />
      <Button
        variant='contained'
        color='primary'
        type='password'
        onClick={login}
        className='mb'
      >
        Sign Up
      </Button>
      <div onClick={toggleAuthType} className='GreenCenteredLink'>
        Already a user? Login instead.
      </div>

      {error && <Error error={error} />}
    </form>
  );
}

export default SignupForm;
