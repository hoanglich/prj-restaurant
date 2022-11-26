import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Overlay from '../../../component/overlay/overlay';
import Button from '../../../component/button/button';
import './slide.css'
import { slideImage} from '../../../component/access/image';
import { publicRoutes } from '../../../routers/routers';
function Slide(){   

    return (
        <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        loopFillGroupWithBlank={true}
      >
        { slideImage.map((img, index)=> {
            return (
                <SwiperSlide key={index}>
                    <div className='slide-Box'>
                        <div className='slide-Image-Box'>
                            <img className='slide-Image' alt='img slide' src={img.src} />
                        </div>
                        <Overlay />
                        <div className='slide-Content-Box'>
                            <span className='slide-Content'>
                                {img.des}
                            </span>
                            <div className='slide-Btn'>
                                <Button
                                    to={publicRoutes.SHOP.path}
                                >
                                    <FontAwesomeIcon icon={faCartShopping} className="slide-Icon" />
                                    <span className='slide-Text'>order</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
  );

  
}


export default Slide