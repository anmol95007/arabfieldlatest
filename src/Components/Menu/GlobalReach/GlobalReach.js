import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalPage from "../../Styles/GlobalPage.css";
import global_img from "../../Assets/images/global_img.jpg";
import mobile_banner_img from "../../Assets/images/mobile_banner_img.jpg";
import procurment from "../../Assets/images/procurment.jpg";

const GlobalReach = () => {
  const sliderRef = useRef(null); // Create a ref for the slider component
  const settings = {
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false, // Disable mouse slide
    fade: true, // Add fade transition
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      {/* Banner Section code start from here */}
      {/* Home Banner Slider Code Start from here */}
      <div className="banner-slider">
        <Slider {...settings} ref={sliderRef}>
          <div className="slider-item">
            <div className="image-container">
              <img
                src={global_img}
                alt="Banner 5"
                className="blurred-image"
                style={{ opacity: 0.8 }}
              />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading" data-aos="zoom-in" data-aos-easing="linear"
                  data-aos-duration="1500">
                  <h2>
                  your technically-advanced procurement partner for the modern day energy industry.
                  </h2>
                </div>
              </div>              
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img
                src={global_img}
                alt="Banner 5"
                className="blurred-image"
                style={{ opacity: 0.8 }}
              />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading" data-aos="zoom-in" data-aos-easing="linear"
                  data-aos-duration="1500">
                  <h2>
                  Arab Field fully integrated online procurement system with a good number of  material client catalogue.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img
                src={global_img}
                alt="Banner 4"
                className="blurred-image"
                style={{ opacity: 0.8 }}
              />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading" data-aos="zoom-in" data-aos-easing="linear"
                  data-aos-duration="1500">
                  <h2>      
                  your virtual procurement team, applying strategic thinking to your purchasing.
                  </h2>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img
                src={global_img}
                alt="Banner 3"
                className="blurred-image"
                style={{ opacity: 0.8 }}
              />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading" data-aos="zoom-in" data-aos-easing="linear"
                  data-aos-duration="1500">
                  <h2>
                  A unique trading hub that realizes savings if you’re looking to sell stock - or buy.
                  </h2>                  
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Home Banner Slider Code End from here */}

      {/* Banner Section code start from here */}
      {/* Banner Image-Text Section code start from here */}
      <div className="home-heading" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h2>Your Procurement Partner</h2>
      </div>

      <div className="global-tech-bg">
        <div className="container">
          <div className="row">
            <div className="global-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="global-tech-content" data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="1500">
                  <div className="global-content-title global-content-title-align">
                    Global Procurement Excellence.
                  </div>

                  <p className="global-content-description global-content-description-align">
                    At Arab Field, our foundation lies in advanced systems and
                    services, enabling seamless outsourced procurement support
                    globally.
                  </p>

                  <p className="global-content-description global-content-description-align">
                    Our international teams, with experienced buyers and
                    dedicated support personnel, prioritize your needs, offering
                    unique and customized procurement solutions tailored to your
                    specific requirements.
                  </p>

                  <p className="global-content-description global-content-description-align">
                    Arab Field excels in outsourced procurement support
                    globally, leveraging advanced systems. Our international
                    teams, comprising skilled buyers, prioritize your needs and
                    understand market challenges.
                  </p>

                  <p className="global-content-description global-content-description-align">
                    As the Best Steel Distributor & Supplier, we deliver unique
                    and customized procurement solutions tailored to your
                    specific requirements, ensuring excellence in every aspect
                    of your supply chain.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="global-tech-logo" data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="1500"> 
                  <img src={procurment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}

      {/* Global Map Section code start from here */}
      <div className="g-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607.135663377414!2d55.3870863!3d25.2996457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db017079b37%3A0x2c4199b02f6451dd!2sMilaya%20Energy%20Oilfield%20%26%20Natural%20Gas!5e0!3m2!1sen!2sin!4v1696528207982!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Global Map Section code start from here */}
    </>
  );
};

export default GlobalReach;
