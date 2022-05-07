import React from 'react';
import '../styles/data-table.css';
import '../styles/content-div.css';

export default function (props) {
  return (
    <div style={{ fontSize: '30px', fontFamily: 'Montserrat', fontWeight: '600', width: '65%' }}>
      {props.title}
      <div style={{ fontSize: '13px', color: '#5d677e', fontWeight: '600' }}>
        {props.sub}
      </div>
    </div>
  );
}