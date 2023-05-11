import React from 'react';
import Input from '../Input/Input'
import Output from '../Output/Output'
import './Board.scss'

const Board = () => {
  const [addLoader, setAddLoader] = React.useState(false)
  return (
    <div className='board'>
      <h1>ToDo List</h1>
      <Input setAddLoader={setAddLoader} />
      <Output addLoader={addLoader} setAddLoader={setAddLoader} />
    </div>
  );
};

export default Board;