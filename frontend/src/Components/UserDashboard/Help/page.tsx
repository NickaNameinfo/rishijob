import React from "react";
import UserDashboardLayout from "../../../UserDashboardLayout/page";

const Help = () => {
  return (
    <UserDashboardLayout>
      <div className="single-profile-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single-profile-item">
                <div className="single-profile-right">
                  <div className="">
                    <div className="single-profile-contact contactt">
                      <h3>Contact Info</h3>
                      <ul>
                        <li>
                          <i className="icofont-ui-call" />
                          <a href="tel:+07554332322">Call : +91 9876543210</a>
                        </li>
                        <li>
                          <i className="icofont-whatsapp" />
                          <a href="https://wa.me/+919876543210">
                            Whatsapp : +91 9876543210
                          </a>
                        </li>
                        <li>
                          <i className="icofont-email" />
                          <a href="#!">
                            <span>info@rishijobs.com</span>
                          </a>
                        </li>
                        <li>
                          <i className="icofont-location-pin" />
                          Chennai.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-profile-item">
                <div className="create-education-right chatt">
                  <a href="#">Chat Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Help;
