import React from 'react'
import '../style/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='part0'>
        <div className='logo heading'>Quiz|Cafe</div>
      </div>
      <div className='part1'>
        <div className='menu'>
          <ul className='list normal'>
            <li className='menu-item'>Home</li>
            <li className='menu-item'>Take A Quiz</li>
            <li className='menu-item'>Leaderboard</li>
            <li className='menu-item'>Login</li>
            <li className='signup-btn btn-push button-base'>Signup</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar