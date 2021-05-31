import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './loginNw';
import Contact from './Admin UI/src/App';
//

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>

          <Route path="/home" exact>
            <Contact/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;