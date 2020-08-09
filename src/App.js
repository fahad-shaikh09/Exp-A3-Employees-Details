import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./components/Login"
import Employees from "./components/Employees"
import AddEmployee from './components/AddEmployee';


function App() {
  const [login, setLogin] = useState(false);
  const [addNew, setAddNew] = useState(false)
  const [employeeObj,setEmployeeObj] = useState({
    // fname: "",
    // lname: "",
    // email: "",
    // salary: "",
    // date: ""
  })

  const [newEntryState,setNewEntryState] = useState(false)

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
    const {fname,lname,email,salary,date} = obj;  //Destructuring
    setEmployeeObj(employeeObj => ({...employeeObj,fname,lname,email,salary,date}))
    setNewEntryState(true)
  }
    console.log("employeeObj in app.js", employeeObj)


  return (
    <div className="App">
      <h1>Assignment 3 </h1>
      {login ? <Employees addNewEmployee={addNewEmployee} employeeObj={employeeObj} /> : <Login enableLogin={enableLogin} />}

      {login && addNew && !newEntryState && <AddEmployee newEntry={newEntry}/> }
      {login && addNew && newEntryState && <AddEmployee newEntry={newEntry}/> }

    </div>
  );
}

export default App;
