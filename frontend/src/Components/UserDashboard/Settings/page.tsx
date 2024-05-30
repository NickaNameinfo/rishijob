"use client";
import axios from "axios";
import React from "react";
import { infoData } from "../../../../configData";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserDashboardLayout from "../../../UserDashboardLayout/page";

const Settings = () => {
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
    }
    getCompany(userID);
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
        alert("Updated SuccessFul!")
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
        <div className="create-information create-education create-education-two">
          <div className="create-education-wrap">
            <div className="create-education-left accsett">
              <h3>Account Settings</h3>
              <p>Change your email, mobile number or password.</p>
            </div>
          </div>
          <form className="settings" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <label>Email Address</label>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
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
              </div>
              <label>Mobile number</label>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
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
              </div>
              <label>Password</label>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <Controller
                      name="passowrd"
                      control={controlLogin}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter passowrd"
                          {...field}
                        />
                      )}
                    />
                    <p className="error">
                      {errorsLogin.passowrd?.type === "required"
                        ? "Passowrd is required"
                        : null}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <button type="submit" className="btn create-ac-btn">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </UserDashboardLayout>
  );
};

export default Settings;
