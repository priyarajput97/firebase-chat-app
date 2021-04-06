import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const LOGIN = 'login';
const SIGNUP = 'signup';

function Auth() {
  const [authType, setAuthType] = useState(LOGIN);

  const toggleAuthType = () => {
    authType === LOGIN ? setAuthType(SIGNUP) : setAuthType(LOGIN);
  };
  return (
    <div className='AuthBg'>
      <div className='AuthFormContainer'>
        {authType === LOGIN ? (
          <LoginForm toggleAuthType={toggleAuthType} />
        ) : (
          <SignupForm toggleAuthType={toggleAuthType} />
        )}
      </div>
    </div>
  );
}

export default Auth;
