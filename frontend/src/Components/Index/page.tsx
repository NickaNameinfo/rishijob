"use client";
import React from "react";
import Header from "../Header";
import axios from "axios";
import { infoData } from "../../../configData";
import JobCard from "../JobCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../loginSlice";

const JobSearch = ({ onSearch }) => {
  const [searchParams, setSearchParams] = React.useState({
    jobType: "",
    jobLocation: "",
    jobTitle: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "asdfsa");
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div className="searchbox">
      <div className="row">
        <div className="col-lg-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Job Title"
              onChange={handleInputChange}
              name="jobTitle"
            />
            <label>
              <i className="icofont-search-1" />
            </label>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>
              <i className="icofont-location-pin" />
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="City or State"
              onChange={handleInputChange}
              name="jobLocation"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <select
              className="form-select"
              aria-label="Default select example"
              // onChange={handleInputChange}
            >
              <option>Job Category</option>
              <option value={"Part Time"}>Part Time</option>
              <option value={"Full Time"}>Full Time</option>
              <option value={"Contract"}>Contract</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn banner-form-btn"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

const Index = () => {
  const dispatch = useDispatch();
  let profileName = localStorage.getItem("profileName");
  const [courses, setCourses] = React.useState([]);

  const [filteredJobs, setFilteredJobs] = React.useState([]);

  console.log(filteredJobs, "filteredJobs");

  if (!profileName) {
    dispatch(login(null));
  }

  const handleSearch = (searchParams) => {
    console.log(searchParams, "searchParams", courses);
    // Implement your search logic here
    const result = courses.filter((job) => {
      const matchJobType =
        !searchParams.jobType ||
        job?.jobType
          .toLowerCase()
          .includes(searchParams?.jobType.toLowerCase());
      const matchJobLocation =
        !searchParams.jobLocation ||
        job?.jobLocation
          .toLowerCase()
          .includes(searchParams?.jobLocation.toLowerCase());
      const matchJobTitle =
        !searchParams.jobTitle ||
        job.jobTitle
          .toLowerCase()
          .includes(searchParams.jobTitle.toLowerCase());

      return matchJobType && matchJobLocation && matchJobTitle;
    });

    setFilteredJobs(result);
  };

  React.useEffect(() => {
    const apiUrl = `${infoData?.baseApi}/courses`;
    axios
      .get(apiUrl)
      .then((response) => {
        setCourses(response?.data?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      <>
        <div className="banner-area banner-img-one">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-text">
                  <h1>
                    Start your <span>Dream Career</span> with Job
                  </h1>
                  <p>
                    Find 40,000+ Jobs, Employment &amp; Career Opportunities
                  </p>
                  <div className="banner-form-area">
                    <JobSearch onSearch={handleSearch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account-area">
          <div className="container">
            <div className="row account-wrap">
              <div className="col-sm-6 col-lg-4">
                <div className="account-item">
                  <i className="flaticon-approved" />
                  <span>Register Your Account</span>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="account-item">
                  <i className="flaticon-cv" />
                  <span>Upload Your Resume</span>
                </div>
              </div>
              <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                <div className="account-item account-last">
                  <i className="flaticon-customer-service" />
                  <span>Apply for Dream Job</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="category-area category-area-two pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Choose Your Desire Category</h2>
            </div>
            <div className="row">
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item wow fadeInUp animated"
                  data-wow-delay=".3s"
                  style={{ visibility: "visible", animationDelay: "0.3s" }}
                >
                  <i className="flaticon-settings" />
                  <Link to="#">Technical Support</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-two wow fadeInUp animated"
                  data-wow-delay=".4s"
                  style={{ visibility: "visible", animationDelay: "0.4s" }}
                >
                  <i className="flaticon-layers" />
                  <Link to="#">Business Development</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-three wow fadeInUp animated"
                  data-wow-delay=".5s"
                  style={{ visibility: "visible", animationDelay: "0.5s" }}
                >
                  <i className="flaticon-house" />
                  <Link to="#">Real Estate Business</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-four wow fadeInUp animated"
                  data-wow-delay=".6s"
                  style={{ visibility: "visible", animationDelay: "0.6s" }}
                >
                  <i className="flaticon-analysis" />
                  <Link to="#">Share Maeket Analysis</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-five wow fadeInUp animated"
                  data-wow-delay=".7s"
                  style={{ visibility: "visible", animationDelay: "0.7s" }}
                >
                  <i className="flaticon-sun" />
                  <Link to="#">Weather &amp; Environment</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-six wow fadeInUp animated"
                  data-wow-delay=".3s"
                  style={{ visibility: "visible", animationDelay: "0.3s" }}
                >
                  <i className="flaticon-hand" />
                  <Link to="#">Finance &amp; Banking Service</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-seven wow fadeInUp animated"
                  data-wow-delay=".4s"
                  style={{ visibility: "visible", animationDelay: "0.4s" }}
                >
                  <i className="flaticon-neural" />
                  <Link to="#">IT &amp; Networing Sevices</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-eight wow fadeInUp animated"
                  data-wow-delay=".5s"
                  style={{ visibility: "visible", animationDelay: "0.5s" }}
                >
                  <i className="flaticon-dish" />
                  <Link to="#">Restaurant Services</Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div
                  className="category-item category-nine wow fadeInUp animated"
                  data-wow-delay=".6s"
                  style={{ visibility: "visible", animationDelay: "0.6s" }}
                >
                  <i className="icofont-fire-burn" />
                  <Link to="#">Defence &amp; Fire Service</Link>
                </div>
              </div>
              <div className="col-sm-4 offset-sm-4 offset-lg-0 col-lg-3">
                <div
                  className="category-item category-ten wow fadeInUp animated"
                  data-wow-delay=".7s"
                  style={{ visibility: "visible", animationDelay: "0.7s" }}
                >
                  <i className="flaticon-truck" />
                  <Link to="#">Home Delivery Services</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="counter-area pt-50 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-6 col-sm-3 col-lg-3">
                <div className="counter-item">
                  <i className="flaticon-employee" />
                  <h3>
                    <span className="odometer" data-count={14}>
                      1 4
                    </span>
                    <span className="target">k+</span>
                  </h3>
                  <p>Job Available</p>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-lg-3">
                <div className="counter-item">
                  <i className="flaticon-curriculum" />
                  <h3>
                    <span className="odometer" data-count={18}>
                      1 8
                    </span>
                    <span className="target">k+</span>
                  </h3>
                  <p>CV Submitted</p>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-lg-3">
                <div className="counter-item">
                  <i className="flaticon-enterprise" />
                  <h3>
                    <span className="odometer" data-count={9}>
                      9
                    </span>
                    <span className="target">k+</span>
                  </h3>
                  <p>Companies</p>
                </div>
              </div>
              <div className="col-6 col-sm-3 col-lg-3">
                <div className="counter-item">
                  <i className="flaticon-businessman-paper-of-the-application-for-a-job" />
                  <h3>
                    <span className="odometer" data-count={35}>
                      3 5
                    </span>
                    <span className="target">+</span>
                  </h3>
                  <p>Appointed to Job</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="job-area pb-100 pt-100">
          <div className="container">
            <div className="section-title">
              <h2>Recent Jobs</h2>
            </div>
            <div id="container">
              <div className="row">
                <div className="col-lg-6 mix web ui">
                  <div className="recents">
                    <Link to="/Components/Login">
                      <img src="/Images/job.webp" alt="Job" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 mix ui web">
                  <div className="recents">
                    <Link to="/Components/Login/CompanyLogin">
                      <img src="/Images/emp.webp" alt="Job" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bannersec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <img src="/Images/bann.png" alt="" />
              </div>
              <div className="col-sm-4">
                <h6>Trending Jobs</h6>
                <img src="/Images/add.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <section className="blog-area pt-100">
          <div className="container">
            <div className="section-title">
              <h2>Hire candidates from multiple districts across India!</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="blog-top">
                    <Link to="#">
                      <img src="/Images/d1.webp" alt="Blog" />
                    </Link>
                    {/* <span>21 May, 2020</span> */}
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="#">Kumbakonam</Link>
                    </h3>
                    <p>500+ candidates</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="blog-top">
                    <Link to="#">
                      <img src="/Images/d2.webp" alt="Blog" />
                    </Link>
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="#">Chennai</Link>
                    </h3>
                    <p>Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="blog-top">
                    <Link to="#">
                      <img src="/Images/d3.webp" alt="Blog" />
                    </Link>
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="#">Bangalore</Link>
                    </h3>
                    <p>Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="blog-top">
                    <Link to="#">
                      <img src="/Images/d4.webp" alt="Blog" />
                    </Link>
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link to="#">Kerala</Link>
                    </h3>
                    <p>Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="job-area pb-100 pt-50">
          <div className="container">
            <div className="section-title">
              <h2>Recent Jobs</h2>
            </div>
            <div id="container">
              <div className="row">
                {filteredJobs.length > 0 ? (
                  filteredJobs?.map((result) => (
                    <JobCard result={result} column={6} />
                  ))
                ) : courses?.length > 0 ? (
                  courses?.map((result) => (
                    <JobCard result={result} column={6} />
                  ))
                ) : (
                  <p>No Jobs</p>
                )}
              </div>
            </div>
          </div>
        </section> */}
      </>
    </div>
  );
};
export default Index;
