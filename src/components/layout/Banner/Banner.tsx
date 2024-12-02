import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';

const bannerSlides = [
  {
    pretitle: 'Bienvenido a tu',
    title: '\nMERCADO\nA LA MANO',
    subtitle: 'Conecta con compradores locales y revoluciona tu forma de hacer compras.',
    text:'¡Tu mercado está a solo un clic de distancia!',
    image: 'https://i.postimg.cc/k48rn1fb/BANNER-PRINCIPAL.png'
  }
];

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="banner-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="banner-overlay" />
              <div className="banner-content">
                <div className="banner-text">
                  <h1 className="banner-pretitle">{slide.pretitle}</h1>
                  <h1 className="banner-title">{slide.title}</h1>
                  <p className="banner-subtitle whitespace-pre-line">{slide.subtitle}</p>
                  <p className="banner-text2">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};