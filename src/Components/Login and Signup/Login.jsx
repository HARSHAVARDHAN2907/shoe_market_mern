import  { useState, useEffect } from 'react'
import './LogReg.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import Navbar from '../Navbar/navbar';
const Login = () => {
  const history=useNavigate();
  const initial={email:"",pass:""}
  const [formvals,setFormvals]=useState(initial);
  const [formErrs,setFormErrs]=useState({});
  const [isSubmit,setisSubmit]=useState(false);
  axios.defaults.withCredentials = true;  
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setFormvals({...formvals,[name]:value});
    console.log(formvals);
  }
  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    setFormErrs(validate(formvals));
    setisSubmit(true);
    if(Object.keys(formErrs).length===0){
      try {
        const response = await axios.post("http://localhost:3001/login", {
          email: formvals.email,
          pass: formvals.pass
        });
        if (response.status === 200) {
          console.log("Login successful");
          history('/home');
        } else if (response.status === 201) {
          alert(response.data["message"]);
        }
      } catch (error) {
        console.error("Error during registration:", error.message);
      }
    }
  }

  useEffect(()=>{
  },[formErrs]);

  const validate=(values)=>{
    const err={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.pass){
      err.pass="Password is required";
    }
    else if(values.pass.length<4){
      err.pass="Password must contain more than 4 characters"
    }
    if(!values.email){
      err.email="Email is required";
    }
    else if(!regex.test(values.email)){
      err.email="Invalid Email";
    }
    return err;
  }
  return (
    <div>
    <div className='creds'>My Account</div>
    <div className='box'>
      <p>Login</p>
      <hr className='hr'/>
        <div className='email'>
          <label htmlFor='email'>Email: </label><br></br>
          <input id='email' name='email' onChange={handlechange} value={formvals.email} type='email'></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{formErrs.email}</p>
          <label htmlFor='pass'>Password: </label><br></br>
          <input id='pass' name='pass' onChange={handlechange} value={formvals.pass} type='password'></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{formErrs.pass}</p>
        <br></br>
          <button type='submit' onClick={handleSubmit} id='submit' value='Login'>Login</button>
        </div><br></br>
        <div className='no-acc'><Link to='/Register'>Don't have an account? Sign Up</Link></div>
    </div>
    </div>
  )
}

export default Login
