import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Error from '../components/Error';
import { validateUsername } from '../helpers/HelperFunction';
import { useHistory } from 'react-router-dom';

function LoginForm({ toggleAuthType }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    if (username && password) {
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
      <Button
        variant='contained'
        color='primary'
        type='password'
        onClick={login}
        className='mb'
      >
        Login
      </Button>
      <div onClick={toggleAuthType} className='GreenCenteredLink'>
        New user? Sign up instead.
      </div>

      {error && <Error error={error} />}
    </form>
  );
}

export default LoginForm;
