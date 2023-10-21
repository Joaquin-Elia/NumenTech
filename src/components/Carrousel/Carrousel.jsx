import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carrousel.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { CarrouselImg } from './CarrouselImg';

const Carrousel = () => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                id="gallery"
            >
                {CarrouselImg.map((img,i)=>
                
                    <SwiperSlide key={i} className='swiper-slide'>
                        <div className='img'><img src={img} alt="" className='carrousel-imgs'/></div>
                    </SwiperSlide>
                )}           
            </Swiper>
        </>
    );
}

export default Carrousel;