import "./HomeServices.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay ,Pagination } from "swiper";
import BookButton from "../BookButton/BookButton";

const HomeServices = () => {
    return (
        <div className="home-services">
            <h2>Browser  our services</h2>

            <div className="swiper-container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay,Pagination]}
                    className="mySwiper"
                >
                    {data.map((service, key) =>(
                        <SwiperSlide>
                            <img src={service.image} alt="" />
                            <h3>{service.name}</h3>
                            <p>{service.summary}</p>
                            <div className="price-time">
                            <p>Price: {service.price}</p>
                            <p>Time: {service.time}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <BookButton/>
        </div>
    );
}
 
export default HomeServices;