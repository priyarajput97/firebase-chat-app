import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Error from '../components/Error';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LoginForm({ toggleAuthType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { signin } = useAuth();

  const login = async (e) => {
    try {
      e.preventDefault();
      setError('');
      if (email && password) {
        const response = await signin(email, password);
        console.log(response);
        if (response.user.refreshToken) {
          history.push('/profile');
        }
      } else {
        setError('Please fill all the fields.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form noValidate autoComplete='off' className='FormContainer'>
      <TextField
        label='Email'
        variant='outlined'
        className='mb'
        value={email}
        onChange={(val) => setEmail(val.target.value)}
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
