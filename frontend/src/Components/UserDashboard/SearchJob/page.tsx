"use client";
import * as React from "react";
import { infoData } from "../../../../configData";
import axios from "axios";
import UserDashboardLayout from "../../../UserDashboardLayout/page";
import JobCard from "../../JobCard";

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
    <div>
      <div className="search-menu">
        <div className="search-bar">
          <input
            type="text"
            placeholder="jobTitle"
            onChange={handleInputChange}
            name="jobTitle"
          />
        </div>
        <div className="search-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx={12} cy={10} r={3} />
          </svg>
          <input
            type="text"
            placeholder="Location"
            onChange={handleInputChange}
            name="jobLocation"
          />
        </div>
        <div className="search-job">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-briefcase"
          >
            <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
          </svg>
          <select
            onChange={handleInputChange}
            name={"jobType"}
            className="form-select"
          >
            <option value={"Full Time"}>Full Time</option>
            <option value={"Part Time"}>Part Time</option>
            <option value={"Intern"}>Intern</option>
          </select>
        </div>
        {/* <div className="search-salary">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth=".4"
          >
            <path
              d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z"
              stroke="currentColor"
            />
            <path
              d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z"
              stroke="currentColor"
            />
            <path
              d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"
              stroke="currentColor"
            />
            <path
              d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z"
              stroke="currentColor"
            />
          </svg>
          <input type="text" placeholder="Salary Range" />
        </div> */}
        <button className="search-button" onClick={handleSearch}>
          Find Job
        </button>
      </div>
    </div>
  );
};

const SearchJob = () => {
  const [courses, setCourses] = React.useState([]);
  const [filteredJobs, setFilteredJobs] = React.useState([]);

  console.log(filteredJobs, "filteredJobs");

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
        console.log(response?.data?.data?.data, "response.data123412");
        setCourses(response?.data?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <UserDashboardLayout>
      <>
        <JobSearch onSearch={handleSearch} />
        <div className="searched-jobs">
          <div className="searched-bar mt-3">
            <div className="searched-show">Showing {courses?.length} Jobs</div>
            <div className="searched-sort">
              Sort by: <span className="post-time">Newest Post </span>
              <span className="menu-icon">▼</span>
            </div>
          </div>
          <div className="job-cards d-block">
            {filteredJobs.length > 0 ? (
              filteredJobs?.map((result, index) => (
                <JobCard result={result} column={12} key={index} />
              ))
            ) : courses?.length > 0 ? (
              courses?.map((result, index) => (
                <JobCard result={result} column={12} key={index} />
              ))
            ) : (
              <p>No Jobs</p>
            )}
          </div>
        </div>
      </>
    </UserDashboardLayout>
  );
};

export default SearchJob;
