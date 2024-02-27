import React from 'react'
import './demo1.css'
const demo1 = () => {
  return (
    <div>
    <p className='trnd'>Aviator UNISEX Running Shoes</p>
      <div className='container'>
        <div className='side1'>
            <div className='img2'>
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195175/06/dt01/fnd/IND/fmt/png/Aviator-Unisex-Running-Shoes"></img>
            </div>
            <div className='img1'>
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195175/06/fnd/IND/fmt/png/Aviator-Unisex-Running-Shoes"></img>
            </div>
            <div className='img3'>
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/195175/06/bv/fnd/IND/fmt/png/Aviator-Unisex-Running-Shoes"></img>
            </div>
        </div>
        <div className='side2'>
            <div className='img5'>
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195175/06/dt02/fnd/IND/fmt/png/Aviator-Unisex-Running-Shoes"></img>
            </div>
            <div className='img4'>
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195175/06/dt06/fnd/IND/fmt/png/Aviator-Unisex-Running-Shoes"></img>
            </div>
            <div className='img6'>
                <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/195175/06/sv04/fnd/IND/fmt/png/Aviator-Unisex-Running-Shoes"></img>
            </div>
        </div>
        <div className='rate'>
        <span className='span-cut'><s>Rs.6,599</s></span> <span className='h2'>Rs.4,599</span><br></br><br></br>
        <p>Prices include GST</p>
        <p className='sizes'>Available Sizes</p><p><hr/></p><br></br>
        <div className='size-box'>
          UK7
        </div>
        <div className='size-box'>
          UK8
        </div>
        <div className='size-box'>
          UK9
        </div>
        <div className='size-box'>
          UK10
        </div><br></br><br></br>
        <div className='description'>
          <h3>Description:</h3>
          <p>Here's a running shoe that has features you won't find in too many other shoes in this space. With its ProFoam midsole it is extremely lightweight and responsive. And that's exactly what you need on your next run. This cushioning combines with solid outsole biomechanics, including a decoupled heel, that delivers the high-end performance you demand.</p>
          <h3>Details:</h3>
          <ul>
            <li>Heel type: Flat</li>
            <li>Shoe width: Regular fit</li>
            <li>Shoe pronation: Neutral</li>
            <li>Solid outsole biomechanics</li>
            <li>Lock-down support in midfoot with internal structure</li>
            <li>Ideal for Road & Treadmill Running</li>
            <li>Decoupled heel</li>
            <li>Low boot</li>
          </ul>
          <h3>Features</h3>
          <p>ProFoam: PUMA's lightweight, high-rebound EVA midsole solution provides instant cushioning and a responsive ride</p>
        </div><br></br><br></br>
        <div className='but-div'>
          BUY NOW
        </div><br></br>
        {/* <div className='but-div'>
          ADD TO CART
        </div><br></br> */}
        <div className='but-div'>
          ADD TO WISHLIST
        </div>
        </div>
      </div>
    </div>
  )
}

export default demo1