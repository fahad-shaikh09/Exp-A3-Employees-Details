import React, { useState } from 'react'


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function checkCredentials(){
    if (email === "admin@domain.com" && password === "admin") {
        props.enableLogin(); 
    } else alert("Wrong Credentials")
}

    return (

        <div>
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" /> <br />
            <h5>admin@domain.com</h5>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" />  <br />
            <h5>admin</h5>
            
            <button onClick={checkCredentials}>Login</button>
            {/* <button onClick={props.logout()}>Click to Log Out</button> */}
        </div>
    )
}

export default Login
