import React from "react";

const Footer = () => {
  return (
    <div className="text-light mt-3 footer" style={{ backgroundColor: "#301b3f" }}>
      <div className="container d-flex flex-column text-center p-2">
        <i className="bi bi-person display-3"></i>
        <h2 className="display-5">Sports Live</h2>
        <hr />
        <div className="d-flex flex-column flex-lg-row justify-content-between bottom">
          <p>&#169; Copyright SportsLive 2021. All rights reserved.</p>
          <span className="d-flex flex-column flex-sm-row gap-2 justify-content-between text-lignt">
            <a className="footer-link" href="#1">
              Career
            </a>
            <a className="footer-link" href="#2">
              Contact Us
            </a>
            <a className="footer-link" href="#3">
              Privacy Policy
            </a>
            <a className="footer-link" href="#4">
              Terms and Conditions
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
