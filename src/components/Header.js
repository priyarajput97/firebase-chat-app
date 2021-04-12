import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom';

function Header({ title }) {
  let history = useHistory();

  return (
    <div className='HeaderContainer'>
      <KeyboardBackspaceIcon
        className='BackIcon'
        fontSize='large'
        onClick={history.goBack}
      />
      <h1 className='Heading'>{title}</h1>
    </div>
  );
}

export default Header;
