import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useState} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const Addproduct = () => {

  const {id}=useParams()
  console.log(id)
 const navigate=useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
 

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
     
      productname: productName,
      productprice: productPrice,
      quantity: quantity,
      category: category,
    };

    console.log(productData);

    try {
      const token=localStorage.getItem("token")
      const response = await axios.post("https://stark-atoll-80565.herokuapp.com/api/products",productData,{headers:{"auth-token":token}}
      );
      console.log(response);
      if (response.status === 201) {
        alert(response.data);
        navigate(`/dashboard/viewproduct`)
        
      } else if (response.status === 200) {
        alert(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h2 className="p-3">Add Product</h2>
      <Container>
        <div className="input-container my-3 p-3">
          <Form onSubmit={addHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>ProductName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={getProduct}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                onChange={getPrice}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter quantity"
                onChange={getQuantity}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the category"
                onChange={getCategory}
              />
            </Form.Group>

            <Button
              className="btn btn-outline-light m-4 my-2 rounded btn-md "
              type="submit"
            >
              Add
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Addproduct;
