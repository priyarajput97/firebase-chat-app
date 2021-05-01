import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function UserItem({ user, activeChat, setActiveChat }) {
  return (
    <div
      className={activeChat ? 'UserItem ActiveUserItem' : 'UserItem'}
      onClick={setActiveChat}
    >
      {user.photoURL ? (
        <img src={user.photoURL} className='friendAvatar' alt='friend' />
      ) : (
        <AccountCircleRoundedIcon color='primary' className='friendAvatar' />
      )}
      {user.displayName ? user.displayName : user.email}
    </div>
  );
}

export default UserItem;
