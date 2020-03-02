import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loadingStage, setLoadingStage] = useState(0);
  useEffect(() => {
    setTimeout(() => setLoadingStage(1), 1);
    setTimeout(() => setLoadingStage(2), 1000);
    setTimeout(() => setLoadingStage(3), 10000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Shwaloomba!</h1>
        <p>
          Shwaloomba is the shwaloombest site on the internet.
        </p>
        {loadingStage <= 0 && <p>Loading everything...</p>}
        {loadingStage >= 1 && <p><h2>First things First</h2> Lest's try shwaloombing everything into the index</p>}
        {loadingStage === 1 && <p>Loading part 2...</p>}
        {loadingStage >= 2 && <p><h2>Second things Second</h2> Everything is shwaloomped as planned. We are ready to proceed to phase three.</p>}
        {loadingStage === 2 && <p>Loading part 3...</p>}
        {loadingStage >= 3 && <p><h2>Everything loaded!</h2> WOW! everything is asworkrench as planned!</p>}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
