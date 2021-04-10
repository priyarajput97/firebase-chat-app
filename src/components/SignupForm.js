import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Error from '../components/Error';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function SignupForm({ toggleAuthType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { signup } = useAuth();

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      setError('');
      if (email && password && confirmPassword) {
        if (password !== confirmPassword) {
          setError('Password and confirm password should be same.');
          return;
        }
        const response = await signup(email, password);
        if (response.user.refreshToken) {
          history.push('/home');
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
        onClick={handleSignup}
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
