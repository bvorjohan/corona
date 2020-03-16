import React from 'react';
import './App.css';
import { Doughnut, } from 'react-chartjs-2';
import OverallUsChart from './OverallUsStatusDonutChart';
import DailyUsChart from './DailyUsStatusLineChart';




function App() {

  return (
    <div className="App">

      <header className="App-header">
      <h1>COVID-19 US Testing Statistics</h1>
<OverallUsChart/>
<DailyUsChart/>
      </header>

    </div>
  );
}

export default App;
