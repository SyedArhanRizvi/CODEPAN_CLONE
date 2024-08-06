import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <div className="SearchField"><input type="text" placeholder='Search CodePan here...'/></div>
      <div className="logInBtns">
        <button className='b1'>Log In</button>
        <button className='b2'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Nav
