import React from 'react';

function UserItem({ activeChat, setActiveChat }) {
  return (
    <div
      className={activeChat ? 'UserItem ActiveUserItem' : 'UserItem'}
      onClick={setActiveChat}
    >
      <img
        src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
        className='friendAvatar'
        alt='friend'
      />
      Spider man
    </div>
  );
}

export default UserItem;
