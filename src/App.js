import React, { useState,useEffect } from 'react';
import './App.css';
import Login from "./components/Login"
import Employees from "./components/Employees"
import AddEmployee from './components/AddEmployee';
import EditEmployee from "./components/EditEmployee"

function App() {
  const [login, setLogin] = useState(true);
  const [addNew, setAddNew] = useState(false)
  const [employeeObj, setEmployeeObj] = useState({})
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState({})
  // const [isSaved, setIsSaved] = useState(false)
  const [showEmployee, setShowEmployee] = useState(true)

  const [receivedData,setReceivedData] = useState({})

  const [index,setIndex] = useState()

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

  function editingEmployee(obj, index) {
    setShowEmployee(false)
    setEdit(true)

    //setState for index
    setIndex(index)

    // console.log("obj rcvd in App.js to be edited", obj)
    setReceivedData(obj)
    setShowEmployee(true)

  }

  function changedData(editedObj) {
    setShowEmployee(false)

    // console.log("edited obj in app.js:", editedObj)
    setEdit(false);
    setData(editedObj); //will give edited data to employees as props to render
    setEmployeeObj(editedObj)
    setShowEmployee(true)

  }

  useEffect(() => {
    setShowEmployee(false)
    setShowEmployee(true)
  },[data])
  
  
  return (
    <div className="App">
      <h1>Assignment 3 </h1>
      {login ? showEmployee && <Employees addNewEmployee={addNewEmployee} employeeObj={employeeObj} editingEmployee={editingEmployee} data={data} index={index}/> : <Login enableLogin={enableLogin} />}

      {login && addNew && <AddEmployee newEntry={newEntry} />}

      {login && edit && <EditEmployee receivedData={receivedData} changedData={changedData}  />}


    </div>
  );
}

export default App;
