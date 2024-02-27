import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PumaSlider.css';
import Flash from '../../assets/flash.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const PumaSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    
    <div className='tots'>
    <img className='img23' src={Flash} alt='offer'></img>
    <div className='trnd s24'>FLIP FLOPS</div>
    <Carousel  responsive={responsive} autoPlaySpeed={1500} pauseOnHover swipeable={false} draggable={false} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} autoPlay={true} infinite={true}>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395395/02/sv01/fnd/IND/fmt/png/Cool-Cat-2.0-Metallic-Shine-Men's-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Cool Cat Metallic Shine Men's Slides</span><br></br>
        <s>Rs.4,999</s><span> Rs.2,999</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/395395/01/sv01/fnd/IND/fmt/png/Cool-Cat-2.0-Metallic-Shine-Men's-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Cool Cat Metallic Shine Men's Slides</span><br></br>
        <s>Rs.4,999</s><span> Rs.2,999</span>
        </div>
      </div>
     <a href='/Fdemo'><div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/374823/26/sv01/fnd/IND/fmt/png/Divecat-V2-Lite-Unisex-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Divet V2 Lite Unisex Flip Flop Slides</span><br></br>
        <s>Rs.4,599</s><span> Rs.2,299</span>
        </div>
      </div></a>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374823/27/sv01/fnd/IND/fmt/png/Divecat-V2-Lite-Unisex-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Divet V2 Lite Unisex Flip Flop Slides</span><br></br>
        <s>Rs.4,599</s><span> Rs.2,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/374823/21/sv01/fnd/IND/fmt/png/Divecat-V2-Lite-Unisex-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Divet V2 Lite Unisex Flip Flop Slides</span><br></br>
        <s>Rs.4,599</s><span> Rs.2,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/308082/02/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-Leadcat-2.0-Men's-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Mercedes - AMG Petronas Leadcat 2.0 Men's Slides</span><br></br>
        <s>Rs.4,999</s><span> Rs.3,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/308082/01/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-Leadcat-2.0-Men's-Slides" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>Mercedes - AMG Petronas Leadcat 2.0 Men's Slides</span><br></br>
        <s>Rs.4,999</s><span> Rs.3,299</span>
        </div>
      </div>
    </Carousel>
    <div  className='trnd s24'>POPULAR AMONG PEOPLE</div>
    <Carousel  responsive={responsive} autoPlaySpeed={2000} pauseOnHover swipeable={false} draggable={false} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} autoPlay={true} infinite={true}>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377902/08/sv01/fnd/IND/fmt/png/Playmaker-Pro-Mid-Men's-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (WIND)</span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377902/12/sv01/fnd/IND/fmt/png/Playmaker-Pro-Mid-Men's-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (FLAME)</span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div>
     <a href='/Fdemo'><div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/393815/02/sv01/fnd/IND/fmt/png/RS-X-Underground-Drift-Unisex-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (Sand)</span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div></a>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/307492/04/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-RDG-Cat-2.0-Unisex-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (Air) </span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/387672/33/sv01/fnd/IND/fmt/png/Rider-Future-Vintage-Unisex-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (Earth)</span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/393163/02/sv01/fnd/IND/fmt/png/RS-3.0-Energy-Unisex-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (Scuba Edition)</span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div>
     <div className='card3 css.elements'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/393533/01/sv01/fnd/IND/fmt/png/PUMA-x-THE-SMURFS-RS-X-Sneakers" alt='shoe1'></img><br></br><br></br>
        <div className='desc2'>
        <span>PUMA RS-X ProFoam Series Unisex Sneakers (Smurfs edition)</span><br></br>
        <s>Rs.11,999</s><span> Rs.8,299</span>
        </div>
      </div>
    </Carousel>

    </div>
  );
};

export default PumaSlider;
