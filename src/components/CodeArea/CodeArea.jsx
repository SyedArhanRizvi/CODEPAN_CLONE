import React from 'react'
import "./CodeArea.css"
import Nav2 from './Nav2/Nav2'
import TextArea from './textCode/TextArea'
import { CodeData } from '../../contextStore/CodeData'
import { useContext } from 'react'
import Result from './result/Result'
function CodeArea() {

    const {html, css, js, setHtml, setCss, setJs} = useContext(CodeData);
    // console.log(CodeData);
    //  console.log(html);
     

  return (
    <main className='main2'>
        <section className="header2">
              <Nav2></Nav2>
              <hr />
        </section>
        <section className="codeWriting">
        <TextArea value={html} onChange={setHtml}></TextArea>
        <TextArea value={css} onChange={setCss}></TextArea>
        <TextArea value={js} onChange={setJs}></TextArea>
        </section>
        <section className="outputCode">
            <Result></Result>
        </section>
    </main>
  )
}

export default CodeArea
