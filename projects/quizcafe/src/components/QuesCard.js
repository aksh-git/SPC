import React, { useEffect, useState } from 'react'

import '../style/QuizPlay.css'

function QuesCard(props) {

  const [qtype, setqtype] = useState("")
  const qques  = props.qques;
  const quiz = props.qdecp;
  
  useEffect(() => {
    setqtype(qques.store.type)
    console.log("type chnage done");
  }, [props])
  
  return (
    <></>
  )
}

export default QuesCard