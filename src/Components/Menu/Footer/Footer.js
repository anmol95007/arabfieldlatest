import React from "react";
import Footercss from "../../Styles/Footer.css";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import CallIcon from "@mui/icons-material/Call";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

const Footer = () => {
  return (
    <>
      <footer
        className="padding_4x"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex">
          <section className="flex-content padding_1x">
            <h3>Platform</h3>
            <a href="/best-steel-supplier">Best Steel Distributor & Supplier</a>
            <a href="/oil-Field-supplies">Oil fields Supplies</a>
            <a href="/integrated-support">Integrate Supports</a>
            <a href="/drilling-services">Drilling Services</a>
            <a href="/assest-management">Asset Manegement</a>
            <a href="/project-management">Project Manegement</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Quick Links</h3>
            <a href="/">Procurement</a>
            <a href="/global-reach">Global Reach</a>
            <a href="/supply-chain">Supply Chain</a>
            <a href="/about-us">About US</a>
            <a href="/sustainability">Sustainability</a>
            <a href="/contact-us">Contact US</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Features</h3>
            <a href="#">Jobs</a>
            <a href="#">Brand Assets</a>
            <a href="#">Investor Relations</a>
            <a href="#">Terms of Service</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Resources</h3>
            <a href="#">Guides</a>
            <a href="#">Research</a>
            <a href="#">Experts</a>
            <a href="#">Agencies</a>
          </section>
          <section className="flex-content padding_1x">
            <h3>Address</h3>
            <div className="footer-add-align">
              <ApartmentOutlinedIcon className="address-icon" />
              <p>Doha, Quatar</p>
            </div>

            <div className="footer-add-align">
              <CallIcon className="address-icon" />
              <p>+974 599 65 952 </p>
            </div>

            <div className="footer-add-align">
              <LocalPostOfficeOutlinedIcon
                className="address-icon"
                style={{ marginRight: "5px" }}
              />
              <p>info@arabfield.qa</p>
            </div>

            <div className="footer-add-align">
              <TrendingDownOutlinedIcon
                className="address-icon"
                style={{ marginRight: "5px" }}
              />
              <p>sales@arabfield.qa</p>
            </div>

            <fieldset className="fixed_flex">
              <input
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
                maxLength={40}
              />
              <button className="btn btn_2">Subscribe</button>
            </fieldset>
          </section>
        </div>
        <div className="flex">
          <section className="flex-content padding_1x">
            <p>Copyright ©2023 All rights reserved by Arab Field</p>
          </section>
          <section className="flex-content padding_1x">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
