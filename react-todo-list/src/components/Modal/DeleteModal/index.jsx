import React from 'react';

import './index.scss';

import Model from '../index';

export default function DeleteModal(props) {
  const { data, closeDeleteModal, deleteTodoItem } = props;

  return (
    <Model title='提示'>
      <div className='delete-modal delete-tip'>确定要删除吗？</div>
      <div className='delete-modal delete-btn'>
        <button className='btn btn-default' onClick={closeDeleteModal}>
          取消
        </button>
        <button className='btn btn-primary' onClick={() => deleteTodoItem(data.id)}>
          确定
        </button>
      </div>
    </Model>
  );
}
