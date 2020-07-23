import React from 'react';

import Home from './home/Home';
import About from './about/About';

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h4> Welcome to react</h4>
      <Router>
      <div>
        <Link to='/'> HOME</Link>
        <Link to='/about'> ABOUT</Link>
      </div>

      <Switch>
        <Route exact path='/'  component={Home}  />
        <Route exact path='/about'   component={About} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
