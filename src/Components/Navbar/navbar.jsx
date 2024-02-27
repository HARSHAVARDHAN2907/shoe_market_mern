import React, { useState,useEffect} from 'react';
import './navbar.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate 
} from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
  const [reloadCount, setReloadCount] = useState(5);
  const navigate=useNavigate();
  const [isLogged,setIsLogged] = useState(false)
  const [username,setUserName] = useState()
  axios.defaults.withCredentials=true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/home");
        console.log(result,result);
        if (result.data.success === "Success") {
          setIsLogged(true);
          setUserName(result.data.email);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }); 


  const handleLogout=async(e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/logout");
    setIsLogged(false);
    navigate('/login')
  }

  console.log(isLogged)
  if(!isLogged ){
    return (
      <div className='nav'>
        <div className='logo'>
          <span>Dx</span>
        </div>
          <ul className='bar'>
              <li><a href="/home" className='home'>Home</a></li>
              <li><a className='home' href='/puma'>Puma</a></li>
              <li><a className='home' href='/nike'>Nike</a></li>
              <li>Sparx</li>
          </ul>
          <ul className='rightie'>
              <li><Link to='/login'><a><span class="glyphicon glyphicon-heart ff"></span></a></Link></li>
              {/* <li><Link to='/login'><a><span class="glyphicon glyphicon-shopping-cart"></span></a></Link></li> */}
              <li><Link to="/login"><a><span class="glyphicon glyphicon-user"></span></a></Link></li>
          </ul>
        </div>
    )
  }
  else if(isLogged){
    return (
      <div className='nav'>
        <div className='logo'>
          <span>Dx</span>
        </div>
          <ul className='bar'>
              <li><a href="/home" className='home'>Home</a></li>
              <li><a className='home' href='/puma'>Puma</a></li>
              <li><a className='home' href='/nike'>Nike</a></li>
              <li>Sparx</li>
          </ul>
          <ul className='rightie'>
              <li><Link to='/navwish'><a><span class="glyphicon glyphicon-heart ff"></span></a></Link></li>
              {/* <li><a><span class="glyphicon glyphicon-shopping-cart"></span></a></li> */}
              <li><Link to="/login" onClick={handleLogout}><a><span class="glyphicon">Logout</span></a></Link></li>
          </ul>
        </div>
    )
  }
  
}

export default Navbar

