import axios from "axios";
import React from "react";
import { infoData } from "../../configData";
import { Link } from "react-router-dom";

const JobCard = ({ result, column, appiled = null }) => {
  const [jobList, setJobList] = React.useState(null);
  const [filtterJob, setFilterJob] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
  const [localUserName, setCOmpanyName] = React.useState(
    localStorage.getItem("userName")
  );
  const [userID, setuserID] = React.useState(localStorage.getItem("userID"));

  console.log(jobList, "userProfile213412", appiled);

  React.useEffect(() => {
    let tempDate = jobList?.filter(
      (item) => item.jobTitle === result?.jobTitle
    );
    setFilterJob(tempDate);
    getUserProfile();
  }, [result, jobList]);

  React.useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(`${infoData?.baseApi}/jobs`)
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

  const onSubmit = async (id) => {
    const apiUrl1 = `${infoData?.baseApi}/courses/${id}`;
    axios
      .get(apiUrl1)
      .then(async (response1) => {
        const formData = new FormData();
        formData.append("userName", userProfile?.userName);
        formData.append("jobTitle", response1?.data?.data?.jobTitle);
        formData.append("jobCategory", response1?.data?.data?.jobCategory);
        formData.append("companyName", response1?.data?.data?.companyName);
        formData.append("companyId", response1?.data?.data?.companyId);
        formData.append(
          "resume",
          userProfile?.resume ? userProfile?.resume : jobList?.[0]?.resume
        );
        try {
          const response = await axios.post(
            `${infoData?.baseApi}/jobs`,
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
            // let userID = userID;
            if (userID) {
              alert("Good Job! Thanks for submitting the form!");
              alert("Updated SuccessFul!")
            } else {
              alert("Please login before applying");
            }
          }
          // Handle the response as needed
        } catch (error) {
          // Handle errors
          console.error("Error making POST request:", error);
        }
        console.log(response1?.data?.data, "Response from API 1");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getUserProfile = async () => {
    // let userID = localStorage.getItem("userID");
    const apiUrl = `${infoData?.baseApi}/customers/${userID}`;
    let result = await axios.get(apiUrl);
    setUserProfile(result?.data?.data);
  };

  return (
    <>
      {appiled
        ? jobList?.some((item) => item.jobTitle === result?.jobTitle) && (
            <div className={`col-sm-${column} mix web ui`} key={result?.id}>
              <div className="job-item">
                <Link
                  className="company"
                  to={`/Components/apply/?id=${result?.id}`}
                >
                  <img
                    src={`${infoData?.baseApi}/uploads/${result?.companyLogo}`}
                    alt="Job"
                  />
                </Link>
                <Link
                  className="company"
                  to={`/Components/apply/?id=${result?.id}`}
                >
                  <div className="job-inner align-items-center">
                    <div className="job-inner-left">
                      <h3>
                        <Link to={`/Components/apply/?id=${result?.id}`}>
                          {result?.jobTitle}
                        </Link>
                      </h3>

                      {result?.companyName}
                      <ul>
                        <li>
                          <i className="icofont-money-bag" />
                          {result?.salaryFrom} - {result?.salaryTo}
                        </li>
                        <li>
                          <i className="icofont-location-pin" />
                          {result?.jobLocation}
                        </li>
                      </ul>
                    </div>
                    <div className="job-inner-right">
                      <ul>
                        <li>
                          {jobList?.some(
                            (item) => item.jobTitle === result?.jobTitle
                          ) ? (
                            <div className="apply">
                              {filtterJob?.[0]?.jobStatus
                                ? filtterJob?.[0]?.jobStatus
                                : "Applied"}
                            </div>
                          ) : jobList?.[0]?.resume === "" ||
                            !jobList?.[0]?.resume ? (
                            <Link
                              to={`/Components/apply/Apply/?id=${result?.id}`}
                            >
                              Apply
                            </Link>
                          ) : (
                            <span onClick={() => onSubmit(result?.id)}>
                              Apply
                            </span>
                          )}
                        </li>
                      </ul>
                      <div className="apply1">
                        <i className="icofont-book-mark"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        : !jobList?.some((item) => item.jobTitle === result?.jobTitle) && (
            <div className={`col-sm-${column} mix web ui`}>
              <div className="job-item">
                <Link
                  className="company"
                  to={
                    jobList?.[0]?.resume === "" || !jobList?.[0]?.resume
                      ? `/Components/apply/?id=${result?.id}`
                      : "#"
                  }
                >
                  <img
                    src={`${infoData?.baseApi}/${result?.companyLogo}`}
                    alt="Job"
                  />
                </Link>
                <Link
                  className="company"
                  to={
                    jobList?.[0]?.resume === "" || !jobList?.[0]?.resume
                      ? `/Components/apply/?id=${result?.id}`
                      : "#"
                  }
                >
                  <div className="job-inner align-items-center">
                    <div className="job-inner-left">
                      <h3>
                        <Link
                          to={
                            jobList?.[0]?.resume === "" || !jobList?.[0]?.resume
                              ? `/Components/apply/?id=${result?.id}`
                              : "#"
                          }
                        >
                          {result?.jobTitle}
                        </Link>
                      </h3>
                      <Link
                        className="company"
                        to={
                          jobList?.[0]?.resume === "" || !jobList?.[0]?.resume
                            ? `/Components/apply/?id=${result?.id}`
                            : "#"
                        }
                      >
                        {result?.companyName}
                      </Link>
                      <ul>
                        <li>
                          <i className="icofont-money-bag" />
                          {result?.salaryFrom} - {result?.salaryTo}
                        </li>
                        <li>
                          <i className="icofont-location-pin" />
                          {result?.jobLocation}
                        </li>
                      </ul>
                    </div>
                    <div className="job-inner-right">
                      <ul>
                        <li>
                          {jobList?.[0]?.resume === "" ||
                          !jobList?.[0]?.resume ? (
                            <Link to={`/Components/Apply/?id=${result?.id}`}>
                              Apply
                            </Link>
                          ) : (
                            <span
                              onClick={() => onSubmit(result?.id)}
                              className="cursor-pointer"
                            >
                              Apply
                            </span>
                          )}
                        </li>
                      </ul>
                      <div className="apply1">
                        <i className="icofont-book-mark"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
    </>
  );
};

export default JobCard;
