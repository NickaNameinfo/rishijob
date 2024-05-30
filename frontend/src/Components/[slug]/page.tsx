"use client";
import axios from "axios";
import React from "react";
import { infoData } from "../../../configData";
import { Link, useSearchParams } from "react-router-dom";

const JobDetails = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const [courses, setCourses] = React.useState(null);
  console.log(id, "sdfjaslkd43245", courses);

  React.useEffect(() => {
    const apiUrl = `${infoData?.baseApi}/courses/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response?.data?.data, "response.data123412");
        setCourses(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2>Job Details</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="icofont-simple-right" />
                  </li>
                  <li>Job Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-details-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="job-details-item">
                <div className="job-description">
                  <h2>Job Description</h2>
                  <p>{courses?.jobdesCription}</p>
                </div>
                {/* <div className="job-knowledge">
                  <h2>Required Knowledge, Skills, and Abilities</h2>
                  <ul>
                    <li>
                      <i className="icofont-hand-drawn-right" />
                      {courses?.jobSkills}
                    </li>
                  </ul>
                </div>
                <div className="job-knowledge">
                  <h2>Education Qualification</h2>
                  <ul>
                    <li>
                      <i className="icofont-hand-drawn-right" />
                      {courses?.jobQualification}
                    </li>
                  </ul>
                </div> */}
                <div className="text-center">
                  <Link
                    className="job-details-btn"
                    to={`/Components/Apply/${courses?.id}`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job-details-item">
                <div className="job-overview">
                  <h3>Overview</h3>
                  <ul>
                    <li>
                      <i className="icofont-price" />
                      <p>Offered Salary</p>
                      <span>
                        {courses?.salaryFrom} - {courses?.salaryTo}
                      </span>
                    </li>
                    {/* <li>
                      <i className="icofont-users-alt-3" />
                      <p>Gender</p>
                      <span>Male</span>
                    </li> */}
                    <li>
                      <i className="icofont-badge" />
                      <p>Experince</p>
                      <span>{courses?.experince}</span>
                    </li>
                    <li>
                      <i className="icofont-graduate" />
                      <p>Qualification</p>
                      <span>{courses?.jobQualification}</span>
                    </li>
                  </ul>
                </div>
                <div className="job-overview job-company">
                  <h3>Company Address</h3>
                  <ul>
                    <li>
                      <i className="icofont-location-pin" />
                      <span>{courses?.jobLocation}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
