import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./AirlineCompanies.css";

const AirlineCompanies = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 2,
          slidesToScroll: 2,
        });
      } else {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 5,
          slidesToScroll: 4,
        });
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

   
  return (
    <div className='comp-carousel'>
      <Slider {...sliderSettings}>
        <div className="carousel-img-container">
        <img src="https://sandtoncity.com/uploads/emirates.jpg" alt='emirates logo'/>
        </div>

        <div className="carousel-img-container">
        <img src="https://logos-world.net/wp-content/uploads/2020/03/Air-France-Logo-1976-1990.jpg" alt="air france logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://aviationoutlook.com/wp-content/uploads/2018/01/British-Airways-Logo.png" alt="british airways logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://i.pinimg.com/originals/88/45/10/884510a2d764ce27643bcca063c1855e.png" alt="qatar logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://austchamkorea.org/wp-content/uploads/2022/04/SIA-logo_1-1.jpg" alt="singapore airline logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://logowik.com/content/uploads/images/thy-turkish-airlines-new6886.jpg" alt="turkish airline logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://logos-world.net/wp-content/uploads/2020/05/FedEx-logo.jpg" alt="fedex airline logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://www.kmiairport.co.za/wp-content/uploads/2016/02/federal.jpg" alt="federal airline logo" />
        </div>

        <div className="carousel-img-container">
        <img src="https://vectorlogoseek.com/wp-content/uploads/2018/12/aerolineas-argentinas-vector-logo.png" alt="faerolineas airline logo" />
        </div>
      
      </Slider>
    </div>
  );
};

export default AirlineCompanies;
