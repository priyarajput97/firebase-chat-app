import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function ProfileLink() {
  const { currentUser } = useAuth();
  const history = useHistory();
  console.log(currentUser);

  const goToProfilePage = () => {
    history.push('/profile');
  };

  return (
    <div className='ProfileLinkContainer' onClick={goToProfilePage}>
      <AccountCircleRoundedIcon
        style={{ color: 'white', marginRight: '5px' }}
      />
      <span className='UserTitle'>{currentUser?.email}</span>
    </div>
  );
}

export default ProfileLink;
