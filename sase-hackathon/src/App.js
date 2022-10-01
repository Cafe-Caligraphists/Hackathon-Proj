import './App.css';
import React from 'react';
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
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  
  const options = {};

  var coordinatePairs = [];
  var currentBalance; 

  class newBalance {
    constructor(moneySpent, time) {
      this.time = time;
      this.moneySpent = moneySpent;

    } 
  }
  function assignBalance() {
    currentBalance = document.getElementById('user-money').value;
  }

  function buttonPressed() {
    //read input somehow
    var temp = new newBalance(1, document.getElementById('user-spent').value);
    coordinatePairs.push(temp);
    var netChange = Math.integral();

  }

  function sum(endbound) {
    for (let i = 1; i < endbound; i++) {
      var sum = 0;
      sum += coordinatePairs[i].moneySpent;
    }
    sum = ((Math.integral.g)/2) * ((sum * 2) + coordinatePairs[0] + coordinatePairs[endbound]);
  }

  Math.integral=function(x, y)  
  {
    var xp, s, result = 0, g = (x) / 10;
    for(var i = 0; i < 10; i++)
    {
      xp = xa + g; //width of rectangle per iterations
      s = sum(coordinatePairs.length) - sum(coordinatePairs.length-1);
      result += s;
    }

    return result;
    
  }

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
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="user-money" name="user-money"/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <input className="button" type="submit" id="money-submit" value="Submit" onclick="buttonPressed()"></input>

        </div>
        <br/><br/><br/>

        <div className="input-space">

          <label className="input-lbl" for="user-spent">Amount Spent: </label> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="user-spent" name="user-spent"/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <input className="button" type="submit" id="spent-submit" value="Submit" onclick="assignBalance()"></input>

        </div>

        <Line data={data}></Line>

        <br/>

        

      </body>
    </div>  
  );
}

export default App;
