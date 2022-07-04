import React from 'react'
import './Userdetail.css'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Userdetail = () => {

const [array,setArray]=useState({});    

    useEffect(() => {
        function getd() {
        // const data={
        //    id:id
          // }  
          
          const token=localStorage.getItem("token")
          axios.get(`https://stark-atoll-80565.herokuapp.com/api/userdetail`,{headers:{"auth-token":token}})
            .then((res) => {
              setArray(res.data);
            })
        
            .finally();
        }
    
         getd();}
      
    
    , []);


  return (
    <div className='main' >
        <div className='first'><h1>{array.name}</h1></div>
        <div className='second'><h1>{array.email}</h1></div>
        <div className='third'><h1>{array.place}</h1></div>
    </div>
  )
}

export default Userdetail