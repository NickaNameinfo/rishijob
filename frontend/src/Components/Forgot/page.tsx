import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="login-area">
      <div className="container">
        <div className="already-create mb15 text-center">
          <img src="/Images/logo.png" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="create-photo-item text-center">
              <h5>Forgot Password?</h5>
              <p>Enter your Registered Mobile No.</p>
              <div className="create-photo-right">
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone No"
                  />
                </div>
                <div className="text-right submitt">
                  <Link to="/">
                    <button
                      type="submit"
                      className="btn create-photo-btn bg-primary  text-white"
                    >
                      Sent OTP
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
