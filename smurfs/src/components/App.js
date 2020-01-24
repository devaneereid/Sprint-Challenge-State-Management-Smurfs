import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import AddNewSmurf from './AddNewSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SmurfList />
        <AddNewSmurf />
      </div>
    );
  }
}

export default App;
