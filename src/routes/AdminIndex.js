import React from 'react'
import Admin from '../Components/Admin/1_home dashboard/Admin';


const AdminIndex = () => {
  console.log("El valor de la authe es", global.authen);

  return (
    <div>
        <Admin/>
    </div>
  )
}

export default AdminIndex