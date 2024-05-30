"use client";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import UserDashboardLayout from "../../UserDashboardLayout/page";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [company, setCompany] = React.useState([]);
  const [localUserName, setCompanyName] = React.useState(
    localStorage.getItem("userName")
  );

  React.useEffect(() => {
    console.log(localUserName, "sdfas");
    if (!localUserName) {
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/api/v1/jobs";
    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        setCompany(response?.data?.data?.data); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <UserDashboardLayout>
      <div>
        <div>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-text">
                  <h1 className="mb15">Your Job Applications</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="job-area job-area-two pt-50">
          <div className="container">
            <div className="row">
              {company
                ?.filter((item) => item.userName === localUserName)
                ?.map((result, index) => (
                  <div className="col-sm-4" key={index}>
                    <div className="job-card">
                      <div className="job-card-header">
                        <svg
                          viewBox="0 -13 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ backgroundColor: "#2e2882" }}
                        >
                          <g fill="#feb0a5">
                            <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                            <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                          </g>
                          <path
                            d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                            fill="#feb0a5"
                          />
                        </svg>
                      </div>
                      <div className="job-card-title">{result?.jobTitle}</div>
                      <div className="job-card-subtitle">
                        {result?.jobLocation}
                      </div>
                      <div className="job-detail-buttons">
                        <button className="search-buttons detail-button">
                          {result?.jobLocation}
                        </button>
                        <button className="search-buttons detail-button">
                          {result?.experience}
                        </button>
                      </div>
                      <div className="job-card-buttons">
                        <button className="search-buttons card-buttons">
                          {result?.jobStatus && result?.jobStatus === "Approved"
                            ? "Shortlisted"
                            : result?.jobStatus}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </UserDashboardLayout>
  );
};
export default UserDashboard;
