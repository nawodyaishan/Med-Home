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
import AddNewPatients from './Admin UI/Components/patients2';
import SearchPatients from './Admin UI/Components/searchpatients';
import ViewAllDoctors from './Admin UI/Components/viewAllDoctors';
import AddNewDoctor from './Admin UI/Components/addNewDoctor';
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

          <Route path ="/addNewPatients" exact>
            <Header/>
            <AddNewPatients/>
          </Route>      

          <Route path ="/searchPatients" exact>
            <Header/>
            <SearchPatients/>
          </Route>

          <Route path ="/viewAllDoctors" exact>
            <Header/>
            <ViewAllDoctors/>
          </Route>

          <Route path ="/addNewDoctor" exact>
            <Header/>
            <AddNewDoctor/>
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