import React, { useEffect } from 'react'
import Employees from "./Employees";
import swal from 'sweetalert';


const Dashboard = (props) => {

  useEffect(() => {
    swal("Loggin in Successfully")
  }, [])

  return (
    <div>
      Dashboard
      {/* <Employees />
      <button onClick={() => props.addNewEmployee()} > AddNewEmployee</button>
       */}
    </div>
  )
}

export default Dashboard
