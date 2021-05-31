
import Header from './components/Header';

import './App.css';

import ViewAttendance from './components/ViewAttendance';
import ViewStudents from './components/ViewStudents';
import AddStudent from './components/AddStudent';
import home from './components/home';
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>

  
    <div>
    <Header/>
    <Route path ="/add" exact component = {AddStudent} />
    <Route path = "/attendance" exact component = {ViewAttendance}/>
    <Route path = "/students" exact component = {ViewStudents}/>
    <Route path = "/home" exact component = {home}/>
    </div>
    </Router>
  );
}

export default App;
