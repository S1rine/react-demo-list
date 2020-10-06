import React, { useRef } from 'react';
import './index.scss';

export default function AddInput(props) {
  const { addTodoItem, isAddInputShow } = props;
  const inputValue = useRef();

  const handleAddClick = () => {
    const value = inputValue.current.value;
    const item = {
      id: new Date().getTime(),
      content: value,
      completed: false
    };
    addTodoItem(item);
    inputValue.current.value = '';
  };

  return (
    <div className={isAddInputShow ? 'add-input-wrapper show' : 'add-input-wrapper'}>
      <input ref={inputValue} type='text' className='add-input' placeholder='请输入待办事项' />
      <button className='add-btn' onClick={handleAddClick}>
        添加
      </button>
    </div>
  );
}
