import React, { useState, useContext } from 'react'
import "./Home.css"
import SideBar from './SideBar/SideBar'
import Nav from './Nav/Nav'
import HomeMainSection from './HomeSection/HomeMainSection'
import HomeMainSection2 from './HomeSection/HomeMainSection2'
import Footer from './HomeSection/Footer'
import { CodeData } from '../../contextStore/CodeData'

function Home() {
  const {width, setWidth, opcacity, setOpcacity} = useContext(CodeData);
  const opacityHandler = (prev)=>{
    setOpcacity((prev)=>!prev);
  }

  return (
    <main className='homeMain'>
        
      <section className="sideBar" onMouseEnter={opacityHandler}><SideBar></SideBar></section>

      <section className="landingPage">
        <header className="head1">
            <Nav></Nav>
        </header>
        <section className="main1">
        <HomeMainSection></HomeMainSection>
        <section className="main2">
        <HomeMainSection2></HomeMainSection2>
        <HomeMainSection2></HomeMainSection2>
        <HomeMainSection2></HomeMainSection2>
        </section>
        </section>
        <Footer></Footer>
      </section>
    </main>
  )
}

export default Home
