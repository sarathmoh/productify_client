import React from 'react'
import {Link} from 'react-router-dom'
import Userdetail from './Userdetail'
import ViewProduct from './ViewProduct'





const Dashboard = (props) => {
  


  return (
    <div>
        
        <Userdetail/>
        <ViewProduct/>
        {/* <Link to={`/dashboard/addproduct`} variant="primary"  >Add Product</Link>
        <Link to={`/dashboard/viewproduct`} variant="primary"  >View Product</Link> */}
      
    </div>

  )
}

export default Dashboard