import React, { useState } from 'react';
import './App.css';
import Login from "./components/Login"
import Employees from "./components/Employees"
import AddEmployee from './components/AddEmployee';
import EditEmployee from "./components/EditEmployee"

function App() {
  const [login, setLogin] = useState(false);
  const [addNew, setAddNew] = useState(false)
  const [employeeObj, setEmployeeObj] = useState({})
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState({})
  const [isSaved, setIsSaved] = useState(false)
  const [showEmployee, setShowEmployee] = useState(true)

  function enableLogin() {
    setLogin(true)
  }

  function addNewEmployee() {
    setAddNew(true)
  }

  function newEntry(obj) {
    // const { fname, lname, email, salary, date } = obj;  //Destructuring
    // setEmployeeObj((employeeObj) => ({ ...employeeObj, obj }))
    setAddNew(false);
    setEmployeeObj(obj)
    setShowEmployee(true)
  }

  function editingEmployee() {
    setShowEmployee(false)
    setEdit(true)
  }

  function changedData(editedObj) {
    // console.log("new obj in app.js:", editedObj)
    setEdit(false);
    setData(editedObj); //will give edited data to employees as props to render
    setShowEmployee(true)
    setEmployeeObj(editedObj)
  }

  function isSavedAppjs() {
    setIsSaved(true)
    // console.log("isSaved: ", isSaved)
  }

  

  return (
    <div className="App">
      <h1>Assignment 3 </h1>
      {login ? showEmployee && <Employees addNewEmployee={addNewEmployee} employeeObj={employeeObj} editingEmployee={editingEmployee} data={data}/> : <Login enableLogin={enableLogin} />}

      {login && addNew && <AddEmployee newEntry={newEntry} />}

      {login && edit && <EditEmployee changedData={changedData} isSavedAppjs={isSavedAppjs} />}


    </div>
  );
}

export default App;
