import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css'; 

const BannerSlider = ({ banners }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index} className="banner-slide">
          <img src={banner.image} alt={banner.title} className="banner-image" />
          <div className="banner-content">
            <h2 className="banner-title">{banner.title}</h2>
            <p className="banner-description">{banner.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
