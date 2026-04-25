import React from "react";
import Product from "./Product";
import "./slideProduct.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation ,Autoplay } from 'swiper/modules';


function SlideProduct({title,data}) {
  return (
    <div className="slide_product slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Add bestselling products to weekly line up</p>
        </div>


        <Swiper 
  slidesPerView={5}

  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
loop={true}
        navigation={true} modules={[Autoplay,Navigation]} className="mySwiper">
      
      {data.map((item) => { 
        return(

          <SwiperSlide>   <Product item={item}/>  </SwiperSlide>
        )
       })}

       
      </Swiper>
       
      </div>
    </div>
  );
}

export default SlideProduct;
