import React from 'react';
import './index.scss';

export default function MyHeader(props) {
  const { openAddInput } = props;
  return (
    <div className='my-header'>
      <span className='inner'>待办事项</span>
      <span className='add-btn' onClick={openAddInput}>
        &#43;
      </span>
    </div>
  );
}
