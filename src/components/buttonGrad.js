import React from 'react';
import '../styles/button-grad.css';

function ButtonGrad(props) {
  return (
    <div id='btn-grad-parent-div'>
      <button id={props.id} className='btn-grad' onClick={() => props.onClickCallback()}>
        <span id={props.icon_id} className='material-symbols-outlined btn-grad-icon'>
          {props.icon}
        </span>
        <span id={props.label_id} className='btn-grad-label'>
          &nbsp;&nbsp;{props.label}
        </span>
      </button>
    </div>
  );
}

export default ButtonGrad;