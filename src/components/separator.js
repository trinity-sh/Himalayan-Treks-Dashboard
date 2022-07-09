import React from 'react';

function Separator(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: props.marginTop, marginBottom: props.marginBottom, alignItems: 'center' }}>
      <div style={{ flex: '1' }} />
      <div style={{ flex: '1', backgroundColor: 'black', height: '1px', position: 'relative', top: '50%' }} />
      <div style={{ flex: '3', fontFamily: "Montserrat", fontSize: '13px', fontWeight: '700' }}>{props.msg}</div>
      <div style={{ flex: '1', backgroundColor: 'black', height: '1px' }} />
      <div style={{ flex: '1' }} />
    </div>
  );
}

export default Separator;