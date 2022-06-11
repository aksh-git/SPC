import React from 'react'
import '../style/Csection.css'
import { MdOutlineReadMore } from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel'
import QuizCard from './QuizCard'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CustomSection(props) {
  let cardData = {
    ctitle:"Title goes here",//lenght > 17
    cimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    totalPlays:1234,
    updatedOn:new Date(),
    publishedOn:"Jun 2020",
    publishedBy:"quizcafe"
  }

  return (
    <div className='custon-section'>
       <div className='cs-header'>
          <div className='cs-head-txt'>Heading text will be here</div>
          <div className='cs-headbtn'>
            <span>View all</span>
            <MdOutlineReadMore className='icon'/>
          </div>
       </div>
       <div className='cs-content'>
          <QuizCard cData={cardData} />
          <QuizCard cData={cardData} />
          <QuizCard cData={cardData} />
       </div>
    </div>
  )
}

export default CustomSection