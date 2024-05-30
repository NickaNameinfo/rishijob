import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { infoData } from "../../../configData";
import { Link, useNavigate } from "react-router-dom";
const Company = () => {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = React.useState(null);
  const [oldOtp, setOldOtp] = React.useState(null);
  const [localUserName, setCompanyName] = React.useState(
    localStorage.getItem("companyName")
  );
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("companyName");
    console.log(localUserName, "sdfas");
    if (localUserName) {
      navigate("/");
    }
  }, []);

  const onSubmit = async (formData) => {
    if (!otpValue) {
      try {
        const response = await axios.post(
          `${infoData?.baseApi}/customers/number/${formData?.companyNumber}`,
          formData
        );
        if (response?.data) {
          alert("Otp sent your registered Phone Number");
          setOldOtp(response?.data);
        }
        console.log(formData, "formData32134", response);
      } catch (error) {
        alert("Somthis want worng");
      }
    } else {
      if (String(oldOtp?.data) === String(otpValue)) {
        try {
          const response = await axios.post(
            `${infoData?.baseApi}/company`,
            formData
          );
          if (response.data.success && !response?.data?.data?.error) {
            navigate("/Components/Login/CompanyLogin");
          } else {
            alert("User name, Company name or email is already exist");
          }
        } catch (error) {
          if (error.response) {
            alert(error.response.data?.message);
          }
        }
      } else {
        alert("Please check your otp");
      }
    }
  };

  return (
    <div>
      <div className="create-account-area login-area">
        <div className="container">
          <div className="create-photo">
            <div className="text-center mb-2">
              <img src="/Images/logo.png" alt="" width={150} />
              <div>
                <span>Already create an account?</span>
                <Link to="/Components/Login">Sign In </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item text-center">
                    <h5>Ready to take the next step?</h5>
                    <p>Create an account or sign in.</p>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <Controller
                          name="companyName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Company Name"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.companyName?.type === "required"
                            ? "field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="companyEmail"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Company Email"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.companyEmail?.type === "required"
                            ? "field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="companyNumber"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile Number"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.companyNumber?.type === "required"
                            ? "field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="companyWebsite"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Company Website"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.companyWebsite?.type === "required"
                            ? "Field Name is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="companyAddress"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.companyAddress?.type === "required"
                            ? "Field is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="totalEmployee"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Total Employee"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.totalEmployee?.type === "required"
                            ? "Number is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="userName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="User Name"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.userName?.type === "required"
                            ? "User Name is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="password"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="passowrd"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.password?.type === "required"
                            ? "Password is required"
                            : null}
                        </p>
                      </div>
                      <div className="text-right submitt">
                        {oldOtp ? (
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Otp"
                              onChange={(e) => setOtpValue(e.target.value)}
                            />
                            <div className="text-right submitt">
                              <button
                                type="submit"
                                className="btn create-photo-btn"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-right submitt">
                            <button
                              type="submit"
                              className="btn create-photo-btn"
                            >
                              Send Otp
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
