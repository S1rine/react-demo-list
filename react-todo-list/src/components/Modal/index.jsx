import React from 'react';
import './index.scss';

export default function Model(props) {
  const { title, children } = props;

  return (
    <div className='modal-wrapper'>
      <div className='inner'>
        <div className='title'>{title}</div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}
