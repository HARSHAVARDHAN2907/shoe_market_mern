import React, { useEffect } from 'react'
import offer from '../../assets/pumaoffer.png';
import video1 from '../../assets/akshay.mp4';
import video2 from '../../assets/puma.mp4';
import video3 from '../../assets/nike.mp4';
import sp1 from '../../assets/sparxshoe1.jpg';
import sp2 from '../../assets/sparxshoe2.jpg';
import sp3 from '../../assets/sparxshoe3.jpg';
import n1 from '../../assets/nike1.png';
import n2 from '../../assets/nike2.png';
import n3 from '../../assets/nike3.png';
import './Firstpage.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const Firstpage = () => {
  const navigate =useNavigate();

  return (
    <div>
      <img src={offer} alt='nikal' className='img'></img>
      <div className="trnd">TRENDING KICKS</div>
    <div className="available">
        <div className="avail a" ><div className="txt">Sports</div></div>
        <div className="avail b" ><div className="txt">Casuals</div></div>
        <div className="avail c" ><div className="txt">Loafers</div></div>
        <div className="avail d" ><div className="txt">Sandals</div></div>
    </div><br></br>
      <div className='trnd'>
        SUPER-SOLID SPARX
      </div>
      <div className='sparx-con'>
        <div className='akshay'>
          <video width="600" height="600" muted autoPlay loop>
            <source src={video1} type='video/mp4'></source>
          </video>
        </div>
        <div className='sparx1'>
          <div className='sparxshoes'>
            <div className='spshoe'>
              <img src={sp1}></img>
              <span className='desc'>SPARX RUNNING SHOES FOR MEN SM 884<br/><s>RS.5,999</s>  Rs.1,999</span>
            </div>
            <div className='spshoe'>
              <img src={sp2}></img>
              <span className='desc'>SPARX RUNNING SHOES FOR MEN SM 830<br/><s>RS.1,999</s>  Rs.1,900</span>
            </div>
            <div className='spshoe'>
              <img src={sp3}></img>
              <span className='desc'>SPARX CASUAL SHOES FOR MEN SM 844<br/><s>RS.999</s>  Rs.950</span>
            </div>
          </div>
        </div>
      </div>
      <div className='trnd'>INVINCIBLE NIKE RUNNING
      </div>
      <div className='sparx-con'>
        <div className='akshay'>
          <video width="600" height="600" muted autoPlay loop>
            <source src={video3} type='video/mp4'></source>
          </video>
        </div>
        <div className='sparx1'>
          <div className='sparxshoes'>
            <div className='spshoe'>
              <img src={n1}></img>
              <span className='desc'>Nike Uni-sexual Ultra Comfort Kicks<br/><s>RS.9,999</s>  Rs.7,999</span>
            </div>
            <div className='spshoe'>
              <img src={n2}></img>
              <span className='desc'>Nike Invincible Running Shoes for Men<br/><s>RS.19,999</s>  Rs.13,999</span>
            </div>
            <div className='spshoe'>
              <img src={n3}></img>
              <span className='desc'>Nike Invincible Running Shoes for Women<br/><s>RS.16,999</s>  Rs.12,999</span>
            </div>
          </div>
        </div>
      </div>
      <div className='trnd'>SONIC PUMA
      </div>
      <div className='sparx-con'>
        <div className='akshay'>
          <video width="600" height="600" muted autoPlay loop>
            <source src={video2} type='video/mp4'></source>
          </video>
        </div>
        <div className='sparx1'>
          <div className='sparxshoes'>
            <div className='spshoe'>
              <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/387672/33/sv01/fnd/IND/fmt/png/Rider-Future-Vintage-Unisex-Sneakers"></img>
              <span className='desc'>Rider Future Vintage Unisex Sneakers<br/><s>RS.8,999</s>  Rs.6,999</span>
            </div>
            <div className='spshoe'>
              <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/393533/01/sv01/fnd/IND/fmt/png/PUMA-x-THE-SMURFS-RS-X-Sneakers"></img>
              <span className='desc'>Rider Smurfs Limited Edition Unisex Sneakers<br/><s>RS.11,999</s>  Rs.7,900</span>
            </div>
            <div className='spshoe'>
              <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/393163/02/sv01/fnd/IND/fmt/png/RS-3.0-Energy-Unisex-Sneakers"></img>
              <span className='desc'>RS 3.0 Energy Unisex Sport Kicks<br/><s>RS.7,999</s>  Rs.4,159</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Firstpage
