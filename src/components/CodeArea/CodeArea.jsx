import React from 'react'
import "./CodeArea.css"
import Nav2 from './Nav2/Nav2'
import TextArea from './textCode/TextArea'
function CodeArea() {
  return (
    <main className='main2'>
        <section className="header2">
              <Nav2></Nav2>
              <hr />
        </section>
        <section className="codeWriting">
        <TextArea></TextArea>
        <TextArea></TextArea>
        <TextArea></TextArea>
        </section>
        <section className="outputCode">

        </section>
    </main>
  )
}

export default CodeArea
