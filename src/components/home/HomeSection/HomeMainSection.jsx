import React from 'react'
import "./HomeMainSection.css"
function HomeMainSection() {
  return (
    <div className='hero1'>
        <div className="title">
            <div>
                <img src="https://blog.codepen.io/wp-content/uploads/2023/09/logo-white-768x768.png" alt="" />
                <h1>The best place to build, test, and discover front-end code.</h1>
            </div>
            <div>
                <p>CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
            </div>
            <div>
                <button>Sign Up for Free</button>
            </div>
        </div>
        <div className="codeGifs">
            <div className="gif1"><img src="https://helpx.adobe.com/content/dam/help/en/dreamweaver/using/writing-editing-code/jcr:content/main-pars/image_1249847022/Multicursor-2-Gif.gif" alt="" /></div>
            <div className="gif2"><img src="https://static-assets.codecademy.com/assets/course-landing-page/le-review-mobile.gif" alt="" /></div>
            <div className="gif3"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--u2guSyHC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5dnrdqoql3sp9rw0gt1x.gif" alt="" /></div>
        </div>
    </div>
  )
}

export default HomeMainSection
