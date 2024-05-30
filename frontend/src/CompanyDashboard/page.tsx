import * as React from "react";
import CompanyDashboardLayout from "../CompanyDashboardLayout/page";
import axios from "axios";
import { infoData } from "../../configData";
import { useNavigate } from "react-router-dom";

const CompanyDashboard = () => {
  const [company, setCompany] = React.useState([]);
  const [localUserName, setLoginUserName] = React.useState(
    localStorage.getItem("companyName")
  );
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log(localUserName, "sdfas");
    if (!localUserName) {
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("companyName");
    axios
      .get(`${infoData.baseApi}/courses`)
      .then((response) => {
        // Handle the successful response
        console.log(response?.data?.data?.data, "response.data123412");
        let tempData = response?.data?.data?.data.filter(
          (item) => item.companyName === localUserName
        );
        setCompany(tempData); // Assuming the response is an array of courses
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <CompanyDashboardLayout>
      <div className="searched-jobs">
        <div className="searched-bar">
          <div className="searched-show">Showing {company?.length} Jobs</div>
          <div className="searched-sort">
            Sort by: <span className="post-time">Newest Post</span>
            <span className="menu-icon">▼</span>
          </div>
        </div>
        {company?.map((result, index) => (
          <table className="table table-bordered" key={index}>
            <tbody>
              <tr>
                <td>
                  <h5>
                    <b>{result?.jobTitle}</b>{" "}
                  </h5>
                  <p>Chennai, Tamil Nadu.</p>
                </td>
                <td className="bgg">
                  <p>90</p>
                  <p>Active</p>
                </td>
                <td className="bgg">
                  <p>40</p>
                  <p>Awaiting</p>
                </td>
                <td className="bgg">
                  <p>10</p>
                  <p>Contacting</p>
                </td>
                <td className="bgg">
                  <p>0</p>
                  <p>Hired</p>
                </td>
                <td>
                  <select name="" id="">
                    <option value={0}>Paused</option>
                    <option value={1}>Closed</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </CompanyDashboardLayout>
  );
};

export default CompanyDashboard;
