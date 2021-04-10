import React from 'react';
import AllUsers from '../components/AllUsers';
import Chat from '../components/Chat';

function Home() {
  return (
    <div className='HomeContainer'>
      <div className='UsersContainer'>
        <AllUsers />
      </div>

      <div className='ChatContainer'>
        <Chat />
      </div>
    </div>
  );
}

export default Home;
