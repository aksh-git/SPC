import React from 'react'
import '../style/Qcard.css'

function QuizCard(props) {

  const { ctitle, cimage, totalPlays, updatedOn, publishedOn, publishedBy } = props.cData;

  return (    
    <div className='q-card'>
      <div className='qc-main'>
        <img src={cimage} alt="Quiz|Cafe" className='qc-image' />
        <div className='qc-title'>
          <p className='qc-title-txt'>{ctitle}</p>
        </div>
      </div>
      <div className='qc-footer'>
        <p className='pub-date'>{publishedOn.toString()}</p>
        <p className='tot-plays'>{totalPlays.toString()+" plays"}</p>
      </div>
    </div>
  )
}

export default QuizCard