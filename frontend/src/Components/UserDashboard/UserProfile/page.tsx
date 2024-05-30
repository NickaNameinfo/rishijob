"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { infoData } from "../../../../configData";
import { useNavigate } from "react-router-dom";
import UserDashboardLayout from "../../../UserDashboardLayout/page";
import { ToastContainer, toast } from "react-toastify";

const UserProfile = () => {
  const [userID, setCompanyName] = React.useState(
    localStorage.getItem("userID")
  );
  const navigate = useNavigate();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
    setValue,
  } = useForm();

  React.useEffect(() => {
    // let userID = localStorage.getItem("userID");
    console.log(userID, "sdfas");
    if (!userID) {
      navigate("/");
    } else {
      getCompany(userID);
    }
  }, []);

  const getCompany = async (userID) => {
    const apiUrl = `${infoData?.baseApi}/customers/${userID}`;
    let result = await axios.get(apiUrl);
    console.log(result, "result234123");
    let tempData = {
      id: result?.data?.data?.id,
      firstName: result?.data?.data?.firstName,
      lastName: result?.data?.data?.lastName,
      email: result?.data?.data?.email,
      phoneNumber: result?.data?.data?.phoneNumber,
      totalEmployee: result?.data?.data?.totalEmployee,
      qualification: result?.data?.data?.qualification,
      resume: result?.data?.data?.resume,
      experience: result?.data?.data?.experience,
      gender: result?.data?.data?.gender,
    };
    if(!result?.data?.data?.experience){
      toast("Complete your profile.");
    }
    Object.keys(tempData).forEach((key) => {
      setValue(key, tempData[key]);
    });
  };

  const onSubmit = async (data) => {
    // let userID = localStorage.getItem("userID");
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      const response = await axios.put(
        `${infoData?.baseApi}/customers/${userID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (!response?.data?.success) {
        alert("Somthing want worng");
      } else {
        alert("Updated SuccessFul!");
      }
      // Handle the response as needed
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error);
    }
  };

  return (
    <UserDashboardLayout>
      <div className="dashboard-area">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="create-information create-education create-education-two">
            <div className="create-education-wrap">
              <div className="create-education-left">
                <h3>My Profile</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>First Name</label>
                  <Controller
                    name="firstName"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Frist Name"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.firstName?.type === "required"
                      ? "Frist is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <Controller
                    name="lastName"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name "
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.lastName?.type === "required"
                      ? "Last Name is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Your Email</label>
                  <Controller
                    name="email"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.email?.type === "required"
                      ? "Email is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <Controller
                    name="phoneNumber"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Number"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.phoneNumber?.type === "required"
                      ? "Number is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Qualification</label>
                  <Controller
                    name="qualification"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Qualification"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.qualification?.type === "required"
                      ? "Field is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Gender</label>
                  <Controller
                    name="gender"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <select {...field} className="form-control">
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                      </select>
                    )}
                  />
                  <p className="error">
                    {errorsLogin.gender?.type === "required"
                      ? "Field is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Years of Experience</label>
                  <Controller
                    name="experience"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Number"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.experience?.type === "required"
                      ? "Field is required"
                      : null}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="textleft">Upload Your Resume</p>
                <div className="form-group">
                  <Controller
                    name="resume"
                    control={controlLogin}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type={"file"}
                        onChange={(e) => {
                          field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                        }}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.resume?.type === "required"
                      ? "Resume is required"
                      : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-left">
            <button type="submit" className="btn create-ac-btn">
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserDashboardLayout>
  );
};

export default UserProfile;
