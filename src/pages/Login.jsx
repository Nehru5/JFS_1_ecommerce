import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const navigate = useNavigate()
  function login(e){
    e.preventDefault()
    axios.get("http://localhost:3000/users")
    .then(x=>{
      let a = x.data
      let result = a.find((x)=>{
        return (x.email===email && x.password===password)
      })
      if(result){
        toast.success("Login success")
        localStorage.setItem("userID",result.id)
        localStorage.setItem("isLogged",true)
        localStorage.setItem("username",result.name)
        navigate("/dashboard")
      }else{
        toast.error("Invalid credentials")
      }
    })
    .catch(err=>toast.error("Login failed"))
  }
  return (
    <>
      <div className="form-container">
        <form onSubmit={login}>
          <h2>Login</h2>
          <input 
          type="text" 
          placeholder='Enter Email' 
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter password' 
          required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          /> <br />

          <button>Login</button>
          <p style={{textAlign:"center", marginTop:"10px"}}>New User? <Link to={"/signup"}>Signup</Link> </p>
        </form>
      </div>
    </>
  )
}

export default Login