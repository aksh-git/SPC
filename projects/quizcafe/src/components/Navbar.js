import React from 'react'
import '../style/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='part0'>
        <div className='logo heading'>Quiz|Cafe</div>
      </div>
      <div className='part1'>
        <div className='menu'>
          <ul className='list normal'>
            <Link to="/"><li className='menu-item'>Home</li></Link>
            <Link to="/quiz"><li className='menu-item'>Take A Quiz</li></Link>
            <Link to="/Leaderboard"><li className='menu-item'>Leaderboard</li></Link>
            <Link to="/login"><li className='menu-item'>Login</li></Link>
            <Link to="/sign-up"><li className='signup-btn btn-push button-base'>Sign-up</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar