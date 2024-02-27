import React from 'react'
import { useState,useEffect } from 'react';
import nikeBanner from '../../assets/nikebanner.png'
import './Nike.css'
import axios from 'axios'
import {Link,useNavigate} from'react-router-dom'
const Nike = () => {
  const navigate = useNavigate()
  const [Data,setData] = useState([]);
  const [DataJor,setDataJor] = useState([]);
  const [isLogged,setIsLogged] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/home");
        console.log(result,result);
        if (result.data.success === "Success") {
          setIsLogged(true);
        }
        else{
          navigate('/login')
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }); 
  const getDataFromDb=async()=>{
    try {
    const response = await axios.get("http://localhost:3001/nikedata",{
        desc:String,
        shoes:Object
    });
    setData(response.data.nikeData);
  } catch (error) {
    console.log(error);
  }
}
  const getJordanDataFromDb=async()=>{
    try {
    const response = await axios.get("http://localhost:3001/jordandata",{
    desc:String,
    shoes:Object,
    });
    setDataJor(response.data.nikeData);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  getDataFromDb();
  getJordanDataFromDb();
},[]);
console.log(Data)
console.log(DataJor)

  return (
    <div>
      <div className='puma'>
        <img src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/52b5f0b7-98c2-473e-9e75-1baaf3e8030c/jordan.jpg'></img>
        <div className='trnd'>INVINCIBLE NIKE EDITION</div>
        <div className='shoe-con'>
        {Data.map((item, index) => (
        console.log(item.shoes.shoedesc),
        item["shoes"]["count"]>0?(
          <div key={index}>
          <div>
          <Link to='/shoeview' state={{url:item.shoes.url}} >
          <div className='card2'>
          <img src={item["shoes"]["url"]}></img>
          <div className='desc2'>
            <span>{item["shoes"]["shoedesc"]}</span><br></br>
            <s>Rs.{item["shoes"]["discount"]}</s> <span>Rs.{item["shoes"]["shoemrp"]}</span>
          </div>
          </div>
          </Link>
          </div>
        </div>
        ):null
        ))}
        </div>
        <img src={nikeBanner} style={{height:"600px",paddingBottom:"3%"}}></img>
        <div className='trnd'>AIR JORDANS</div>
        <div className='shoe-con'>
        {DataJor.map((item, index) => (
        item["shoes"]["count"]>0?(
          <div key={index}>
          <div>
          <a>
          <div className='card2'>
          <img src={item["shoes"]["url"]}></img>
          <div className='desc2'>
            <span>{item["shoes"]["shoedesc"]}</span><br></br>
            <s>Rs.{item["shoes"]["discount"]}</s> <span>Rs.{item["shoes"]["shoemrp"]}</span>
          </div>
          </div></a>
          </div>
        </div>
        ):null
        ))}
        </div>
      </div>
    </div>
  )
}

export default Nike
