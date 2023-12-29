import React, { useState } from 'react'
import questions from "./resources/quizQuestion.json"
import "./App.css"

const MainPage = ({setPage}) => {
  const[qno,setQno]=useState(0)
  const next=()=>{
    if(qno<questions.length-1){

      setQno(qno+1)
    }else{
      alert("Questions completed")
    }
  }
  const previous=()=>{
    if(qno!=0){

      setQno(qno-1)
    }else{
      alert("No questions")
    }
  }
  return (
    <div className='main'>
      <p>{qno+1} of 15</p>
      <h1>{qno+1}.&nbsp;&nbsp;&nbsp;&nbsp;{questions[qno].question}</h1>
      <div className="buttons">
        <button>{questions[qno].optionA}</button><button>{questions[qno].optionB}</button><button>{questions[qno].optionC}</button><button>{questions[qno].optionD}</button>

      </div>
      <div className="bottom">
        <button onClick={next}>Next</button><button onClick={previous}>Previous</button><button onClick={()=>{setPage("main"),alert("Are you sure Want to quit")}}>Quit</button>
        <button onClick={()=>{setPage("result")}}>Results</button>
      </div>
    </div>
  )
}

export default MainPage
