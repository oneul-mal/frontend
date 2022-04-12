import React from "react";
import Slider from "../components/commons/slider/slider";

const Home = () => {
  return (
    <>
      <Slider>
        <div className='slide_content'>
          <img src='https://via.placeholder.com/1080x300' alt='slide_img' />
        </div>
        <div className='slide_content'>
          <img src='https://via.placeholder.com/1080x300' alt='slide_img' />
        </div>
        <div className='slide_content'>
          <img src='https://via.placeholder.com/1080x300' alt='slide_img' />
        </div>
      </Slider>
    </>
  );
};

export default Home;
