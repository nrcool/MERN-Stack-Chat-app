import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main';

class App extends Component {

render(){
  return(
    <Router>
    <div className="app">
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/main" component={Main} />
    </Switch>
    </div>
    </Router>
  )
}
}

export default App

