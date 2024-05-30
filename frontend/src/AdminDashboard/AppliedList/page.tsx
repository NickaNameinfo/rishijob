import * as React from "react";
import axios from "axios";
import { infoData } from "../../../configData";
import AdminDashboardLayout from "../../AdminDashboardLayout/page";

const AppliedList = () => {
  const [company, setCompany] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`${infoData.baseApi}/jobs`)
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
              <th>Applied Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Job Title</th>
              <th>Job Status</th>
              <th>Experience</th>
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
                    <b>{result?.name}</b>{" "}
                  </h5>
                </td>
                <td className="">
                  <p>{result?.phoneNumber}</p>
                </td>
                <td>
                  <p>{result?.email}</p>
                </td>
                <td>
                  <p>{result?.jobTitle}</p>
                </td>
                <td>
                  <p>{result?.jobStatus}</p>
                </td>
                <td>
                  <p>{result?.experience}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminDashboardLayout>
  );
};

export default AppliedList;
