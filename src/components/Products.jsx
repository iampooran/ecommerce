import { useEffect, useState } from "react";
import styled from "styled-components"
// import {popularProducts} from "../data"
import Product from "./Product";
import axios from "axios";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  
  const [product, setProduct] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProduct = async () =>{
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product");
        setProduct(res.data)
      }catch(err){

      }
    } 
    getProduct()
  },[cat])


  useEffect(()=>{
    cat && setFilteredProducts(
      product.filter(item=> Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  }, [product,cat,filters])


  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        );
    }
    else if(sort==="asc"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
        );
    }
    else{
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
        );
    }
    
  }, [sort])

  
  return (
    <Container>
      {cat ? filteredProducts.map(item=>(
        <Product  item={item} key={item._id}/>
      )):
      product.slice(0, 10).map(item=>(
        <Product item={item} key={item._id}/>
      ))
    }
    </Container>
  )
}

export default Products