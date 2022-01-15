import React, { useState } from 'react';
import './Popup.scss';

interface Popup {
  title: string,
  description: string,
  isOpen: boolean,
  onCancel: () => void,
  onFinish: () => void
}

export const Popup: React.FC<Popup> = (props) => {
  return (
    <div className={`
      popup
      ${props.isOpen ? '' : 'hidden'}
    `}>
      <div className='popup__content'>
        <h2 className='text-black text-green text-xmedium'>{ props.title }</h2>
        <p> { props.description }</p>
        <br />
        <div className='flex-column'>
          { props.children }
        </div>
        <br />
        <div className='flex-row'>
          <button className='button button-gray button-xsmall' onClick={ () => props.onCancel() }>Cancel</button>
          <button className='button button-green flex-pull-right button-xsmall' onClick={ () => { props.onFinish(); props.onCancel(); }  }>Finish</button>
        </div>
      </div>
    </div>
  )
}