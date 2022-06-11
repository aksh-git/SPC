import React from 'react'
import '../style/Quiz.css'
import { FiSearch } from 'react-icons/fi'
import CustomSection from './CustomSection'

function Quiz() {

  let csdata ={
    csHeadTitle:"Category will go here",
    viewMoreLink:"/category?tech"
  }

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
        <CustomSection data={csdata} />
        <CustomSection data={csdata} />
        <CustomSection data={csdata} />
      </div>
    </div>
  )
}

export default Quiz