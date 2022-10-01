import './App.css';
import React from 'react';
import { Line } from "react-chartjs-2";

function App() {

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

  if (buttonPressed.netChange < 0) {
    v.style.display = "block";
  } else {
    v.style.display = "none";
  }

  return (
    <div className="bg">

      <header>
        Program by the Cafe Calligraphists
      </header>

      <body>

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

        <br/>

        <div className="calc-place">
          <iframe className="calc" src="https://www.desmos.com/calculator"></iframe>
        </div>
        <div class="content-box" id="content-box">Content box</div>
      </body>
    </div>  
  );
}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default App;
