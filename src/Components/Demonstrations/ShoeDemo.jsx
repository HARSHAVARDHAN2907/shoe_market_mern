import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";
const ShoeDemo = (props) => {
  const [demodata, setDemoData] = useState([]);
  const [displaydata, setDisplayData] = useState([]);
  const location = useLocation();
  const data = location.state.url;
  const getDemoData = async () => {
    const response = await axios.post("http://localhost:3001/demo", {
      url: data,
    });
    setDemoData(response.data.demodata);
  };
  const getDisplayData = async (demodata) => {
    const response = await axios.post("http://localhost:3001/displaydata", {
      data: demodata,
    });
    setDisplayData(response.data.disp);
  };
  useEffect(() => {
    getDemoData(demodata);
  }, []);
  useEffect(() => {
    getDisplayData(demodata);
  }, [demodata]);
  console.log("Demodata", demodata);
  console.log(displaydata);
  return (
    <div>
      <div className="demo">
        {demodata.map((item, index) => (
          <div key={index}>
            {/* <div> */}
            <div className="trnd">{item["shoes"]["shoedesc"]}</div>
            {/* </div> */}
          </div>
        ))}
        <div className="container">
          <div className="side1">
            {displaydata.map((item, index) => (
              <div key={index}>
                <div className="img2">
                  <img
                    style={{ paddingBottom: "30px" }}
                    src={item["images"]["url1"]}
                  ></img>
                </div>
                <div className="img1">
                  <img
                    style={{ paddingBottom: "30px" }}
                    src={item["images"]["url6"]}
                  ></img>
                </div>
                {/* <div className='img3'><img style={{paddingBottom:"0px"}}  src={item["images"]["url3"]}></img></div> */}
              </div>
            ))}
          </div>
          <div style={{ marginRight: "0px" }} className="side2">
            {displaydata.map((item, index) => (
              <div key={index}>
                <div className="img5">
                  <img
                    style={{ paddingBottom: "30px" }}
                    src={item["images"]["url4"]}
                  ></img>
                </div>
                <div className="img6">
                  <img
                    style={{ paddingBottom: "30px" }}
                    src={item["images"]["url5"]}
                  ></img>
                </div>
                {/* <div className='img4'><img style={{paddingBottom:"0px"}} src={item["images"]["url2"]}></img></div> */}
              </div>
            ))}
          </div>
          <div className="rate">
            {demodata.map((item, index) => (
              <div key={index}>
                <span className="span-cut">
                  <s>Rs.{item["shoes"]["discount"]}</s>
                </span>
                <span className="h2">Rs.{item["shoes"]["shoemrp"]}</span>
                <br></br>
                <br></br>
                <p>Prices include GST</p>
                <p className="sizes">Available Sizes</p>
                <p>
                  <hr />
                </p>
                <br></br>
                <div className="size-box">UK7</div>
                <div className="size-box">UK8</div>
                <div className="size-box">UK9</div>
                <div className="size-box">UK10</div>
                <br></br>
                <br></br>
                <div className="description">
                  <h3>Description:</h3>
                  {displaydata.map((item, index) => (
                    <p>{item["desc"]}</p>
                  ))}
                </div>
                <br></br>
                <br></br>
                <Link style={{textDecoration:"none",color:"black"}} to='/buyproduct' state={{"email":item["shoes"]["url"],"price":item["shoes"]["shoemrp"]}}><div className="but-div">BUY NOW</div></Link>
                <br></br>
                <Link style={{textDecoration:"none",color:"black"}} to='/wish' state={{"url":item["shoes"]["url"],"price":item["shoes"]["shoemrp"],"discount":item["shoes"]["discount"],"desc":item["shoes"]["shoedesc"]}}><div className="but-div">ADD TO WISHLIST</div></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDemo;
