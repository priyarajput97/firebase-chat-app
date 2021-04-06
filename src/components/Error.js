import React from 'react';

function Error({ error }) {
  return error ? <div className='Error'>{error}</div> : <></>;
}

export default Error;
