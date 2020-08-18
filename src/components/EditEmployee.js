import React, { useState, useEffect } from 'react'

const EditEmployee = (props) => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [date, setDate] = useState("")

    function finalData() {
        var newObj = {
            fname,
            lname,
            email,
            salary,
            date
        }
        props.changedData(newObj);
    }

    useEffect(() => {
        return () => props.isSavedAppjs();
    })


    return (
        <div  style={{textAlign: 'left',
        width: "50vw",
        alignItems: "center",
        margin: "0 auto"
        }}>
            <h1>Enter New details</h1>
            Enter First Name
            <input type="text" onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" /> <br />
            <br></br>
            Enter Last Name
            <input type="text" onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" />  <br />
            <br></br>

            Enter Email Address
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
            <br></br>

            Enter Employee's Salary
            <input type="number" onChange={(e) => setSalary(e.target.value)} placeholder="Enter Salary" />  <br />
            <br></br>

            Enter Date of joining
            <input type="date" onChange={(e) => setDate(e.target.value)} placeholder="Enter Date of Joining" />  <br />
            <br></br>
            <br></br>
            
            <button onClick={finalData} style={{marginLeft:"200px"}}> Save </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default EditEmployee
