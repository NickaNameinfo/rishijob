import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";

const JobProfileCard = ({ result, column = null }) => {
  const [jobList, setJobList] = React.useState(null);
  const [localUserName, setCOmpanyName] = React.useState(
    localStorage.getItem("userName")
  );
  React.useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:5000/api/v1/jobs";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        // let localUserName = localStorage.getItem("userName");
        let tempData = response?.data?.data?.data.filter(
          (item) => item.userName === localUserName
        );
        console.log(tempData, "response.data123412");

        setJobList(tempData); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);
  return (
    <div className="job-card" key={result?.id}>
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
        <div className="menu-dot" />
      </div>
      <div className="job-card-title">{result?.jobTitle}</div>
      <div className="job-card-subtitle">{result?.jobdesCription}</div>
      <div className="job-detail-buttons">
        <button className="search-buttons detail-button">
          {result?.experince}
        </button>
      </div>
      <div className="job-card-buttons">
        <button className="search-buttons card-buttons">
          {jobList?.some((item) => item.jobTitle === result?.jobTitle) ? (
            <span style={{ color: "black" }}>Applied</span>
          ) : (
            <Link to={`/Components/${result?.id}`} style={{ color: "white" }}>
              Apply Now
            </Link>
          )}
        </button>
        <button className="search-buttons card-buttons-msg">Messages</button>
      </div>
    </div>
  );
};

export default JobProfileCard;
