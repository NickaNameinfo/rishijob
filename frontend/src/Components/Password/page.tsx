import React from "react";

const Password = () => {
  return (
    <div>
      <div className="create-account-area login-area">
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
                    <h5>Ready to take the next step?</h5>
                    <p>Create an account or sign in.</p>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter New password"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Confirm password"
                        />
                      </div>
                      <div className="text-right submitt">
                        <button type="submit" className="btn create-photo-btn">
                          <a href="dasboard.php">Submit</a>{" "}
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

export default Password;
