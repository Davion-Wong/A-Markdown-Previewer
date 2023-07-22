import React from 'react';

function TextArea ({ value, onChange}) {
  return(
    <textarea id="editor" value={value} onChange={onChange} />
  )
}

export default TextArea;