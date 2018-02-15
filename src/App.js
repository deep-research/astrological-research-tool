import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
