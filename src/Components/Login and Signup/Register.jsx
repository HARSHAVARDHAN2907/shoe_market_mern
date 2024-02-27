import  { useState, useEffect } from 'react'
import './LogReg.css'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const history=useNavigate();
  const initial={uname:"",email:"",pass:"",cpass:""}
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
    if(Object.keys(formErrs).length===0 && isSubmit){
      try {
        const response = await axios.post("http://localhost:3001/register", {
          name: formvals.uname,
          email: formvals.email,
          pass: formvals.pass
        });
        if (response.status === 200) {
          console.log("Registration successful");
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
    if(!values.uname){
      err.uname="Username is required";
    }
    if(!values.pass){
      err.pass="Password is required";
    }
    else if(values.pass.length<4){
      err.pass="Password must contain more than 4 characters"
    }
    if(!values.cpass){
      err.cpass="Confirm Password is required";
    }
    else if(values.cpass.length<4){
      err.cpass="Password must contain more than 4 characters"
    }
    else if(values.pass!==values.cpass){
      err.cpass="Confirm password must be same as the password"
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
      <p>Register</p>
      <hr className='hr'/>
        <div className='email'>
          <label htmlFor='uname'>Username: </label><br></br>
          <input id='uname' name='uname' value={formvals.uname} onChange={handlechange} type='text'></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{formErrs.uname}</p>
          <label htmlFor='email'>Email: </label><br></br>
          <input id='email' name='email' value={formvals.email} onChange={handlechange} type='email'></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{formErrs.email}</p>
          <label htmlFor='pass'>Password: </label><br></br>
          <input id='pass' name='pass' value={formvals.pass} onChange={handlechange} type='password'></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{formErrs.pass}</p>
          <label htmlFor='cpass'>Confirm Password: </label><br></br>
          <input id='cpass' name='cpass' value={formvals.cpass} onChange={handlechange} type='password'></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{formErrs.cpass}</p><br/>
          <button type='submit' onClick={handleSubmit} id='submit' value='register'>Register</button>
        </div><br></br>
        <div className='no-acc'><Link to='/Login'>Don't have an account? Sign Up</Link></div>
    </div>
    </div>
  )
}

export default Register
