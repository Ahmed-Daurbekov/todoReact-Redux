import React from 'react';

const testFile = () => {
  return (
    <>
    <div className='inputComponent'>
      <div className="inputComponent-inputs">
        <div className="inputComponent-value inputComponent-value_1">
          <label className={`name ${nameLabel ? 'active' : ''}`} htmlFor="name">Название</label>
          <input ref={nameRef} onChange={e => setName(e.target.value)} onFocus={e => setNameLabelActive(e)} onBlur={e => unSetNameLabelActive(e)} id='name' name='name' type="text" />
        </div>
        <div className="inputComponent-value inputComponent-value_2">
          <label className={`description ${descLabel ? 'active' : ''}`} htmlFor="description">Описание</label>
          <input ref={descRef} onChange={e => setDescription(e.target.value)} onFocus={e => setDescLabelActive(e)} onBlur={e => unSetDescLabelActive(e)} id='description'name='description' type="text" />
        </div>
      </div>

      <div className="inputComponent-btns">
        <button onClick={e => addNewCard(e)} className='inputComponent-btn add'>Добавить</button>
      </div>
    </div> 
    </>
  );
};

export default testFile;