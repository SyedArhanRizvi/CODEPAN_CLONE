import React from 'react'
import "./TextArea.css"
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
function TextArea() {
  return (
    <div className='parentText'>
       <div className="textAreaNav">
        
       </div>
      
       <ControlledEditor style={{height:"100% !important"}}
                // onBeforeChange={handleChange}
                // value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    // mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
    
    </div>
  )
}

export default TextArea
