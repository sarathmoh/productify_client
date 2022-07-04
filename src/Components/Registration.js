import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'



const Registration = () => {

  let navigate=useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");

 

  const getName = (event) => {
    setName(event.target.value);
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const getPlace = (event) => {
    setPlace(event.target.value);
  };

  const submitHandler = async (event) => {
  event.preventDefault();

  const fetchData={
   username:name,
   email:email,
   password:password,
   place:place 
  }
 
 try{
 const response=await axios.post("https://stark-atoll-80565.herokuapp.com/auth/registration",fetchData)  
 console.log(response); 
 if(response.status===201){
 alert(response.data);
 navigate("/");
}
else if(response.status===200){
  alert(response.data)
} 
 } 
catch(error){

  console.log(error);

}

}

  return (
    <div className="form">
      <h2 className="p-3">Registration Form</h2>
      <Container>
        <div className="input-container my-3 p-3">
          <Form onSubmit={submitHandler} >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={getName}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={getEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={getPassword}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter place"
                onChange={getPlace}
              />
            </Form.Group>

            <Button
              className="btn btn-outline-light m-4 my-2 rounded btn-md "
              type="submit"
            >
              Submit
            </Button>
            <Button variant="success"
              className="btn btn-outline-light m-4 my-2 rounded btn-md "
              onClick={()=>{
                navigate("/")
              }}
            > 
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
