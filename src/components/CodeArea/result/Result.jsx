import React from 'react'
import "./Result.css"
import { useContext } from 'react'
import { CodeData } from '../../../contextStore/CodeData'
function Result() {
    const {html, css, js} = useContext(CodeData);

    const srcCode = `

            <html>${html}</html>
            <style>${css} </style>
            <script>${js}</script>
    `
  return (
    <>
      <iframe srcDoc={srcCode} frameborder="0" title='Output' sandbox='allow-scripts'> </iframe>
    </>
  )
}

export default Result
