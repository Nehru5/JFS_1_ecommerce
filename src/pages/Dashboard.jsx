import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  let username = localStorage.getItem("username")
  const [products,setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then(x=>setProducts(x.data))
    .catch(err=>console.log(err))
  },[])

  function handleProduct(id){
    navigate(`/productdetails/${id}`)
  }
  return (
    <>
  <Navbar/>
  <center><h1>Welcome {username}</h1></center>
  <div className="product-container">
    {products.map((x)=>{
    return <div className='product'>
      <img src={x.product_image} height={"200px"} width={"150px"} alt={x.product_name} />
      <h3>{x.product_name}</h3>
      <button className='view-btn' onClick={()=>{handleProduct(x.product_id)}}>View</button>
    </div>
  })}
  </div>
    </>
  )
}

export default Dashboard