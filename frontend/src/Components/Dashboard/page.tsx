"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer/page";
import { infoData } from "../../../configData";
import axios from "axios";
import JobCard from "../JobCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = `${infoData?.baseApi}/courses`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response?.data?.data?.data, "response.data123412");
        setCourses(response?.data?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="banner-area banner-img-one dashboardbanner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-text">
                  <h1 className="mb15">Search Your Job</h1>
                  <div className="banner-form-area">
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job Title"
                            />
                            <label>
                              <i className="icofont-search-1" />
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>
                              <i className="icofont-location-pin" />
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City or State"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn banner-form-btn">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="job-area job-area-two pt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="company-details-item">
                  <div className="single-resume-category">
                    <h3>Job Categories</h3>
                    <ul>
                      <li>
                        <Link to="#">Web Developer</Link>
                        <span>(5)</span>
                      </li>
                      <li>
                        <Link to="#">Web Designer</Link>
                        <span>(2)</span>
                      </li>
                      <li>
                        <Link to="#">UX/UI Designer</Link>
                        <span>(7)</span>
                      </li>
                      <li>
                        <Link to="#">Marketing</Link>
                        <span>(0)</span>
                      </li>
                      <li>
                        <Link to="#">SEO</Link>
                        <span>(1)</span>
                      </li>
                      <li>
                        <Link to="#">Networking</Link>
                        <span>(0)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="single-resume-category single-resume-types">
                    <h3>Job Locations</h3>
                    <ul>
                      <li>
                        <Link to="#">New York</Link>
                        <span>(4)</span>
                      </li>
                      <li>
                        <Link to="#">Washington</Link>
                        <span>(5)</span>
                      </li>
                      <li>
                        <Link to="#">Chicago</Link>
                        <span>(3)</span>
                      </li>
                      <li>
                        <Link to="#">Houston</Link>
                        <span>(1)</span>
                      </li>
                      <li>
                        <Link to="#">Los Angeles</Link>
                        <span>(0)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="row">
                  {courses?.map((result, index) => (
                    <JobCard result={result} column={12} key={index}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
