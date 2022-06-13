import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/QuizPlay.css'

function QuizPlay() {
  const { id } = useParams();
    
  return (
    <div className='container'>
      <div className='playarea'>
        <div className='pa-1'></div>
        <div className='pa-2'></div>
      </div>
    </div>
  )
}

export default QuizPlay