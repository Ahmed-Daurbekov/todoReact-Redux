import React from 'react';
import './AddCardLoader.scss'

const AddCardLoader = () => {
  return (
    <div className='loader'>
      <p>Добавление</p>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default AddCardLoader;