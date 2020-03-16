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
      const result = await axios('https://covidtracking.com/api/states/daily');
      // console.log(result);
      if (!ignore) setData(result.data);
      if (!ignore) setDataLoaded(true);
    }
    fetchData();
    return () => { ignore = true; }

  },[]);

  const handleChange = (event) => {
    props.setSelectedState(event.target.value)
  }

  return (
    <div>
    {
(dataLoaded === false)
? <p>Loading...</p>
: <label>State: <select id="states" value={props.selectedState} onChange={handleChange}>
{
  [
    '',
    ...new Set(
      data.map(item => item.state)
    )
  ].map(
    item =><option value={item}>{item===''?'--None--':item}</option> )
}
</select></label>
}
</div>
  );
}

export default MyChart;
