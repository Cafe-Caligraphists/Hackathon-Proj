import './App.css';

function App() {
  return (
    <div className="bg">

      <header>Program by the Cafe Calligraphists</header>
      <h3 className="title">Money Mapper</h3>

      <body>

        <div className="input-space">

          <label className="input-lbl" for="user-money">Current Balance: </label>
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="user-money" name="user-money"/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <input className="button" type="submit" id="money-submit" value="Submit"></input>

        </div>

        <br/><br/><br/>

        <div className="input-space">

          <label className="input-lbl" for="user-spent">Amount Spent: </label> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="user-spent" name="user-spent"/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <input className="button" type="submit" id="spent-submit" value="Submit"></input>

        </div>
      </body>
    </div>
  );
}

export default App;
