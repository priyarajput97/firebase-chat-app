import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getAllUsers } from '../firebase-functions/Users';
import ProfileLink from './ProfileLink';
import UserItem from './UserItem';

function AllUsers() {
  const { currentUser } = useAuth();
  const [activeChat, setActiveChat] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const users = await getAllUsers(currentUser.uid);
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ProfileLink />

      {users.map((user) => {
        return (
          <UserItem
            key={user.uid}
            user={user}
            // activeChat={activeChat}
            // setActiveChat={setActiveChat}
          />
        );
      })}
    </div>
  );
}

export default AllUsers;
