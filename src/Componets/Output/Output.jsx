import React from 'react';
import cn from 'classnames'
import './Output.scss'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import done from '../../assets/images/done.svg'
import edit from '../../assets/images/edit.svg'
import deleteImg from '../../assets/images/delete.svg'
import Loader from '../Loader/Loader';
import { fetchCustomers } from '../../Firebase/firebase';
import axios from 'axios';
import AddCardLoader from '../Loader/AddCardLoader/AddCardLoader';

const Output = ({addLoader}) => {
  const [modal, setModal] = React.useState(false)
  const [objForModal, setObjForModal] = React.useState({})
  const [loader, setLoader] = React.useState(true)
  const [textHide, setTextHide] = React.useState(false)
  const dispatch = useDispatch()
  let state = useSelector(store => store.card)
  // console.log(state);

  React.useEffect(() => {
    dispatch(fetchCustomers(setLoader))
    window.addEventListener('resize', e => {
      setTextHide(false)
      if (e.target.innerWidth <= 768) {
        setTextHide(true)
      }
    })
  }, [])
  
  function removeCard(id) {
    let agreement = window.confirm('Вы хотите удалить даную задачу')
    if (agreement) {
      dispatch({type: 'REMOVE_TODO', card: id})
      axios.delete(`https://todolist-redux-fb1ee-default-rtdb.firebaseio.com/${id}.json`)
    }
  }

  function setDone(obj) {
    obj.done = !obj.done
    dispatch({type: 'DONE_TODO', card: obj})

    axios.put(`https://todolist-redux-fb1ee-default-rtdb.firebaseio.com/${obj.id}.json`, {
      name: obj.name,
      description: obj.description,
      done: obj.done
    })
  }

  function completeCard(obj) {
    setObjForModal(obj)
    setModal(true)
  }

  return (
    <>
      <div className='output'>
        <div className='lists'>
          {addLoader && <AddCardLoader />}
          {loader ? <Loader /> : state.length ? state.map(obj => {
            return <div className="list" key={obj.id}>
              <div className="text-block">
                <p className='title'>{obj.name}</p>
                <p className={cn('description', {done: obj.done})}>{obj.description}</p>
              </div>

              <div className="btns-block">
                <button onClick={() => setDone((obj))} className="done">{textHide ? <img src={done} alt="done" /> :  'Done'}</button>
                <button onClick={() => {
                  completeCard(obj)
                }} className="complete">{textHide ? <img src={edit} alt="complete" /> :  'Complete'}</button>
                <button onClick={() => removeCard((obj.id))} className="delete">{textHide ? <img src={deleteImg} alt="delete" /> :  'Delete'}</button>
              </div>
            </div>
          }) : <h2 className='empty-todo'>Задач нет</h2>}
          
        </div>
      </div>

      {modal && <Modal
        obj={objForModal}
        setModal={setModal}
      />}
    </>
  );
};

export default Output;