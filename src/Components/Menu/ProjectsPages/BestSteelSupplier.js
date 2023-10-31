import React, { useState, useEffect } from "react";
import supply_banner from "../../Assets/images/supply_banner.jpg";
import supply_mobile_banner from "../../Assets/images/supply_mobile_banner.jpg";
import SupplyChainPage from "../../Styles/SupplyChainPage.css";
import BestSupplier from "../../Styles/BestSupplier.css";
import beststeel_01 from "../../Assets/images/beststeel_01.webp";
import beststeel_02 from "../../Assets/images/beststeel_02.webp";
import beststeel_03 from "../../Assets/images/beststeel_03.webp";
import supply_project__04 from "../../Assets/images/supply_project__04.jpg";
import supply_project__05 from "../../Assets/images/supply_project__05.jpg";

const BestSteelSupplier = () => {
  return (
    <>
      {/* Banner Section Start Here */}
      <section
        className="Best-services-hero"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row">
            <div className="hero-wrp">
              <h1>Best Steel Distributor And Supplier </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End Here */}

      {/* Banner Image-Text Section code start from here */}
      {/* Section One */}
      <div className="supply-tech-bg">
        <div className="container">
          <div className="row">
            <div className="supply-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="supply-tech-content">
                  <div className="supply-content-title supply-content-title-align">
                    Focused Approach To Distribute Safe & Sustainable Steel
                  </div>
                  <p className="supply-content-description supply-content-description-align">
                    Arab Field stands as the premier provider of steel stocks in
                    the GCC region. We specialize in catering to the diverse
                    needs of the oil, gas, and construction industries, ensuring
                    top-notch quality and reliable supply.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="supply-tech-logo">
                  <img src={beststeel_01} />
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
                <div className="supply-tech-logo">
                  <img src={beststeel_02} />
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="supply-tech-content">
                  <div className="supply-content-title supply-content-title-align">
                    Our Range of Products
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    As leaders in the UAE's steel industry, Arab Field doesn't
                    just offer top-quality products; we deliver a comprehensive
                    service experience.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    Our diverse range of products, available in various sizes
                    and grades for different applications, is supported by mill
                    test certificates, ensuring reliability and excellence.
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
                <div className="supply-tech-content">
                  <div className="supply-content-title supply-content-title-align">
                    Our Promises
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    Arab Field's manufacturing strategy prioritizes raw material
                    security, ensuring cost competitiveness and operational
                    efficiencies. This positions us as the most cost-effective
                    provider of steel products in the Middle East.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    We prioritize client convenience, securing contracts only
                    after verifying product availability, safeguarding our
                    clients from any adverse financial impact.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="supply-tech-logo">
                  <img src={beststeel_03} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-heading"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2>Why Arab Field For Steel</h2>
      </div>
      <div className="container card-handler">
        <div className="row mb-2">
          <div className="col-xs-12 col-sm-6 col-lg-4 my-2">
            <div className="card-container ">
              <h4 className="hover-effect">Competitive Prices</h4>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4 my-2">
            <div className="card-container">
              <h4 className="hover-effect">Reliable Efficient Service</h4>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4 my-2">
            <div className="card-container">
              <h4 className="hover-effect">Extensive Stock Range</h4>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4 my-2">
            <div className="card-container">
              <h4 className="hover-effect">On-Time Delivery</h4>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4 my-2">
            <div className="card-container">
              <h4 className="hover-effect">Top Quality Material</h4>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-lg-4 my-2">
            <div className="card-container">
              <h4 className="hover-effect">Friendly and Helpful Staff</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSteelSupplier;
