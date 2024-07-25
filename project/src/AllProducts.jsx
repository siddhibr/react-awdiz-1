import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AllProducts = () => {
  
  const[allProducts,setAllProducts]=useState([])
  console.log(allProducts,"allproducts")
  async function GetProducts(){
     try{
       const response = await axios.get("https://fakestoreapi.com/products");
         setAllProducts(response.data);
     }
     catch(error){
      console.log(error)
     }
  }

  useEffect(()=>{
       GetProducts();
  },[])
  return (
    <div>
      <p>AllProducts</p>
      <div>
      {allProducts.map((product) =>(
        <div>
          <img src= {product.image}/>
    
        <h1>{product.title}</h1>
        </div>
      ))}
           
      </div>
      </div>
  )
}

export default AllProducts;