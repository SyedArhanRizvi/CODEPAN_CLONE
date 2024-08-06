import React from 'react'
import "./Home.css"
import SideBar from './SideBar/SideBar'
import Nav from './Nav/Nav'
import HomeMainSection from './HomeSection/HomeMainSection'
import HomeMainSection2 from './HomeSection/HomeMainSection2'
function Home() {
  return (
    <main className='homeMain'>
        
      <section className="sideBar"><SideBar></SideBar></section>

      <section className="landingPage">
        <header className="head1">
            <Nav></Nav>
        </header>
        <section className="main1">
        <HomeMainSection></HomeMainSection>
        <HomeMainSection2></HomeMainSection2>
        </section>
      </section>
    </main>
  )
}

export default Home
