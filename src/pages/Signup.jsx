import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPasword] = useState("")

    function signup(e){
          e.preventDefault()
          const data = {name,email,mobile,password}
          axios.post("http://localhost:3000/users",data)
          .then(()=>{
            toast.success("Signup done...")
            setName("")
            setEmail("")
            setMobile("")
            setPasword("")
          })
          .catch(err=>toast.error("Failed to signup"))
    }
  return (
    <>
      <div className="form-container">
        <form onSubmit={signup}>
          <h2>Signup</h2>
          <input 
          type="text" 
          placeholder='Enter Name' 
          required 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Email' 
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Mobile No' 
          required 
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Password' 
          required 
          value={password}
          onChange={(e)=>setPasword(e.target.value)}
          /> <br />

          <button>Signup</button>
          <p>Are you existing user? <Link to={"/login"}>Login</Link></p>
        </form>
      </div>
    </>
  )
}

export default Signup