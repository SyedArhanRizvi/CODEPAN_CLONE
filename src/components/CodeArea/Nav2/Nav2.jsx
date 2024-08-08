import React, { useState } from 'react'
import "./Nav2.css"
import { FaPencil } from "react-icons/fa6";
import { RiExchangeBoxLine } from "react-icons/ri";

function Nav2() {
  const [title, setTitle] = useState("Untitled");
  const titleHandler = (e)=>{
   
    setTitle( prompt("Enter your title here...", e.target.value));
  }
  
  return (
    <nav>
      <div className="codeLogo">
       <div><img src="https://blog.codepen.io/wp-content/uploads/2023/09/logo-white-768x768.png" alt="" /></div> 
       <div>
        <h1>{title}</h1><FaPencil onClick={titleHandler}/>
        <p>Captain Arhan</p></div>
      </div>
      <div className='div1'>
        <button>Save</button>
        <button>Setting</button>
        <button><RiExchangeBoxLine style={{fontSize:'1.9em'}}/>
        </button>
        <button className='codeBtn'>Sign Up</button>
        <button>Log In</button>
      </div>
    </nav>
  )
}

export default Nav2
