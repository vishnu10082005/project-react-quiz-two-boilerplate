import { useState } from 'react';
import './App.css';
import ResultsPage from './ResultsPage';
import MainPage from './MainPage';
import Play from './Play';

function App() {
  const [page, setPage] = useState("main");

  return (
    <>
      {page === "main" ? (<Play setPage={setPage} />) : page === "mainpage" ? (
        <MainPage setPage={setPage} />) : page==="result" ? (<ResultsPage setPage={setPage}/>) : " "}
    </>
  );
}

export default App;
