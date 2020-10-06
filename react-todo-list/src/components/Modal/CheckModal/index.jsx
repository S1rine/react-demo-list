import React from 'react';
import './index.scss';

import Model from '../index';

import { formatTime } from '../../../libs/utils';

export default function CheckModal(props) {
  const { data, closeCheckModal } = props;

  return (
    <Model title='查看事项'>
      <div className='check-modal check-time'>时间: {formatTime(data.id)}</div>
      <div className='check-modal check-content'>内容: {data.content}</div>
      <div className='check-modal check-status'>
        状态：
        <input type='checkbox' checked={data.completed} disabled />
      </div>
      <div className='check-modal check-btn'>
        <button className='btn btn-primary' onClick={closeCheckModal}>
          确定
        </button>
      </div>
    </Model>
  );
}
