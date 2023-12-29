import React from 'react'
import "./App.css"
const ResultsPage = ({setPage}) => {
  return (
    <div>
      <div className="Box">
        <h2>🎉 Congratulations 🎉</h2>
        <h2>No of questions answered 15</h2>
        <h2>No of questions Correctanswered 10</h2>
        <h2>No of questions wrong 5</h2>
        <h2>Score 10</h2>
        <h2>Percentage 80%</h2>
      </div>
      <button className='button' onClick={()=>{setPage("main")}}>Quit</button>
    </div>
  )
}

export default ResultsPage
