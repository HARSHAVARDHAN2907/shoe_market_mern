import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate,useLocation,Link} from 'react-router-dom'
const NavWish = () => {
const [isLogged,setIsLogged] = useState(false)
const [email,setEmail] = useState();
const [disp,setdisp] = useState([]);
const navigate = useNavigate()
useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/home");
        console.log(result,result);
        if (result.data.success === "Success") {
          setIsLogged(true);
          setEmail(result.data.email)
        }
        else{
          navigate('/login')
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]); 

  useEffect(()=>{
    const getdisp = async() =>{
        const result = await axios.post("http://localhost:3001/getwish",
        {email:email}
        )
        if(result){
            console.log("disp",result.data)
            setdisp(result.data.disp)
        }
    }
    getdisp()
})
  return (
    <div>
      <div className='trnd'>YOUR WISHED PRODUCTS ARE SLID HERE</div>
    <div className='shoe-con'>
        {disp.map((item, index) => (
          <div key={index}>
          <div>
          <Link to='/shoeview' state={{url:item.url}} >
          <div className='card2'>
          <img src={item["url"]}></img>
          <div className='desc2'>
            <span>{item["desc"]}</span><br></br>
            <s>Rs.{item["discount"]}</s> <span>Rs.{item["price"]}</span>
          </div>
          </div>
          </Link>
          </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default NavWish
