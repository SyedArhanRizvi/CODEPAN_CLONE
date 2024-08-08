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
        </section>
        <section className="codeWriting">
        <TextArea value={html} onChange={setHtml} type={"/"} bg={"red"} name={"HTML"}></TextArea>
        <TextArea value={css} onChange={setCss} type={"*"} bg={"#1CE4E4"} name={"CSS"}></TextArea>
        <TextArea value={js} onChange={setJs} type={"{ }"} bg={"yellow"} name={"JS"}></TextArea>
        </section>
        <section className="outputCode">
            <Result></Result>
        </section>
    </main>
  )
}

export default CodeArea
