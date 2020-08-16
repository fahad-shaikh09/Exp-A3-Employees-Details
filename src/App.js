import React, { useState } from 'react';
import './App.css';
import Login from "./components/Login"
import Employees from "./components/Employees"
import AddEmployee from './components/AddEmployee';
import EditEmployee from "./components/EditEmployee"

function App() {
  const [login, setLogin] = useState(true);
  const [addNew, setAddNew] = useState(false)
  const [employeeObj, setEmployeeObj] = useState({})
  const [newEntryState, setNewEntryState] = useState(false)
  const [edit, SetEdit] = useState(false)
  const [data, SetData] = useState()


  // useEffect((
  //   () => {}
  // ),[addNew])

  function enableLogin() {
    setLogin(true)
  }

  function addNewEmployee() {
    setAddNew(true)
  }

  function newEntry(obj) {
    const { fname, lname, email, salary, date } = obj;  //Destructuring
    setEmployeeObj((employeeObj) => ({ ...employeeObj, fname, lname, email, salary, date }))
    setNewEntryState(true)
    setAddNew(false);
  }
  // console.log("employeeObj in app.js", employeeObj)
  function editingEmployee() {
    SetEdit(true)
  }

  function changedData(editedObj) {
    console.log("new obj in app.js:", editedObj)
    SetData(editedObj);
    SetEdit(false);
  }

  return (
    <div className="App">
      <h1>Assignment 3 </h1>
      {login ? <Employees addNewEmployee={addNewEmployee} employeeObj={employeeObj} newEntryState={newEntryState} editingEmployee={editingEmployee} data={data} /> : <Login enableLogin={enableLogin} />}

      {login && addNew && !newEntryState && <AddEmployee newEntry={newEntry} />}
      {login && addNew && newEntryState && <AddEmployee newEntry={newEntry} />}
      {login && edit && <EditEmployee changedData={changedData} />}

    </div>
  );
}

export default App;
