import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';

function Header(){

  return <p>hey this is login page</p>
}
function FormControl({label,children}){
  return(
    <div>
    <label style={{display:"inline"}}>{label}</label>
    <div style={{display:"inline"}}>{children}</div>
    </div>
  )

}



function Login() {
  const usernametemp="admin";
  const passwordtemp="admin";
  const navigate=useNavigate()
  const[username,setname]=useState('')
  const[password,setpswd]=useState('')
  function handleSubmit(e){
    e.preventDefault()
    if(usernametemp==="admin"&& passwordtemp==="admin"){
      navigate("/")
        
    }

  }
  return (
    <div>
    <Header/>
    <form action="" onSubmit={handleSubmit}>
    <FormControl label="Username:   ">
    <input type="text" name='username' onChange={e=>setname(e.target.value)}/>

    </FormControl>
    <FormControl label="Password:   ">
    <input type="password" name='password' onChange={e=>setpswd(e.target.value)}/>

    </FormControl>
    <input type="submit" value="submit" />
    <input type="reset" value="reset" />
    </form>
      
    </div>
  )
}

export default Login
