import React from 'react';
 function ValidationMessage(props) {
    if (!props.valid) {
      return (
        <div className='text-danger' >{props.message}</div>
      )
    }
    return null;
  }

  export default ValidationMessage