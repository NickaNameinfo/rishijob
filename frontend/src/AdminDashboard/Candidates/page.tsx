"use client";
import * as React from "react";
import { infoData } from "../../../configData";
import axios from "axios";
import AdminDashboardLayout from "../../AdminDashboardLayout/page";
import { Link } from "react-router-dom";

const Candidates = () => {
  const [company, setCompany] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`${infoData.baseApi}/customers`)
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Qualification</th>
              <th>Gender</th>
              <th>Experience</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {company?.map((result, index) => (
              <tr key={index}>
                <td>
                  <h5>
                    <b>{result?.firstName}</b>{" "}
                  </h5>
                </td>
                <td>
                  <h5>
                    <b>{result?.lastName}</b>{" "}
                  </h5>
                </td>
                <td className="">
                  <p>{result?.email}</p>
                </td>
                <td className="">
                  <p>{result?.phoneNumber}</p>
                </td>
                <td className="">
                  <p>{result?.qualification}</p>
                </td>
                <td className="">
                  <p>{result?.gender}</p>
                </td>
                <td className="">
                  <p>{result?.experience}</p>
                </td>
                <td>
                  <i className="icofont-file-pdf" />
                  <Link
                    to={`${infoData?.baseApi}/${result?.resume}`}
                    target="_blank"
                  >
                    Download
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminDashboardLayout>
  );
};

export default Candidates;
