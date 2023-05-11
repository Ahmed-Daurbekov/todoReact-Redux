import React from 'react';
import './Modal.scss'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Modal = ({obj, setModal}) => {
  const [name, setName] = React.useState(obj.name)
  const [description, setDescription] = React.useState(obj.description)

  const dispatch = useDispatch()
  let state = useSelector(state => state.card)
  
  let nameChange = (e) => {
    setName(e.target.value)
  }

  let descriptionChange = (e) => {
    setDescription(e.target.value)
  }

  let upDateCard = (e) => {
    let newObj = {
      done: obj.done,
      name,
      description,
    }
    
    dispatch({type: 'COMPLETE_TODO', card: [obj, {id: obj.id, ...newObj}]})
    axios.put(`https://todolist-redux-fb1ee-default-rtdb.firebaseio.com/${obj.id}.json`, newObj)
    setModal(false)
  }

  function closeModal() {
    setModal(false)
  }

  return (
      <div className='modal'>
        <div className="modal-body">
          <div onClick={closeModal} className="modal-close">&times;</div>
          <Input value={name} onChange={e => nameChange(e)} className="modal-body_input" placeholder='Название' />
          <Textarea value={description} onChange={e => descriptionChange(e)} className="modal-body_textarea" placeholder='Описание'></Textarea>
          <Button onClick={() => upDateCard(obj)} className="modal-body_btn">Изменить</Button>
        </div>
      </div>
  );
};

export default Modal;