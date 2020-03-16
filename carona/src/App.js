import React from 'react';
import './App.css';
import { Doughnut, } from 'react-chartjs-2';
import OverallUsChart from './OverallUsStatusDonutChart';
// import DailyUsChart from './DailyUsStatusLineChart';




function App() {
  // fetch('https://covidtracking.com/api/us')
  // .then(async response => {
  //   let overallData = await response.json();
  //   setData(overallData);
  //   setDataLoaded(true);
  //   console.log("Response: ",overallData);
  // })
  return (
    <div className="App">

      <header className="App-header">
      <h1>COVID-19 Current Testing Statistics</h1>
<OverallUsChart/>

      </header>

    </div>
  );
}

export default App;
