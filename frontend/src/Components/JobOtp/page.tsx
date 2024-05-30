import React from "react";

const JobOtp = () => {
  return (
    <div>
      <div className="create-account-area pt-50 pb-50">
        <div className="container">
          <div className="create-photo">
            <div className="already-create text-center">
              <img src="/Images/logo.png" alt="" />
              {/* <span>Already create an account?</span> */}
              {/* <a href="#">Sign In</a> */}
            </div>
            <form>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item text-center">
                    <h5>Verification Code</h5>
                    <p>We send your registered mobile number.</p>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP Here"
                        />
                      </div>
                      <div className="text-right submitt">
                        <button type="submit" className="btn create-photo-btn">
                          <a href="postjob.php">Signin</a>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* <div class="text-left">
              <button type="submit" class="btn create-ac-btn">Save</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobOtp;
