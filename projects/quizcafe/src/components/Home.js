import React from 'react'
import '../style/Home.css'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='container'>
      <section className='section0'>
        <div className='header'>
          <span className='heading wel-txt'>WELCOME TO QUIZ|CAFE</span>
          <span className='decp normal'>
            Do you actually know, what you think you know..?<br/><br/>
          </span>
          <div className='buttons'>
            <button className='button-base btn-push'><span className='normal'>Let's Check</span></button>
          </div>
          <div className='suggbtns'>
            <Link to="/explore"><button className='button-base btn-push'><span className='normal'>Explore</span></button></Link>
            <Link to="/about"><button className='button-base btn-push'><span className='normal'>About</span></button></Link>
            <Link to="/connect"><button className='button-base btn-push'><span className='normal'>Connect</span></button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home