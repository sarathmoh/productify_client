import React from 'react'
import { useState,useEffect } from 'react'
import Productlist from './Productlist'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './Userdetail.css'


const ViewProduct = (props) => {

const {id}=useParams()   

const [state,setState]=useState(true);
const alter=()=>{
setState(!state)
}
const [array,setArray]=useState([])

useEffect(() => {
    function getd() {
    // const data={
    //    id:id
      // }  
      
      const token=localStorage.getItem("token")
      axios.get(`https://stark-atoll-80565.herokuapp.com/api/viewproducts`,{headers:{"auth-token":token}})
        .then((res) => {
          setArray(res.data);
        })
    
        .finally();
    }

     getd();}
  

, [state]);

  


  return (
    <div>
     {array.length>0 ? 
     
    <Table responsive striped bordered hover variant="dark" >
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>SL NO</th>
                <th style={{textAlign: 'center'}}>Product</th>
                <th style={{textAlign: 'center'}}>Price</th>
                <th style={{textAlign: 'center'}}>Quantity</th>
                <th style={{textAlign: 'center'}}>Category</th>
                <th style={{textAlign: 'center'}}>Update</th>
                <th style={{textAlign: 'center'}}>Delete</th>
            </tr>
        </thead>
        <tbody>
         {array.map((product,index)=>{
            return(<Productlist slno={index} data={alter} key={product.productid} id={id} productid={product.productid} productname={product.productname} productprice={product.productprice}
            quantity={product.quantity} category={product.category}   />)
         })}
        </tbody>
    </Table>:
    <div className='four' ><p>Sorry No product Found</p></div>}
    </div>
  )
}

export default ViewProduct