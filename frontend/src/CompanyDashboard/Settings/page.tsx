"use client";
import React from "react";
import CompanyDashboard from "../page";
import { infoData } from "../../../configData";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CompanyDashboardLayout from "../../CompanyDashboardLayout/page";

const ComapnySettings = () => {
  const [companyId, setLoginUserName] = React.useState(
    localStorage.getItem("companyId")
  );
  const navigate = useNavigate();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
    setValue,
  } = useForm();

  React.useEffect(() => {
    // let companyId = localStorage.getItem("companyId");
    if (!companyId) {
      navigate("/");
    }
    getCompany(companyId);
  }, []);

  const getCompany = async (companyId) => {
    const apiUrl = `${infoData?.baseApi}/company/${companyId}`;
    let result = await axios.get(apiUrl);
    console.log(result, "result234123");
    let tempData = {
      id: result?.data?.data?.id,
      companyName: result?.data?.data?.companyName,
      companyNumber: result?.data?.data?.companyNumber,
      companyEmail: result?.data?.data?.companyEmail,
      companyWebsite: result?.data?.data?.companyWebsite,
      companyAddress: result?.data?.data?.companyAddress,
      totalEmployee: result?.data?.data?.totalEmployee,
    };
    Object.keys(tempData).forEach((key) => {
      setValue(key, tempData[key]);
    });
  };

  const onSubmit = async (formData) => {
    console.log(formData, "sdfasdfsad");
    try {
      const response = await axios.put(
        `${infoData?.baseApi}/company/${formData?.id}`,
        formData
      );
      if (response.data.success && !response?.data?.data?.error) {
        alert("Updated SuccessFul!")
      } else {
        alert("User name, Company name or email is already exist");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };
  return (
    <CompanyDashboardLayout>
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
                </div>
              </div>
              <label>Mobile number</label>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <Controller
                      name="companyNumber"
                      control={controlLogin}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Company Number"
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
                </div>
              </div>
              <label>Password</label>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <Controller
                      name="password"
                      control={controlLogin}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Password"
                          {...field}
                        />
                      )}
                    />
                    <p className="error">
                      {errorsLogin.password?.type === "required"
                        ? "field is required"
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
    </CompanyDashboardLayout>
  );
};

export default ComapnySettings;
