import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const WhyShouldSaleSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);


  return (
    <>
       <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
              </SwiperSlide>
        
            </Swiper>
    </>
  )
}

export default WhyShouldSaleSlider