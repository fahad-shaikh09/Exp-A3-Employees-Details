import React from 'react';
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

function createData(fname, lname, email, salary , date) {
  return { fname, lname, email, salary , date };
}


export default function Employees(props) {
  const rows = [
    // createData("Fahad", "Shaikh", "test@mail.com", 1000, "1st Aug"),
    createData(props.employeeObj.fname, props.employeeObj.lname, props.employeeObj.email, props.employeeObj.salary, props.employeeObj.date),
  ];
  console.log("props in Employee.js: ", props)

  const classes = useStyles();

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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.salary}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={() => props.addNewEmployee()}>Add-New-Employee</button>
    </TableContainer>


  );
}
