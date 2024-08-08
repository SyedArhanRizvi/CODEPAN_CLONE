import React from 'react'
import "../HomeSection/Footer.css"
function Footer() {
  return (
    <section className='footer'>
        <div className="flinks">
            <div>
            <h3><a href="">CodePan</a></h3>
            <h3><a href="">For</a></h3>
            <h3><a href="">Social</a></h3>
            <h3><a href="">Community</a></h3>
            </div>
            <div className="flinks">
            <p><a href="">About</a></p>
            <p><a href="">Teams</a></p>
            <p><a href="">YouTube</a></p>
            <p><a href="">Spark</a></p>
            </div>
            <div className="flinks">
                <p><a href="">Blog</a></p>
                <p><a href="">Education</a></p>
                <p><a href="">Instagram</a></p>
                <p><a href="">Challanges</a></p>
                </div>
            <div className="flinks">
            <p><a href="">Podcast</a></p>
            <p><a href="">Privacy</a></p>
            <p><a href="">Mastodon</a></p>
            <p><a href="">Topics</a></p>
            </div>
            <div className="flinks">
            <p><a href="">Documentation</a></p>
            <p><a href="">Asset Hosting</a></p>
            <p><a href="">Code of Conduct</a></p>
            </div> 
        </div>
      <div className='ldiv'>
            <img src="https://cdn.freebiesupply.com/logos/large/2x/codepen-logo-png-transparent.png" alt="" />
            <p><a href="">©2024 CodePen</a></p>
            <p><a href="">Demo or it didn't happen.</a></p>
            <p><a href="">Terms of Service · Privacy Policy</a></p>



      </div>
    </section>
  )
}

export default Footer
