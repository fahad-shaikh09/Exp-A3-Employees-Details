import React, { useState } from 'react'

const AddEmployee = (props) => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [date, setDate] = useState("")

   
    function sendData() {
        var employeeObj = {
            fname,
            lname,
            email,
            salary,
            date
        }
        props.newEntry(employeeObj)
    }
    // console.log("Employee Obj in AddEmployee Component: ", employeeObj)
    return (

        <div>
            <div style={{textAlign: 'left',
                        width: "50vw",
                        alignItems: "center",
                        margin: "0 auto"
                        }}>
                <h1>Enter Employee's details to be added</h1>
            Enter First Name: <input type="text" onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" /> <br />
                <br />
            Enter Last Name: <input type="text" onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" /> <br />
                <br />
            Enter Email Address: <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /> <br />
                <br />
            Enter Employee's Salary: <input type="number" onChange={(e) => setSalary(e.target.value)} placeholder="Enter Salary" /> <br />
                <br />
            Enter Date of joining: <input type="date" onChange={(e) => setDate(e.target.value)} placeholder="Enter Date of Joining" /> <br />
                <br />
            </div>
            <button onClick={() => sendData()}>Add new Employee's details</button>

        </div>
    )
}

export default AddEmployee
