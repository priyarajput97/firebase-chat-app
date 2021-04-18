import React from 'react';

function UserItem({ activeChat, setActiveChat }) {
  return (
    <div
      className={activeChat ? 'UserItem ActiveUserItem' : 'UserItem'}
      onClick={setActiveChat}
    >
      Spider man
    </div>
  );
}

export default UserItem;
