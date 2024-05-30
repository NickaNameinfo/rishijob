import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="subscribe-area">
            <div className="section-title">
              <h2>Subscribe Newsletter</h2>
            </div>
            <div className="subscribe-item">
              <form className="newsletter-form" data-toggle="validator">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="EMAIL"
                  autoComplete="off"
                />
                <button className="btn subscribe-btn" type="submit">
                  Subscribe
                </button>
                <div id="validator-newsletter" className="form-result" />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-logo">
                  <h3>
                    <b>Rishi Jobs</b>
                  </h3>
                  <p>
                    With 40M+ downloads, Lokal is a one stop solution for local
                    updates, job search, classifieds and more!
                  </p>
                  <ul>
                    <li>
                      <Link to="https://www.youtube.com/" target="_blank">
                        <i className="icofont-youtube-play" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/" target="_blank">
                        <i className="icofont-linkedin" />
                      </Link>
                    </li>
                  </ul>
                  <div className="app-item footitem">
                    <div className="app-btn">
                      <Link className="app-btn-one" to="#">
                        <i className="flaticon-apple" />
                        <span>Download on the</span>
                        <p>App Store</p>
                      </Link>
                      <Link className="app-btn-two" to="#">
                        <i className="flaticon-playstore" />
                        <span>ANDROID APP ON</span>
                        <p>Google Play</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-category">
                  <h3>Category</h3>
                  <ul>
                    <li>
                      <Link to="/Components/Terms">
                        <i className="icofont-simple-right" />
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/Components/Privacy">
                        <i className="icofont-simple-right" />
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/Components/Disclaimer">
                        <i className="icofont-simple-right" />
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link to="/Components/About">
                        <i className="icofont-simple-right" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/Components/Testimonial">
                        <i className="icofont-simple-right" />
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link to="/Components/Contact">
                        <i className="icofont-simple-right" />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-category">
                  <h3>Job By Category</h3>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Driving/Parking
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Engineering
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Machine Operation
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Marketing/ Sales
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Medical/ Doctor
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-category">
                  <h3>Job By Location</h3>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Maharashtra
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Punjab
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Gujarat
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Tamil_nadu
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Andhra
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-simple-right" />
                        Telangana
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-item text-center">
                  <p>Copyright © Powered by Rishi Technologies Pvt Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="icon-bar">
        <Link to="#" className="facebook">
          <i className="icofont-whatsapp" />
        </Link>
        <Link to="#" className="google">
          <i className="icofont-wechat" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
