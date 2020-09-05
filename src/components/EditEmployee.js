import React, { useState } from 'react'

const EditEmployee = (props) => {

    const { fname, lname, email, salary, date } = props.receivedData;

    const [newfname, setNewFname] = useState(fname)
    const [newlname, setNewLname] = useState(lname)
    const [newemail, setNewEmail] = useState(email)
    const [newsalary, setNewSalary] = useState(salary)
    const [newdate, setNewDate] = useState(date)

    // console.log("received obj to be edited in Edit component:", props.receivedData)
    function finalData() {
        var finalObj = {
            newfname,
            newlname,
            newemail,
            newsalary,
            newdate
        }
        props.changedData(finalObj);
        // console.log("Save is Clicked")
    }

   


    return (
        <div style={{
            textAlign: 'left',
            width: "50vw",
            alignItems: "center",
            margin: "0 auto"
        }}>
            <h1>Enter New details</h1>
            Enter First Name
            <input type="text" value={newfname} onChange={(e) => setNewFname(e.target.value)} placeholder="Enter First Name" /> <br />
            <br></br>
            Enter Last Name
            <input type="text" value={newlname} onChange={(e) => setNewLname(e.target.value)} placeholder="Enter Last Name" />  <br />
            <br></br>

            Enter Email Address
            <input type="email" value={newemail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Enter Email" /><br />
            <br></br>

            Enter Employee's Salary
            <input type="number" value={newsalary} onChange={(e) => setNewSalary(e.target.value)} placeholder="Enter Salary" />  <br />
            <br></br>

            Enter Date of joining
            <input type="date" value={newdate} onChange={(e) => setNewDate(e.target.value)} placeholder="Enter Date of Joining" />  <br />
            <br></br>
            <br></br>

            <button onClick={() => finalData()} style={{ marginLeft: "200px" }}> Save </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default EditEmployee
