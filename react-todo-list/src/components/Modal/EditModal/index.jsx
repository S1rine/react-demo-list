import React, { useState, useRef } from 'react';
import './index.scss';

import Modal from '../index';

import { formatTime } from '../../../libs/utils';

export default function EditModal(props) {
  const { data, closeEditModal, updateTodoItem } = props;
  const inputValue = useRef();
  const [todoItem, setTodoItem] = useState({ ...data });

  return (
    <Modal title='编辑事项'>
      <div className='edit-modal edit-time'>时间: {formatTime(todoItem.id)}</div>
      <div className='edit-modal edit-content'>
        <textarea
          ref={inputValue}
          value={todoItem.content}
          onChange={() => setTodoItem({ ...todoItem, content: inputValue.current.value })}
        />
      </div>
      <div className='edit-modal edit-status'>
        状态：
        <input
          type='checkbox'
          checked={todoItem.completed}
          onChange={() => setTodoItem({ ...todoItem, completed: !todoItem.completed })}
        />
      </div>
      <div className='edit-modal edit-btn'>
        <button className='btn btn-default' onClick={closeEditModal}>
          取消
        </button>
        <button className='btn btn-primary' onClick={() => updateTodoItem(todoItem)}>
          确定
        </button>
      </div>
    </Modal>
  );
}
