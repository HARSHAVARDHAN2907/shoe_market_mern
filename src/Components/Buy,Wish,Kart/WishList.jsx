import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate,useLocation,Link} from 'react-router-dom'
const WishList = () => {
const [isLogged,setIsLogged] = useState(false)
const navigate = useNavigate();
const [email,setEmail] = useState();
const location = useLocation();
const url = location.state.url;
const desc = location.state.desc;
const discount = location.state.discount;
const price = location.state.price
const [ins,setIns] = useState(false)
const [disp,setdisp] = useState([]);
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
    const insertWish = async() =>{
        const result = await axios.post("http://localhost:3001/wish",{
            email:email,
            url:url,
            desc:desc,
            discount:discount,
            price:price,
        })
        if(result){
        setIns(true)
        console.log(result,"result")
        }
    }
    insertWish();
   
  }, [email, url, desc, discount, price])

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
    if(setIns){
        getdisp();
    }
  },[email,ins])
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

export default WishList
