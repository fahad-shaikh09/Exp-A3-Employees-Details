import React, { useState, useEffect} from 'react'

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
        <div>
            <h1>Enter New details</h1>
            <h4> Enter First Name:</h4>
            <input type="text" onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" /> <br />
            <h4> Enter Last Name:</h4>
            <input type="text" onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" />  <br />
            <h4>  Enter Email Address:</h4>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
            <h4>  Enter Employee's Salary:</h4>
            <input type="number" onChange={(e) => setSalary(e.target.value)} placeholder="Enter Salary" />  <br />
            <h4>Enter Date of joining: </h4>
            <input type="date" onChange={(e) => setDate(e.target.value)} placeholder="Enter Date of Joining" />  <br />

            <button onClick={() => finalData()}> Save </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default EditEmployee
