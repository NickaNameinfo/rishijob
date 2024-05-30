"use client";
import * as React from "react";
import axios from "axios";
import { infoData } from "../../../configData";
import AdminDashboardLayout from "../../AdminDashboardLayout/page";

const JobList = () => {
  const [company, setCompany] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`${infoData.baseApi}/courses`)
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
    <AdminDashboardLayout>
      <div className="searched-jobs">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Job Location</th>
              <th>Salary From</th>
              <th>Salary To</th>
              <th>Job Location</th>
              <th>Job Type</th>
              <th>Experince</th>
            </tr>
          </thead>
          <tbody>
            {company?.map((result, index) => (
              <tr key={index}>
                <td>
                  <h5>
                    <b>{result?.companyName}</b>{" "}
                  </h5>
                </td>
                <td>
                  <h5>
                    <b>{result?.jobLocation}</b>{" "}
                  </h5>
                </td>
                <td className="">
                  <p>{result?.jobTitle}</p>
                </td>
                <td>
                  <p>{result?.salaryFrom}</p>
                </td>
                <td>
                  <p>{result?.salaryTo}</p>
                </td>
                <td>
                  <p>{result?.jobLocation}</p>
                </td>
                <td>
                  <p>{result?.jobType}</p>
                </td>
                <td>
                  <p>{result?.experince}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminDashboardLayout>
  );
};

export default JobList;
