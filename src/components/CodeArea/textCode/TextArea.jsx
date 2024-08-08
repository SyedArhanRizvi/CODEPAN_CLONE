import React from 'react';
import './TextArea.css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import { FaCompress } from "react-icons/fa6";

function TextArea({ value, onChange, type, name, bg}) {
  
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className='parentText'>
      <div className="textAreaNav">
        <div className="name">
          <p><span style={{display:'inline-block',color:'black' , padding:'5px 4px', backgroundColor:bg, marginRight:'8px', borderRadius:'5px', fontWeight:'bold'}}>{type}</span>{name}</p>
        </div>
        <div className="sizing">
          <h1><FaCompress /></h1>
        </div>
      </div>
      
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </div>
  );
}

export default TextArea;
