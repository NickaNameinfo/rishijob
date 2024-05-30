"use client";
import * as React from "react";
import { infoData } from "../../../configData";
import axios from "axios";
import CompanyDashboardLayout from "../../CompanyDashboardLayout/page";
import { Link } from "react-router-dom";

const CompanyCandidates = () => {
  const [company, setCompany] = React.useState(null);
  const [companyId, setLoginUserName] = React.useState(
    localStorage.getItem("companyId")
  );
  React.useEffect(() => {
    // let companyId = localStorage.getItem("companyId");
    axios
      .get(`${infoData.baseApi}/jobs`)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        let tempData = response?.data?.data?.data.filter(
          (item) => item.companyId === companyId
        );
        setCompany(tempData); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  const onClickReject = async (formData) => {
    let tempData = {
      ...formData,
      jobStatus: "Rejected",
    };
    try {
      const response = await axios.put(
        `${infoData.baseApi}/jobs/${formData.id}`,
        tempData
      );
      if (response.data.success && !response?.data?.data?.error) {
        alert("Updated SuccessFul!")
      }
    } catch (error) {
      if (error) {
        alert(error.response.data?.message);
      }
    }
  };
  const onClickApprove = async (formData) => {
    let tempData = {
      ...formData,
      jobStatus: "Approved",
    };
    try {
      const response = await axios.put(
        `${infoData.baseApi}/jobs/${formData.id}`,
        tempData
      );
      if (response.data.success && !response?.data?.data?.error) {
        alert("Updated SuccessFul!")
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data?.message);
      }
    }
  };

  return (
    <CompanyDashboardLayout>
      <div className="searched-jobs">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Applied to</th>
              <th>Resume</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {company?.map((result, index) => (
              <tr key={index}>
                <td>
                  <h5>
                    <b>{result?.name}</b>{" "}
                  </h5>
                  <p>{result?.jobLocation}</p>
                </td>
                <td className="">
                  <p>{result?.jobTitle}</p>
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
                <td>
                  <p>{result?.jobStatus}</p>
                </td>
                <td style={{ width: " 180px" }}>
                  <i
                    className="icofont-close-squared-alt"
                    onClick={() => onClickReject(result)}
                    style={{
                      color: "red",
                      fontSize: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <i
                    className="icofont-tick-boxed"
                    onClick={() => onClickApprove(result)}
                    style={{ color: "green", fontSize: "30px" }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CompanyDashboardLayout>
  );
};

export default CompanyCandidates;
