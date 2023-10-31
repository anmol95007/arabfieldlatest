import React, { useState, useEffect } from "react";
import supply_banner from "../../Assets/images/supply_banner.jpg";
import supply_mobile_banner from "../../Assets/images/supply_mobile_banner.jpg";
import SupplyChainPage from "../../Styles/SupplyChainPage.css";
import supply_project__01 from "../../Assets/images/supply_project__01.jpg";
import supply_project__02 from "../../Assets/images/supply_project__02.jpg";
import supply_project__03 from "../../Assets/images/supply_project__03.jpg";
import supply_project__04 from "../../Assets/images/supply_project__04.jpg";
import supply_project__05 from "../../Assets/images/supply_project__05.jpg";

const SupplyChain = () => {
  return (
    <>
      {/* Banner Section code start from here */}

      <div
        className="global-container"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img
          src={supply_banner}
          alt="banner_img"
          className="global-desktop-banner"
        />
        <img
          src={supply_mobile_banner}
          alt="supply_mobile_banner"
          className="global-mobile-banner"
        />
      </div>

      {/* Banner Section code start from here */}

      {/* Banner Image-Text Section code start from here */}
      {/* Section One */}
      <div className="supply-tech-bg">
        <div className="container">
          <div className="row">
            <div className="supply-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-content"
                  // data-aos="zoom-in"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <div className="supply-content-title supply-content-title-align">
                    Smart Procurement
                  </div>
                  <p className="supply-content-description supply-content-description-align">
                    At Arab Feld, we transcend the traditional role of a
                    procurement function extension. We collaborate closely with
                    our clients to establish a unified, efficient process that
                    adds significant value.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    By seamlessly integrating our systems with yours, we create
                    a streamlined procurement environment that covers the entire
                    process, from ordering and sourcing to monitoring and
                    delivery.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    Our adaptability enables us to integrate with any client
                    system, accommodating your unique working style. Arab Field
                    leads the industry in applying advanced procurement systems
                    to enhance efficiency and excellence in your procurement
                    processes.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div
                  className="supply-tech-logo"
                  // data-aos="zoom-in"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <img src={supply_project__01} />
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
                  <img src={supply_project__02} />
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
                    DEDICATED IN-HOUSE SUPPORT
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    Arab Field offers a unique opportunity to harness our wealth
                    of knowledge and experience in-house, adding significant
                    value while optimizing costs within your procurement
                    function.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    Our approach involves embedding one of our skilled
                    procurement professionals directly within your organization,
                    ensuring a seamless integration that yields immediate
                    advantages.
                  </p>

                  <p className="supply-content-description supply-content-description-align">
                    This dedicated service model has a demonstrated track record
                    of success with prominent clients throughout our history.
                    Furthermore, its flexibility ensures that we can provide
                    in-house support for as long as you require. At Arab Field,
                    we're committed to delivering tailored solutions that meet
                    your specific needs.
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
                  data-aos-duration="2000"
                >
                  <div className="supply-content-title supply-content-title-align">
                    PROJECT MANAGEMENT
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    At Arab Field, our expertise lies in the seamless transition
                    of your capital investments into fully operational assets.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    We have a distinguished history of delivering 'first fill'
                    projects, furnishing new vessels or fixed installations with
                    everything necessary to initiate operations successfully.
                  </p>

                  <p className="supply-content-description supply-content-description-align">
                    From specialized equipment and we play a crucial role in
                    transforming your investments into a fully functional and
                    operational end product
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
                  <img src={supply_project__03} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section four */}
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
                  <img src={supply_project__04} />
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
                    REFINERIES
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    At Arab Field, we provide all-encompassing procurement
                    services to refineries worldwide. Our client portfolio
                    includes some of the world's largest players in the Middle
                    East, Europe, and the United States.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    Our commitment to downstream support is founded on the
                    imperative need for swift execution in an industry where the
                    speed of delivery is of utmost significance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section five */}
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
                    SHUTDOWN/TURNAROUND
                  </div>

                  <p className="supply-content-description supply-content-description-align">
                    At Arab Field, we are well-prepared to be your procurement
                    partner for shutdowns and turnarounds, whether offshore or
                    onshore.
                  </p>
                  <p className="supply-content-description supply-content-description-align">
                    Our support encompasses the entire process, from strategic
                    planning to long-lead sourcing, ensuring a well-coordinated
                    and efficient operation.
                  </p>

                  <p className="supply-content-description supply-content-description-align">
                    During critical phases of program execution, just before and
                    during the process, you can rely on us to uphold efficiency,
                    minimize downtime, and keep your production on track.
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
                  <img src={supply_project__05} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}
    </>
  );
};

export default SupplyChain;
