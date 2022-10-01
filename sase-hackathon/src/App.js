import './App.css';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

var coordinatePairs = []; //empty array with ordered pairs
  var currentBalance; 

  class newBalance { //constructor
    constructor(moneySpent, time) {
      this.time = time;
      this.moneySpent = moneySpent;

    } 
  }
  function assignBalance() { //gets the current balance from the text box
    App.currentBalance = document.getElementById('user-money').value;
  }

  function buttonPressed() { //gets the money spent 
    var temp = new newBalance(1, assignBalance.currentbalance - document.getElementById('user-spent').value); //creates ordered pairs
    coordinatePairs.push(temp); 
    var netChange = Math.integral(); 
    currentBalance -= document.getElementById('user-spent').value;

  }

  function sum(endbound) { //adds all the values in the array except for the first and last ones
    for (let i = 1; i < endbound; i++) {
      var sum = 0;
      sum += coordinatePairs[i].moneySpent;
    }
    sum = ((Math.integral.g)/2) * ((sum * 2) + coordinatePairs[0] + coordinatePairs[endbound]); //reimann sums
  }

  Math.integral=function(x, y)  
  {
    var xp, s, result = 0, g = (x) / 10;
    for(var i = 0; i < 10; i++)
    {
      s = sum(coordinatePairs.length) - sum(coordinatePairs.length-1); //finds the difference between two points
      result += s;
    }

    return result;
    
  }

  var v = document.getElementById("content-box");

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {

  const [value,setValue] = useState(0);

  const [balances, setBalances] = useState([]);

  const saveValue = () => {
      setBalances(prev => [...prev, value]);
  }



  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: balances,
    }]
  };
  
  const options = {};

  

  console.log(balances)

  return (
    <div className="bg">

      <header>
        Program by the Cafe Calligraphists
      </header>
      <body>
      <script src="node_modules/chart.js/dist/Chart.bundle.min.js"></script>
      <script src="App.js"></script>
      <div>
        <canvas id="myChart"></canvas>
      </div>

      <h3 className="title">Money Mapper</h3>

        <div className="input-space">

          <label className="input-lbl" for="user-money">Current Balance: </label>
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="user-money" name="user-money" value={value} onChange={(e) => setValue(e.target.value)}/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <button className="button" type="submit" id="money-submit" onClick={saveValue}></button>

        </div>
        <br/><br/><br/>

        <div className="input-space">

          <label className="input-lbl" for="user-spent">Amount Spent: </label> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="user-spent" name="user-spent" value={value} onChange={(e) => setValue(e.target.value)}/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <button className="button" type="submit" id="spent-submit" onClick={saveValue}></button>

        </div>

        <Line data={data}></Line>

        <br/>

        

      </body>
    </div>  
  );
}

export default App;
