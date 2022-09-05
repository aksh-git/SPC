import React, { useEffect, useState } from 'react'
import '../style/Csection.css'
import { MdOutlineReadMore } from 'react-icons/md'
import QuizCard from './QuizCard'
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function CustomSection(props) {

  const { csHeadTitle, viewMoreLink } = props.data;

  const navigate = useNavigate();
  
  let cardData = {
    ctitle:"Title goes here",//length < 17
    cimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    totalPlays:1234,
    updatedOn:new Date(),
    publishedOn:"Jun 2020",
    publishedBy:"quizcafe"
  }

  const [qdata, setqdata] = useState([cardData,cardData,cardData,cardData])

  // useEffect(() => {
  //   console.log(csHeadTitle);
  // }, [props.data])
  

  return (
    <div className='custon-section'>
      <div classname="cs-wrap">
        <div className='cs-header'>
            <div className='cs-head-txt'>{csHeadTitle}</div>
            <div onClick={()=>{navigate(viewMoreLink,{replace:false})}} className='cs-headbtn'>
              <span>View all</span>
              <MdOutlineReadMore className='icon'/>
            </div>
        </div>
        <div className='cs-content'>
            {qdata.length === 0 && <div style={{padding:'1rem',fontSize:'2.3rem'}}>
            <center>No data found : (</center></div>} 
          <Carousel className='cs-data'>
            {qdata.length > 0 && qdata.map((data)=>{
              return(
                <QuizCard cData={data} />
              )
            })} 
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default CustomSection