import React, { useState } from "react";
import { Link } from "react-router-dom";

const navbarItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];

const header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <header>
      <div id="navbar" className="container-fluid">
        <div className="navbar_logo">
          <Link to="/">
            <span id="h1_style">James Yoo</span>
          </Link>
        </div>
        <div className="navbar_menu">
          {navbarItems.map((data, index) => (
            <Link to={data.path} key={index}>
              <div className="navbar_items">{data.name}</div>
            </Link>
          ))}
        </div>
        <div className="mobile_menu" onClick={() => setShow(!show)}>
          <div
            className="hamburger_menu"
            style={{ backgroundColor: show ? "white" : "black" }}
          ></div>
          <div
            className="hamburger_menu"
            style={{ backgroundColor: show ? "white" : "black" }}
          ></div>
          <div
            className="hamburger_menu"
            style={{ backgroundColor: show ? "white" : "black" }}
          ></div>
        </div>
        {show && (
          <div className="mobile_drawer">
            {navbarItems.map((data, mobileIndex) => (
              <div className="mobile_items">
                <Link to={data.path} key={mobileIndex}>
                  <div className="navbar_items">
                    <h2>{data.name}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default header;
