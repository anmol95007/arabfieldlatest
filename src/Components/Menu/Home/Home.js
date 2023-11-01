import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
import HomePage from "../../Styles/HomePage.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import home_right_image from "../../Assets/images/home_right_image.png";
import slider1 from "../../Assets/images/slider1.jpg";
import slider2 from "../../Assets/images/slider2.jpg";
import slider3 from "../../Assets/images/slider3.jpg";
import slider4 from "../../Assets/images/slider4.jpg";
import slider5 from "../../Assets/images/slider5.jpg";
import slider6 from "../../Assets/images/slider6.jpg";
import oil_field_img from "../../Assets/images/oil_field_img.jpg";
import integrated_support from "../../Assets/images/integrated_support.jpg";

import home_02 from "../../Assets/images/home_02.jpg";
import home_03 from "../../Assets/images/home_03.jpg";
import supply_project__03 from "../../Assets/images/supply_project__03.jpg";
import procurement from "../../Assets/images/procurment.jpg";
import supply_project_06 from "../../Assets/images/supply_project_06.jpg";
import milaya_energy from "../../Assets/images/milaya_energy.jpg";
import Asset_management from "../../Assets/images/Asset_management.png";
import Project_mangement from "../../Assets/images/Project_mangement.jpg";
import Drilling_services from "../../Assets/images/Drilling_services.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const sliderRef = useRef(null); // Create a ref for the slider component
  const settings = {
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false, // Disable mouse slide
    fade: true, // Add fade transition
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  //

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  //
  return (
    <>
      {/* Home Banner Slider Code Start from here */}
      <div className="banner-slider">
        <Slider {...settings} ref={sliderRef}>
          <div className="slider-item">
            <div className="image-container">
              <img
                src={slider6}
                alt="Banner 5"
                className="blurred-image"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="text-container">
              <div className="home-banner-text-top">
                <div
                  className="home-banner-heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Best Steel Distributor & Supplier </h2>

                  <p>
                    Arab Field your Best Steel Distributor & Supplier. We
                    deliver excellence in steel distribution, ensuring top-notch
                    quality and reliability. Trust Arab Field for unparalleled
                    service and superior steel products.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img src={slider5} alt="Banner 5" className="blurred-image" />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div
                  className="home-banner-heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Oil Field Supplies Services </h2>
                  <p>
                    Arab Field delivers tailored Oil Field Supplies Services,
                    addressing the distinct needs of your oil and gas
                    operations. We prioritize quality and efficiency, offering
                    essential equipment and resources to ensure your success in
                    the field.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img src={slider4} alt="Banner 4" className="blurred-image" />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div
                  className="home-banner-heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Integrated Support </h2>
                  <p>
                    Arab Field caters to the oil and gas industry, offering
                    comprehensive Integrated Support services. We elevate
                    operational efficiency, safety, and productivity, ensuring
                    tailored solutions to meet the unique demands of our
                    clients.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img src={slider3} alt="Banner 3" className="blurred-image" />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div
                  className="home-banner-heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Drilling Services </h2>
                  <p>
                    At Arab Field, we excel in Offshore/Onshore Drilling
                    equipment services and supply, offering customized solutions
                    to meet your specific operational needs with a commitment to
                    excellence.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img src={slider2} alt="Banner 2" className="blurred-image" />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div
                  className="home-banner-heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Asset Management </h2>
                  <p>
                    At Arab Field, drawing upon extensive decades of Asset
                    Management expertise and a diverse product-service
                    portfolio, we are committed to elevating the reliability of
                    your physical assets and optimizing life-cycle costs.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="image-container">
              <img src={slider1} alt="Banner 1" className="blurred-image" />
            </div>
            <div className="text-container">
              <div className="home-banner-text-top">
                <div
                  className="home-banner-heading"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>Project Management </h2>
                  <p>
                    Arab Field prioritizes Project Management and Execution,
                    recognizing their pivotal role in minimizing total asset
                    ownership costs. Our dedicated capabilities ensure success
                    in reactivation and modification projects, adding value
                    throughout.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Home Banner Slider Code End from here */}

      {/* Home Banner Code Start from here */}
      <div className="main-container">
        <div className="container">
          <div className="row row-home-container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="home-banner-text"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h1>Why Choose Us </h1>
                <p style={{ textAlign: "justify" }}>
                  Arab Field stands as the foremost Steel Distributor &
                  Supplier, ensuring top-notch quality. As a leading energy
                  provider in the Oil & Gas industry, we serve upstream and
                  downstream sectors with a commitment to excellence. Our
                  advanced services deliver reliable results, enhancing
                  productivity and optimizing operations. At Arab Field, we
                  minimize risks, setting a benchmark for reliability and
                  efficiency in the dynamic landscape of the energy sector.
                </p>
              </div>
              <div
                className="home-btn"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <Link to="#">
                  <button>
                    <NavigateNextIcon />
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="home-banner"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={home_right_image} alt="home_right_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Banner Code End from here */}

      {/* Who We Are Banner Image-Text Section code start from here */}
      {/* Section One */}
      <div
        className="home-heading"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2>WHO WE ARE</h2>
      </div>

      <div className="supply-tech-bg">
        <div className="container">
          <div className="row">
            <div className="supply-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-content"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <div className="supply-content-title supply-content-title-align">
                    ELEVATING PROCUREMENT EXCELLENCE
                  </div>
                  <p className="supply-content-description supply-content-description-align">
                    At Arab Fields, we have established a sterling reputation
                    synonymous with high-quality procurement services over the
                    years.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    For us, procurement transcends mere processes, products, and
                    figures. We foster a culture of ownership among our
                    dedicated personnel, entrusting them to adeptly manage tasks
                    on your behalf.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-logo"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <img src={procurement} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="supply-tech-bg">
        <div className="container">
          <div className="row">
            <div className="supply-tech-rotate">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-logo"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <img src={home_02} />
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-content"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <div className="supply-content-title supply-content-title-align">
                    CLIENT SATISFACTION BEYOND LIMITS
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    Our dedication to client satisfaction knows no bounds. We
                    are continually seeking fresh avenues to enhance value and
                    regularly introduce cutting-edge technological solutions to
                    simplify, expedite, and elevate service delivery. In the
                    realm of procurement, we grasp it comprehensively. Our
                    commitment lies in infusing value, innovation, and
                    efficiency at every juncture within your supply chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section three */}
      <div className="supply-tech-bg">
        <div className="container">
          <div className="row">
            <div className="supply-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-content"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="supply-content-title supply-content-title-align">
                    THRIVING IN CHALLENGES.
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    Our teams are well-versed in overcoming even the most
                    formidable challenges, and we enthusiastically embrace every
                    opportunity to reciprocate the trust our clients place in
                    us. We thrive in the daily diversity of our work, tailoring
                    our solutions to meet your distinct requirements.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-logo"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src={home_03} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Banner Image-Text Section code End from here */}

      {/* Home Services Portfolio Section Code Start From Here */}
      <div
        className="home-heading"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2> OUR SERVICES</h2>
      </div>

      <div className="platform-container">
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="imgBox">
            <img src={supply_project_06} />
          </div>
          <div className="plt-content">
            <h2 style={{ fontSize: "22px" }}>
              Best Steel supplier and Distributor
            </h2>
            <p>
              Arab Field your Best Steel Distributor & Supplier. We deliver
              excellence in steel distribution, ensuring top-notch quality and
              reliability. Trust Arab Field for unparalleled service and
              superior steel products...
            </p>
            <div className="plt-card-btn">
              <Link to="/best-steel-supplier" exact={true}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="imgBox">
            <img src={oil_field_img} />
          </div>
          <div className="plt-content">
            <h2>Oil Field Supplies Services</h2>
            <p>
              Arab Field delivers tailored Oil Field Supplies Services,
              addressing the distinct needs of your oil and gas operations. We
              prioritize quality and efficiency, offering essential equipment
              and resources to ensure your success in the field...
            </p>
            <div className="plt-card-btn">
              <Link to="/oil-Field-supplies">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="imgBox">
            <img src={integrated_support} />
          </div>
          <div className="plt-content">
            <h2>Integrated Support</h2>
            <p>
              Arab Field caters to the oil and gas industry, offering
              comprehensive Integrated Support services. We elevate operational
              efficiency, safety, and productivity, ensuring tailored solutions
              to meet the unique demands of our clients.
            </p>
            <div className="plt-card-btn">
              <Link to="/integrated-support">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="imgBox">
            <img src={Drilling_services} />
          </div>
          <div className="plt-content">
            <h2>Drilling Services</h2>
            <p>
              At Arab Field, we excel in Offshore/Onshore Drilling equipment
              services and supply, offering customized solutions to meet your
              specific operational needs with a commitment to excellence.
            </p>
            <div className="plt-card-btn">
              <Link to="/drilling-services">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="imgBox">
            <img src={Asset_management} />
          </div>
          <div className="plt-content">
            <h2>Asset Management</h2>
            <p>
              At Arab Field, we excel in Offshore/Onshore Drilling equipment
              services and supply, offering customized solutions to meet your
              specific operational needs with a commitment to excellence...
            </p>
            <div className="plt-card-btn">
              <Link to="/assest-management">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="imgBox">
            <img src={Project_mangement} />
          </div>
          <div className="plt-content">
            <h2>Project Management</h2>
            <p>
              At Arab Field, we excel in Offshore/Onshore Drilling equipment
              services and supply, offering customized solutions to meet your
              specific operational needs with a commitment to excellence...
            </p>
            <div className="plt-card-btn">
              <Link to="/project-management">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Home Services Portfolio Section Code End From Here */}
    </>
  );
};

export default Home;
