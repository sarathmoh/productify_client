import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'

const Dashboardnav = ({id}) => {

  const navigate=useNavigate();
 

  return (
    <Navbar bg="primary" variant="dark">
        <Container>
       
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/dashboard")}} >Dashboard</Nav.Link>
            <Nav.Link onClick={()=>{navigate(`/dashboard/addproduct`)}} >Addproduct</Nav.Link>
            <Nav.Link onClick={()=>{navigate(`/dashboard/viewproduct`)}} >ViewProduct</Nav.Link>
            <Nav.Link onClick={()=>{ localStorage.removeItem("token"); navigate("/")}}>Logout</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Dashboardnav