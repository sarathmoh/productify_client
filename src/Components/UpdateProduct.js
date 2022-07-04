import React from 'react'
import { Container, Button, Form } from "react-bootstrap";
import { useState} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const {id} = useParams();
    const {productid} = useParams();
    const {productname} = useParams();
    const {productprice} = useParams();
    const {category} = useParams();
    const {quantity} = useParams();
   
    let navigate=useNavigate();
    const [productName, setProductName] = useState(productname);
    const [productPrice, setProductPrice] = useState(productprice);
    const [productQuantity, setQuantity] = useState(quantity);
    const [productCategory, setCategory] = useState(category);
  
   
  
    const getProduct = (event) => {
      setProductName(event.target.value);
    };
  
    const getPrice = (event) => {
      setProductPrice(event.target.value);
    };
  
    const getQuantity = (event) => {
      setQuantity(event.target.value);
    };
  
    const getCategory = (event) => {
      setCategory(event.target.value);
    };
  
    const addHandler = async (event) => {
      event.preventDefault();
  
    
  
      const productData = {
        
        productid:productid,
        productname: productName,
        productprice: productPrice,
        quantity: productQuantity,
        category: productCategory,
      };
  
      console.log(productData);

      const token=localStorage.getItem("token")
      try {
        const response = await axios.patch("https://stark-atoll-80565.herokuapp.com/api/updateproducts",productData,{headers:{"auth-token":token}})
        if(response.status===200){
            alert(response.data)
            navigate(`/dashboard/viewproduct`)

        }
       
       
        
      } catch (error) {
        console.log(error);
      }
      
    };
  
    return (
      <div className="form">
        <h2 className="p-3">Update Product</h2>
        <Container>
          <div className="input-container my-3 p-3">
            <Form onSubmit={addHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>ProductName</Form.Label>
                <Form.Control
                value= {productName}
                  type="text"
                  placeholder="Enter product name"
                  onChange={getProduct}
                  
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                 value={productPrice}
                  type="number"
                  placeholder="Enter price"
                  onChange={getPrice}
                 
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                value={productQuantity}
                  type="number"
                  placeholder="enter quantity"
                  onChange={getQuantity}
                  
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control
                value={productCategory}
                  type="text"
                  placeholder="Enter the category"
                  onChange={getCategory}
                  
                />
              </Form.Group>
  
              <Button
            type="submit"
                className="btn btn-outline-light m-4 my-2 rounded btn-md "
             
                
              >
                Update
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
}

export default UpdateProduct