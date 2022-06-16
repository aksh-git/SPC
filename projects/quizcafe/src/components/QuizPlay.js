import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../style/QuizPlay.css'
import QPCard from './QPCard';

function QuizPlay() {

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
  

  return (
    <div className='q-container'>
      <QPCard qques={qques} qdecp={quiz} />
    </div>
  )
}

export default QuizPlay