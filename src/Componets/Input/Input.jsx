import React from 'react';
import './Input.scss'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { fetchCustomers } from '../../Firebase/firebase';
import Textarea from '../UI/Textarea/Textarea'

const Input = ({setAddLoader}) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [nameLabel, setNameLabel] = React.useState(false)
  const [descLabel, setDescLabel] = React.useState(false)
  const [cards, setCards] = React.useState([])
  const ADD_TODO = 'ADD_TODO'
  const dispatch = useDispatch()
  let nameRef = React.useRef(null)
  let descRef = React.useRef(null)
  
  function setNameLabelActive(e) {
    setNameLabel(true)
  }
  
  function unSetNameLabelActive(e) {
    if (!(e.target.value.trim())) {
      setNameLabel(false)
    }
  }

  function setDescLabelActive(e) {
    setDescLabel(true)
  }

  function unSetDescLabelActive(e) {
    if (!(e.target.value.trim())) {
      setDescLabel(false)
    }
  }

  async function addNewCard() {
    if (name != '' && description != '') {
      let obj = {
        name,
        description,
        done: false
      }
      setAddLoader(true)
      axios.post('https://todolist-redux-fb1ee-default-rtdb.firebaseio.com/.json', obj)
      .then(() => {
        dispatch(fetchCustomers(setAddLoader))
      })
      setCards([
        ...cards,
        obj
      ])
      
      nameRef.current.value = ''
      setNameLabel(false)
      setName('')
      descRef.current.value = ''
      setDescLabel(false)
      setDescription('')
    } else {
      console.log('work');
      console.log(descRef.current);
    }
  }

  return (
    <div className='inputComponent'>
      <div className="inputComponent-inputs">
        <div className="inputComponent-value inputComponent-value_1">
          <label className={`name ${nameLabel ? 'active' : ''}`} htmlFor="name">Название</label>
          <input ref={nameRef} onChange={e => setName(e.target.value)} onFocus={e => setNameLabelActive(e)} onBlur={e => unSetNameLabelActive(e)} tabIndex="1" id='name' name='name' type="text" />
        </div>

        <div className="inputComponent-btns">
          <button onClick={e => addNewCard(e)} className='inputComponent-btn add' tabIndex="3">Добавить</button>
        </div>
      </div>

      <div className="inputComponent-value inputComponent-value_2">
        <label className={`description ${descLabel ? 'active' : ''}`} htmlFor="description">Описание</label>
        <textarea ref={descRef} onChange={e => setDescription(e.target.value)} onFocus={e => setDescLabelActive(e)} onBlur={e => unSetDescLabelActive(e)} tabIndex="2" name="description" id="description"></textarea>
      </div>
    </div>
  );
};

export default Input;