import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../style/QuizPlay.css'
import QuesCard from './QuesCard';
import { RiErrorWarningLine } from 'react-icons/ri'
import { BsInfoCircle } from 'react-icons/bs'
import { MdTimer } from 'react-icons/md'
import { TiWarningOutline } from 'react-icons/ti'

function QuizPlay() {
  const [qtype, setqtype] = useState("");
  const [ques, setques] = useState({});
  const [player, setPlayer] = useState({});
  const { id } = useParams();

  const quiz = {
    title : "javascript fundamental",
    decp : "demo decription goes here, which explains the quiz and its purpose.",
    q_image : "https://www.google.com/favicon.ico",
    published_on : new Date(),
    published_by : "publisher name",
    updated_on : new Date(),
    total_plays : 99999,
    useful_votes : 999,
    ques_id : [ "234D4T1" , "134D4T1", "434D4T1"] //choose one by difficulty level
  }
  const qques = {
    store : {
      _id : "234D4T1",
      type : "mcq" ,
      allowed_time : 10,
      diff_level : 1 // 1-10
    },
    ques : "This is a demo question on quizcafe?",
    op1 : "okay",
    op2 : "i know",
    op3 : "good to know",
    op4 : "just a demo",
    cop : "op4"
  }
  
  useEffect(() => {
    setqtype(qques.store.type)
    setques(qques);
  }, [])

  class stopWatch {
    isworking = false;
    constructor(){
      this.min = 99;
      this.sec = 99;
    }
    start(){
      this.isworking=true;
    }
    stop(){
      this.isworking=false;
    }
    reset(){
      this.isworking=false;
    }
  }

  let watch = new stopWatch();
  
  let watchSatate = setInterval(() => {
    watch.start();
  }, 1000);

  useEffect(() => {
    
  }, [])
  
  return (
    <div className='q-container'>
      <div className='playarea'>
        <div className='pa-1'>
          <div className='head'>
          <div className='badge'>
            <div></div>
            <span>COURSE</span>
          </div>
          <div className='timer'>
            <MdTimer className='icon' />
            <span className='watch-txt'>{watch.min} : {watch.sec}</span>
          </div>
          </div>
          <div className='h-topic'>
            <span>{quiz.title}</span>
          </div>
          <div className='report'>  
          <TiWarningOutline title="Report this question" className='item warn'/>
        </div>
      </div>
      <div style={{display:qtype==="mcq"?"":"none"}} className='pa-2 mcq'>
        <div className='head'>
          <span className='curr-ques'>{qques.store.type}</span>
          <div className='status'>
            <progress min={0} max={10} value={3}></progress>
            <span>0/9 Completed</span>
          </div>
        </div>
        <div className='q-body'>
          <span className='question'><span style={{fontSize:'1.8rem'}} className='heading'>Q</span> : {qques.ques}</span>
          <ul className='options'>
            <li className='option'>{qques.op1}</li>
            <li className='option'>{qques.op2}</li>
            <li className='option'>{qques.op3}</li>
            <li className='option'>{qques.op4}</li>
          </ul>
        </div>
        <div className='q-btn'>
          <button className='button-base btn-push'>Continue</button>
        </div>
      </div>
      <div style={{display:qtype==="fill_up"?"":"none"}} className='pa-2 fill-up'>
        <div className='head'>
          <span className='curr-ques'>{qques.store.type}</span>
          <div className='status'>
            <progress min={0} max={10} value={3}></progress>
            <span>0/9 Completed</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    </div>
  )
}

export default QuizPlay