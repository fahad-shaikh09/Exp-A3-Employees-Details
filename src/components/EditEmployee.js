import React, { useState, useeFfect, useEffect} from 'react'

const EditEmployee = (props) => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [date, setDate] = useState("")

    // console.log("fname: ", fname)
    // console.log("lname: ", lname)
    // console.log("email: ", email)
    // console.log("salary: ", salary)
    // console.log("date: ", date)
    
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
            <h2> Enter First Name:</h2>
            <input type="text" onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" /> <br />
            <br />
            <h2> Enter Last Name:</h2>
            <input type="text" onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" />  <br />
            <br />
            <h2>  Enter Email Address:</h2>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
            <br />
            <h2>  Enter Employee's Salary:</h2>
            <input type="number" onChange={(e) => setSalary(e.target.value)} placeholder="Enter Salary" />  <br />
            < br />
            <h2>Enter Date of joining: </h2>
            <input type="date" onChange={(e) => setDate(e.target.value)} placeholder="Enter Date of Joining" />  <br />
            <br />

            <button onClick={() => finalData()}> Save </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default EditEmployee
