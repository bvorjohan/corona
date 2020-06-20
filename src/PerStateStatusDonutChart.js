import React, {useState, useEffect} from 'react';
import './App.css';
import { Doughnut, } from 'react-chartjs-2';
import axios from 'axios';



function MyChart(props) {


  const [data, setData] = useState([{}]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      if (ignore) return
      const result = await axios('https://covidtracking.com/api/states');
      if (!ignore) setData(result.data.filter(item => item.state === props.state));
      if (!ignore) setDataLoaded(true);
    }
    fetchData();
    return () => { ignore = true; }

  },[props]);



  return (
<div>
<h2>Current Testing {props.state}</h2>
      {
        (dataLoaded===true)
        ? <Doughnut

         data={{
            labels: ['Positive', 'Negative', 'Pending', 'Deaths'],
            datasets: [{
                label: '# of Tests',
                data: [
                  data[0].positive,
                  data[0].negative,
                  data[0].pending,
                  data[0].death,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }}/>
        : <p>Loading...</p>
      }

</div>
  );
}

export default MyChart;
