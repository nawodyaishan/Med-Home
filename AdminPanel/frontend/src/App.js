import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './login';
import Home from './Admin UI/App';

import Header from './Admin UI/Components/Header';

import Doctors from './Admin UI/Components/doctors';
import Records from './Admin UI/Components/records';
import Patients from './Admin UI/Components/patients';
import home from './Admin UI/Components/home';
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
            <Home/>
            <Header/>
          </Route>          
        </Switch>

        <div>
          
          <Route path ="/patients" exact>
            <Header/>
            <Patients/>
          </Route>

          <Route path ="/doctors" exact>
            <Header/>
            <Doctors/>
          </Route>

          <Route path ="/records" exact>
            <Header/>
            <Records/>
          </Route>
          
          
          <Route path = "/home" exact component = {home}/>
        </div>
      </Router>

    </div>
  );
}

export default App;