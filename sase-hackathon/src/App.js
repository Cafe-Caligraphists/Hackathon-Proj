import './App.css';

function App() {
  return (
    <div className="bg">
      <header>Program by the Cafe Calligraphists</header>
      <h3 className="title">Money Mapper</h3>
      <body>
        <div className="input-space">
          <label className="input-lbl" for="userMoney">Current Balance: </label>
          <input className="inputs" placeholder="i.e. 8000.25" type="text" id="userMoney" name="userMoney"/><nbsp/>
          <input className="button" type="submit" value="Submit"></input>
        </div>
      </body>
    </div>
  );
}

export default App;
