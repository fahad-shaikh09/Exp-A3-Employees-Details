import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    textAlign: "center"
  },
});

//COMPONENT TO DISPLAY EMPLOYEE'S LIST
export default function Employees(props) {
  const classes = useStyles();
  // console.log("props received in Employees.js: ", props)
  var receivedObj = props.employeeObj;
  var index = props.index
 var data=props.data;

  var [rows, setRows] = useState([]);


  useEffect(() => {
    if(Object.keys(receivedObj) != "")
      setRows(oldArray => [...oldArray, receivedObj])
  }, [receivedObj])
  
  useEffect(() => {
    updateRow(receivedObj,index)
  }, [data])

  function updateRow(obj, index) {
    let tempArray = rows
    tempArray[index] = obj
    console.log("temparray", tempArray)
    console.log("rows arrary: ", rows)
    setRows(tempArray)
  }

  function deleteRow(index) {
    let tempArray = [...rows];
    tempArray.splice(index, 1);
    setRows(tempArray)
  }


  function editRow(index) {
    let tempArray = [...rows]
    let obj = tempArray[index]
    //calls functions which renders new input form
    props.editingEmployee(obj,index);

  }

////////////////////////////////////////////////////////////////////

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Job Start Date</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Edit</TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row"> {row.fname} </TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.salary}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center"><button onClick={() => deleteRow(index)}>Delete</button></TableCell>
              <TableCell align="center"><button onClick={() => editRow(index)}>Edit</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={() => props.addNewEmployee()}>Add-New-Employee</button>
    </TableContainer>


  );
}
