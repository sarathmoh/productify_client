import React from 'react'
import { Button } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Productlist(props) {

  const navigate = useNavigate();
  const deleteProduct = async () => {
    const token=localStorage.getItem("token") 
    await axios.delete(`https://stark-atoll-80565.herokuapp.com/api/delete/${props.productid}`,{headers:{"auth-token":token}});
    props.data();


  };

  const updateProduct = () => {

    navigate(`/dashboard/updateproduct/${props.productid}/${props.productname}/${props.productprice}/${props.quantity}/${props.category}`);
  }
    

  return (
    <tr>
      <td style={{textAlign: 'center',verticalAlign: 'middle'}}>{props.slno + 1}</td>
      <td style={{textAlign: 'center',verticalAlign: 'middle'}}>{props.productname}</td>
      <td style={{textAlign: 'center',verticalAlign: 'middle'}}>{props.productprice}</td>
      <td style={{textAlign: 'center',verticalAlign: 'middle'}}>{props.quantity}</td>
      <td style={{textAlign: 'center',verticalAlign: 'middle'}}>{props.category}</td>
      <td style={{textAlign: 'center',verticalAlign: 'middle',width: '200px'}}><Button className="btn btn-outline-light m-4 my-2 rounded btn-md "
        type="submit" onClick={updateProduct} >Update</Button></td>
      <td style={{textAlign: 'center',verticalAlign: 'middle',width: '200px'}}><Button className="btn btn-outline-light m-4 my-2 rounded btn-md "
        type="submit" onClick={deleteProduct} >Delete</Button></td>
    </tr>




  )
}

export default Productlist;