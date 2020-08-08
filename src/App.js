import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./components/Login"
import Employees from "./components/Employees"
import AddEmployee from './components/AddEmployee';


function App() {
  const [login, setLogin] = useState(false);
  const [addNew, setAddNew] = useState(false)
  const [employeeObj,setEmployeeObj] = useState({})

  useEffect((
    () => {}
  ),[addNew])

  function enableLogin() {
    setLogin(true)
  }

  function addNewEmployee() {
    setAddNew(true)
  }

  function newEntry(obj){
    setEmployeeObj(obj)
  }
  // console.log("employeeObj in App.js: ", employeeObj)


  return (
    <div className="App">
      <h1>Assignment 3 </h1>
      {login ? <Employees addNewEmployee={addNewEmployee} employeeObj={employeeObj} /> : <Login enableLogin={enableLogin} />}

      {login && addNew && <AddEmployee newEntry={newEntry}/> }

    </div>
  );
}

export default App;
