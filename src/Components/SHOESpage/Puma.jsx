import React from 'react'
import { useState,useEffect } from 'react'
import './Puma.css'
import axios from 'axios'
import {Link,useNavigate} from'react-router-dom'
import Flash from '../../assets/dexter.mp4'
const Puma = () => {
  const navigate = useNavigate()
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
  return (
    <div>
      <div className='flash'><marquee>PUMA Flash Deals!! Grab Your Offers Now!!</marquee></div>
      <video style={{width:'100%'}} muted loop autoPlay><source src={Flash} type='video/mp4'></source></video>
      <div className='puma'>
      <br></br><br/>
      <div className='trnd'>NITRO EDITION</div>
      <div className='shoe-con'>
      <a href='/demo1'><div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/195337/02/sv01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-2-Men's-Running-Shoes" alt='shoe1'></img>
        <div className='desc2'>
        <span>Velocity NITRO<sup>TM</sup> 2 MEN'S Running Shoes</span><br></br>
        <s>Rs.12,999</s> <span>Rs.8,999</span>
        </div>
      </div></a>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/376151/02/sv01/fnd/IND/fmt/png/Fuse-2.0-Men's-Training-Shoes" alt='shoe1'></img>
        <div className='desc2'>
        <span>Fuse 2.0 MEN'S NITRO TRAINING SHOES</span><br></br>
        <s>Rs.7,999</s> <span>Rs.4,599</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/388911/01/sv01/fnd/IND/fmt/png/Teveris-NITRO%E2%84%A2-Base-Unisex-Sneakers" alt='shoe1'></img>
        <div className='desc2'>
        <span>Treveris NITRO<sup>TM</sup> BASE UNISEX SNEAKERS</span><br></br>
        <s>Rs.8,999</s> <span>Rs.7,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/376151/19/sv01/fnd/IND/fmt/png/Fuse-2.0-Men's-Training-Shoes" alt='shoe1'></img>
        <div className='desc2'>
        <span>Space Lab B and B Unisex Sneakers</span><br></br>
        <s>Rs.6,999</s> <span>Rs.4,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/392611/02/sv01/fnd/IND/fmt/png/RS-3.0-Unisex-Sneakers" alt='shoe1'></img>
        <div className='desc2'>
        <span>RS 3.0 NITRO EDITION Unisex Sneakers</span><br/>
        <s>Rs.7,999</s> <span>Rs.4,399</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/395082/01/sv01/fnd/IND/fmt/png/PUMA-Caven-2.0-Retro-Club-Unisex-Sneakers" alt='shoe1'></img>
        <div className='desc2'>
        <span>Puma Caven 2.0 Retro Club Sneakers</span><br></br>
        <span>Rs.6,499</span>
        </div>
      </div>
      </div>
      <div className='trnd'>FOOTBALL EDITION</div>
      <div className='shoe-con'>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107723/02/sv01/fnd/IND/fmt/png/FUTURE-7-PLAY-FG/AG-Men's-Football-Boots" alt='shoe1'></img>
        <div className='desc2'>
        <span>FUTURE 7 PLAY FG/AG Men's Football Boots</span><br></br>
        <s>Rs.7,999</s> <span>Rs.4,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107710/01/sv01/fnd/IND/fmt/png/FUTURE-7-Pro-Cage-Men's-Football-Shoes" alt='shoe1'></img>
        <div className='desc2'>
        <span>Ultra Play TT Unisex Football boots</span><br></br>
        <s>Rs.7,999</s> <span>Rs.4,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107726/01/sv01/fnd/IND/fmt/png/FUTURE-7-PLAY-TT-Men's-Football-Boots" alt='shoe1'></img>
        <div className='desc2'>
        <span>Ultra Play TT Unisex Football boots</span><br></br>
        <s>Rs.7,999</s> <span>Rs.4,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107723/01/sv01/fnd/IND/fmt/png/FUTURE-7-PLAY-FG/AG-Men's-Football-Boots" alt='shoe1'></img>
        <div className='desc2'>
        <span>FUTURE 7 MATCH FG/AG Men's Laceless Football Boots</span><br></br>
        <s>Rs.10,999</s> <span>Rs.7,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107715/01/sv01/fnd/IND/fmt/png/FUTURE-7-MATCH-FG/AG-Men's-Football-Boots" alt='shoe1'></img>
        <div className='desc2'>
        <span>FUTURE 7 MATCH FG/AG Men's Laceless Football Boots</span><br/>
        <s>Rs.10,999</s> <span>Rs.7,999</span>
        </div>
      </div>
      <div className='card2'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107563/06/sv01/fnd/IND/fmt/png/King-Ultimate-FG/AG-Unisex-Football-Boots" alt='shoe1'></img>
        <div className='desc2'>
        <span>FUTURE 7 MATCH FG/AG Men's Laceless Football Boots</span><br></br>
        <s>Rs.10,999</s><span>Rs.7,999</span>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Puma
