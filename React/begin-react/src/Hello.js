import React from 'react';

function Hello({ color, name }){
  return <div style={{ color }}>Begin react start {name}</div>
}

Hello.defaultProps = {
  name: "uull name"
}

export default Hello;