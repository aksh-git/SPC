import React, { useEffect, useState } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { TiWarningOutline } from 'react-icons/ti'
import '../style/QuizPlay.css'

function QPCard(props) {

  const [qtype, setqtype] = useState("")
  const qques  = props.qques;
  const quiz = props.qdecp;
  
  useEffect(() => {
    setqtype(qques.store.type)
    console.log("type chnage done");
  }, [props])
  
  return (
    <div className='playarea'>
      <div className='pa-1'>
        <div className='topic'>
          
        </div>
        <div className='h-topic'>
            <p>{quiz.title}</p>
        </div>
        <div className='report'>  
          <div>
            <RiErrorWarningLine className='item error'/>
          </div>
          <TiWarningOutline   className='item warn'/>
        </div>
      </div>
      <div style={{display:qtype==="mcq"?"":"none"}} className='pa-2'>
        
      </div>
      <div style={{display:qtype==="fill_up"?"":"none"}} className='pa-2'>
        
      </div>
    </div>
  )
}

export default QPCard