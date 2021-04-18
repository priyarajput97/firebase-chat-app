import React, { useState } from 'react';
import ProfileLink from './ProfileLink';
import UserItem from './UserItem';

function AllUsers() {
  const [activeChat, setActiveChat] = useState();

  return (
    <div>
      <ProfileLink />
      <div>
        <UserItem activeChat={activeChat} setActiveChat={setActiveChat} />
      </div>
    </div>
  );
}

export default AllUsers;
