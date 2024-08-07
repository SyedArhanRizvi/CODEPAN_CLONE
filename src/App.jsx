import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CodeArea from './components/CodeArea/CodeArea'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home/>}></Route>
          <Route path='/codearea' element={<CodeArea/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
