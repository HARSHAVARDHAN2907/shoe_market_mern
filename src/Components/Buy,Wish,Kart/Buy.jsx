import React, { useEffect, useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Buy.css'
const Buy = (props) => {
  const[img,setImg] =useState();
  const[desc,setDesc] = useState();
  const location = useLocation();
  const data = location.state.email;
  const price = location.state.price;
  const [isLogged,setIsLogged] = useState(false)
  const [email,setEmail] = useState()
  const navigate = useNavigate()
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [size,setSize] = useState("UK8");
  const [phoneerr,SetPhoneErr] = useState();
  const [adderr,setAddErr] = useState();
  const [sizeerr,SetSizeErr] = useState();

  const handlechangePhone=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setPhone(e.target.value)
    SetPhoneErr('')
  }
  const handlechangeAddress=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setAddress(e.target.value)
    setAddErr('')
  }
  const handlechangeSize=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    setSize(e.target.value)
    SetSizeErr('')
  }


  console.log(phone,"phone")
  console.log(address,"address")
  console.log(size,"size")

  const handleSubmit=(e)=>{
    e.preventDefault()
    const regex=/[0-9]{10}/i;
    if(!phone){
        SetPhoneErr("Phone number is required");
        // return;
    }
    if(!regex.test(phone) && phone){
        SetPhoneErr("Invalid Phone Number");
        // return;
    }
    if(!address){
        setAddErr("Address is required to deliver");
        // return;
    }
    if(!size){
        SetSizeErr("Size is required for an order");
        // return;
    }
    if(phone && regex.test(phone) && address && size){
        insertPurchaseData();
        // alert("Ordered Successfully");
    }
  }

  const insertPurchaseData=async()=>{
    const response = await axios.post("http://localhost:3001/insertOrder",
    {
      desc:desc,
      url:img,
      email:email,
      size:size,
      address:address,
      phone:phone,
      price:price,
    }
    )
    if(response.status===200){
        alert("Ordered Successfully")
    }else{
        alert("failed");
    }
  }


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
  console.log(data,"data")

  const getData=async()=>{
    if(data){
    const response = await axios.post("http://localhost:3001/getProductData",{
        url:data
    })
    setImg(response.data.url);
    setDesc(response.data.desc);
}
  }
useEffect(()=>{
    getData();
},[])
console.log(img)
console.log(desc)
  return (
    <div style={{paddingBottom:"30px"}}>
        <div className='pro-container'>
        <div className='pro-size1'>
      <div className='trnd'>{desc}</div>
      <div className='trnd'>Product</div>
      <img className='pro-img' src={img}></img>
      <div className='trnd'>Your Email: <span style={{marginLeft:"10px"}}>{email}</span></div>
      </div>
      <div className='pro-size2'>
      <div className='pro-box'>
      <form>
        <span style={{fontSize:"25px"}} className='trnd'>Enter Phone Number:</span> <br></br><input type="tel" id="phone" onChange={handlechangePhone} value={phone} maxLength="10" name="phone" pattern="[0-9]{10}" placeholder="xxxxxxxxxx"></input><p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{phoneerr}</p>
        <div style={{fontSize:"25px",float:"left",paddingRight:"7px"}} className='trnd'>Enter Delivery Address:</div><br></br><textarea onChange={handlechangeAddress} value={address} rows="3" placeholder='221,Coronation Colony' cols="49"></textarea>
        <p style={{color:'red',fontSize:'15px',textAlign:'left'}}>{adderr}</p>
        <div style={{fontSize:"25px",float:"left",paddingRight:"7px"}} className='trnd'>Select Size:</div>
        <input type='radio' id='UK7' onChange={handlechangeSize} value='UK7' name='size'></input><span className='pro-span'>UK7</span>
        <input type='radio' id='UK8' defaultChecked defaultValue='UK8' onChange={handlechangeSize} value='UK8'  name='size'></input><span className='pro-span'>UK8</span>
        <input type='radio' id='UK9' onChange={handlechangeSize} value='UK9' name='size'></input><span className='pro-span'>UK9</span>
        <input type='radio' id='UK10' onChange={handlechangeSize} value='UK10' name='size'></input><span className='pro-span'>UK10</span><p></p>
        <input type='submit' onClick={handleSubmit} className='pro-button' value="ORDER NOW"></input>
      </form>
      </div>
      </div>
        </div>
    </div>
  )
}

export default Buy
