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
          {navbarItems.map((data) => (
            <Link to={data.path}>
              <div key={data.id} className="navbar_items">
                {data.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="mobile_menu" onClick={() => setShow(!show)}>
          <div className="hamburger_menu"></div>
          <div className="hamburger_menu"></div>
          <div className="hamburger_menu"></div>
        </div>
        <div className="mobile_drawer">
          {show && (
            <div>
              {navbarItems.map((data) => (
                <div className="mobile_items">
                  <Link to={data.path}>
                    <div key={data.id} className="navbar_items">
                      <h3>{data.name}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default header;
