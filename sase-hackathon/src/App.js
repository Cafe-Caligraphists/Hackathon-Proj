import './App.css';

function App() {

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
      </body>
    </div>  
  );
}

export default App;
