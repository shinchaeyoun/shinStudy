import React from 'react';

function Hello({ color, name, isSpecial }){
  return (
    <div style={{ color }}>
      { isSpecial && <b>*</b> }
      Begin react start {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "null name"
}

export default Hello;