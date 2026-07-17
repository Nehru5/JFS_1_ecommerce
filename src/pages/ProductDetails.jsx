import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import {useParams} from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'
const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerMobile, setCustomerMobile] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")

  function inc(){
    setQuantity(quantity+1)
  }
  function dec(){
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  let {id} = useParams()
    // console.log(id);
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then(x=>setProduct(x.data))
        .catch(err=>console.log(err))
    },[])

    function placeOrder(e){
      e.preventDefault()
      const data = {
        customer_id:localStorage.getItem("userID"),
        customer_name:customerName,
        customer_email:customerEmail,
        customer_mobile:customerMobile,
        customer_address:customerAddress,
        product_id:product.id,
        product_name:product.product_name,
        product_quantity:quantity,
        total:quantity*product.product_price,
        order_date:new Date().toLocaleDateString(),
        product_image:product.product_image
      }
      axios.post("http://localhost:3000/orders",data)
      .then(()=>{
        toast.success("Order placed")
        setCustomerAddress("")
        setCustomerName("")
        setCustomerMobile("")
        setCustomerEmail("")
      })
      .catch(err=>toast.error("Failed to place"))
    }
  return (
    <>
    <Navbar/>
      <center><h1>{product.product_name}</h1></center>
      <img src={product.product_image} height={"300px"}  alt="" />
      <h3>Price: {product.product_price}</h3>
      <p><b>Description: </b>{product.product_description}</p>
      <p><b>Ratings: </b>⭐⭐⭐⭐{product.product_ratings}/5</p>

      <button onClick={dec}>-</button>
      <h2>{quantity}</h2>
      <button onClick={inc}>+</button>

      <form onSubmit={placeOrder}>
        <input 
        type="text" 
        placeholder='Enter Customer name' 
        required 
        value={customerName}
        onChange={(e)=>setCustomerName(e.target.value)}
        /> <br />

        <input 
        type="text" 
        placeholder='Enter Email' 
        required 
        value={customerEmail}
        onChange={(e)=>setCustomerEmail(e.target.value)}
        /> <br />

        <input 
        type="text" 
        placeholder='Enter Mobile No' 
        required 
        value={customerMobile}
        onChange={(e)=>setCustomerMobile(e.target.value)}
        /> <br />

        <textarea 
        placeholder='Enter Address' 
        required
        value={customerAddress}
        onChange={(e)=>setCustomerAddress(e.target.value)}
        ></textarea> <br />

        <button>Place order</button>
      </form>
    </>
  )
}

export default ProductDetails