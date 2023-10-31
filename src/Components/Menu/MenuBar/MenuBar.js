import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Milaya_logo from "../../Assets/images/Milaya_logo.png";
import "../../Styles/MenuBar.css"; // Import your CSS file

const MenuBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("PROCUREMENT");

  const handleMenuItemClick = (itemName) => {
    setIsNavActive(false);
    setActiveMenuItem(itemName);

    // Scroll to the top of the page
    window.scroll(0, 0);
  };

  useEffect(() => {
    // Set the default active menu item when the component mounts
    setActiveMenuItem("PROCUREMENT");

    window.scroll(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <>
      <div>
        <div className={`header-container ${isNavActive ? "active" : ""}`}>
          <header>
            <div className="logo">
              <NavLink to="/">
                <img src={Milaya_logo} alt="Milaya logo image" />
              </NavLink>
            </div>
            <nav className={`menu ${isNavActive ? "active" : ""}`}>
              <ul>
                <li>
                  <NavLink
                    exact={true}
                    to="/"
                    activeClassName="active"
                    onClick={() => handleMenuItemClick("Home")}
                  >
                    HOME
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/global-reach"
                    activeClassName="active"
                    onClick={() => handleMenuItemClick("GLOBAL REACH")}
                  >
                    GLOBAL REACH
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/supply-chain"
                    activeClassName="active"
                    onClick={() => handleMenuItemClick("Supply Chain")}
                  >
                    SUPPLY CHAIN
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/sustainability"
                    activeClassName="active"
                    onClick={() => handleMenuItemClick("Sustainability")}
                  >
                    SUSTAINABILITY
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about-us"
                    activeClassName="active"
                    onClick={() => handleMenuItemClick("About US")}
                  >
                    ABOUT US
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact-us"
                    activeClassName="active"
                    onClick={() => handleMenuItemClick("CONTACT US")}
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleNav}>
              <i
                className="fa fa-bars"
                aria-hidden="true"
                // style={{ color: "#008ba6" }}
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
