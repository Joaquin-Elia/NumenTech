import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CarrouselImg } from './CarrouselImg';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './Carrousel.css';

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
                    540: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                id="gallery"
            >
                {CarrouselImg.map((img, i)=>
                    <SwiperSlide key={i} className='swiper-slide'>
                        <img src={img} alt={`Imagen galeria ${i+1}`} className='carrousel-imgs'/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

export default Carrousel;