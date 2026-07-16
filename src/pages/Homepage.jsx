import React from 'react'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <button onClick={()=>{navigate("/signup")}}>Signup</button>
        <button onClick={()=>{navigate("/login")}}>Login</button>
      </div>
    </>
  )
}

export default Homepage