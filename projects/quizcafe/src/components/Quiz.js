import React from 'react'
import '../style/Quiz.css'
import { FiSearch } from 'react-icons/fi'
import CustomSection from './CustomSection'

function Quiz() {
  return (
    <div className="container">
      <div className="q-menu">
        <div className="header-badge">
          <span className='txt heading'>Explore Topics</span>
        </div> 
        <div className='search-bar'>
          <input type="search" placeholder='Find quiz by topic, domain........' />
          <div><div><FiSearch/></div></div>
        </div>
      </div>
      <div className='content'>
        <CustomSection />
      </div>
    </div>
  )
}

export default Quiz