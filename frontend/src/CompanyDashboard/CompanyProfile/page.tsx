"use client";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { infoData } from "../../../configData";
import { useNavigate } from "react-router-dom";
import CompanyDashboardLayout from "../../CompanyDashboardLayout/page";

const COmpanyProfile = () => {
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
      companyEmail: result?.data?.data?.companyEmail,
      companyWebsite: result?.data?.data?.companyWebsite,
      companyAddress: result?.data?.data?.companyAddress,
      totalEmployee: result?.data?.data?.totalEmployee,
    };
    Object.keys(tempData).forEach((key) => {
      setValue(key, tempData[key]);
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log(formData, "sdfasdfsad");
    try {
      const response = await axios.put(
        `${infoData?.baseApi}/company/${data?.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
      <div className="post-job-item">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="post-job-heading">
            <h2>Company Profile</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Job Title</label>
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
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Company Email</label>
                <div className="job-category-area">
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
            <div className="col-lg-6">
              <div className="form-group">
                <label>Company Webiste</label>
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
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="job-currency-area">
                  <label>Company Address</label>
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
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Total Employees</label>
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
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Update Logo</label>
                <Controller
                  name="companyLogo"
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
              </div>
            </div>
          </div>
          <div className="text-left">
            <button type="submit" className="btn create-ac-btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </CompanyDashboardLayout>
  );
};

export default COmpanyProfile;
