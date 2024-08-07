import React from 'react';
import './TextArea.css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

function TextArea({ value, onChange }) {
  
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className='parentText'>
      <div className="textAreaNav">
        {/* Navigation or additional elements can go here */}
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
