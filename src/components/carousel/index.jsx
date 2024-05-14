// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            className="carousel__img"
            src="https://i.redd.it/buy0srooere71.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/j5aOOtsJinQtyRaqiB12TTRHdeX.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
