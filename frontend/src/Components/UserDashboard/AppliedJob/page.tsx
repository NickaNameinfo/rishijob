"use client";
import * as React from "react";
import UserDashboard from "../../../UserDashboardLayout/page";
import { infoData } from "../../../../configData";
import axios from "axios";
import UserDashboardLayout from "../../../UserDashboardLayout/page";
import JobProfileCard from "../../JobProfileCard";
import JobCard from "../../JobCard";

const AppliedJob = () => {
  const [courses, setCourses] = React.useState([]);
  console.log(courses, "courses")
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
        
        <div className="searched-jobs">
          <div className="job-cards d-block">
            {courses.length > 0 ? courses?.map((result, index) => (
              <JobCard result={result} column={12} appiled={true} key={index}/>
            )) : <p>No Jobs</p>}
          </div>
        </div>
      </>
    </UserDashboardLayout>
  );
};

export default AppliedJob;
