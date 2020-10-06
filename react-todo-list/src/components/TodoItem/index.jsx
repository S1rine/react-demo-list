import React from 'react';
import './index.scss';

export default function TodoItem(props) {
  const { data, updateTodoCheck, showCheckModal, showEditModal, showDeleteModal } = props;

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        className='todo-check'
        checked={data.completed}
        onChange={() => updateTodoCheck(data.id)}
      />
      <span className='todo-content'>{data.content}</span>
      <div className='btn-group'>
        <button className='btn btn-primary' onClick={() => showCheckModal(data.id)}>
          查看
        </button>
        <button className='btn btn-warning' onClick={() => showEditModal(data.id)}>
          编辑
        </button>
        <button className='btn btn-danger' onClick={() => showDeleteModal(data.id)}>
          删除
        </button>
      </div>
    </div>
  );
}
