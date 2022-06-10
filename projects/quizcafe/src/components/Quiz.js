import React from 'react'
import '../style/Quiz.css'
import { FiSearch } from 'react-icons/fi'

function Quiz() {
  return (
    <div className="container">
      <div className="q-menu">
        <div className="header-badge">
          <span className='txt heading'>Choose a Quiz here</span>
        </div> 
        <div className='search-bar'>
          <input type="search" placeholder='Find quiz by topic, domain........' />
          <div><div><FiSearch/></div></div>
        </div>
      </div>
    </div>
  )
}

export default Quiz