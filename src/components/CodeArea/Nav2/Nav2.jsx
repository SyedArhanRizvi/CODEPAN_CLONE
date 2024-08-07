import React from 'react'
import "./Nav2.css"
function Nav2() {
  return (
    <nav>
      <div className="codeLogo">
       <div><img src="https://blog.codepen.io/wp-content/uploads/2023/09/logo-white-768x768.png" alt="" /></div> 
       <div>
        <h1>Untitled</h1>
        <p>Captain Arhan</p></div>
      </div>
      <div className='div1'>
        <button>Save</button>
        <button>Setting</button>
        <button>Save</button>
        <button className='codeBtn'>Sign Up</button>
        <button>Log In</button>
      </div>
    </nav>
  )
}

export default Nav2
