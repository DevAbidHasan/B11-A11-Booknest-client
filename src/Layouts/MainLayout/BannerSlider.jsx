import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../../public/book-5.jpg";
import img2 from "../../../public/book-6.jpg";
import img3 from "../../../public/book-7.jpg";
import img4 from "../../../public/book-8.jpg";

const BannerSlider = () => {
  return (
    <div className="w-full h-[350px] md:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img1}
              alt="Plant Care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl md:text-4xl poppins font-bold">Discover New Worlds</h2>
              <p className="mt-2 inter">Dive into the magic of books 📚</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img2}
              alt="Plant Variety"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl poppins md:text-4xl font-bold">Expand Your Knowledge</h2>
              <p className="mt-2 inter">Read, learn, and grow every day 🌟</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img3}
              alt="Plant Care Tips"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl poppins md:text-4xl font-bold">Library Adventures</h2>
              <p className="mt-2 inter">A treasure of books awaits you 🔖</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img4}
              alt="Plant Care Tips"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl poppins md:text-4xl font-bold">Modern Library Experience</h2>
              <p className="mt-2 inter">Find comfort, peace, and imagination in our spaces 📚</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
