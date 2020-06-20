import React, { useState } from 'react';
import './App.css';
import { Doughnut, } from 'react-chartjs-2';
import OverallUsChart from './OverallUsStatusDonutChart';
import DailyUsChart from './DailyUsStatusLineChart';
import PerStateOverall from './PerStateStatusDonutChart';
import PerStateDaily from './PerStateDailyStatusLineChart';
import StateDropdown from './StateDropdown';





function App() {
  const [selectedState, setSelectedState] = useState('');

  return (
    <div className="App">

      <header className="App-header">

        <h1>COVID-19 US Testing Statistics</h1>
        <StateDropdown selectedState={selectedState} setSelectedState={setSelectedState} />
        {
          selectedState === '' ?

            <div className="Main-chart-container">

              <OverallUsChart />
              <DailyUsChart />
            </div> :
            <div className="Main-chart-container">

              <PerStateOverall state={selectedState} />
              <PerStateDaily state={selectedState} />

            </div>
        }
      </header>

    </div>
  );
}

export default App;
