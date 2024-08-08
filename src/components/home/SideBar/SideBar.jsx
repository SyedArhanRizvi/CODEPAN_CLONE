import React from 'react'
import "./SideBar.css"
import {Link} from "react-router-dom"
import { RiSidebarFoldFill } from "react-icons/ri";
import { CodeData } from '../../../contextStore/CodeData';
import { useContext } from 'react';

function SideBar() {
  const {width, setWidth,opcacity, setOpcacity} = useContext(CodeData);
  const widthHandler = (prev)=>{
    setWidth((prev)=>!prev);
    
  }
  return (
    <div className='sideSection'>
      <div className="Links">

        <div className="logo"><img src="https://cdn.freebiesupply.com/logos/large/2x/codepen-logo-png-transparent.png" alt="" /></div>
        <div className="logo2"><h6>TRY OUR ONLINE EDITOR</h6></div>
        <div className="mainBtn"><button><Link to="codearea">Start Coding</Link></button></div>

        <div className="div1"><h3>Search Pens</h3></div>
        <div className="div1"><h3>Challenges</h3></div>
        <div className="div1"><h3>Spark</h3></div>
        <div className="div1"><h3>Code Pan</h3><span>Pro</span></div>
        <div className="sideDivBtn"><RiSidebarFoldFill style={{cursor:'pointer'}} onClick={widthHandler}/></div>
      </div>
      <div className="addvertisement">
        <div className="img"><img src="" alt="" /></div>
      </div>
    </div>
  )
}

export default SideBar
