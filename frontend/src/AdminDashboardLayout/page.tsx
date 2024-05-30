import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboardLayout: any = ({ children }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("userName");
    localStorage.removeItem("companyId");
    localStorage.removeItem("comapnyName");
    localStorage.removeItem("profileName");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="wrapper">
      {/* <div className="fright mt-4">
        <Link to="/PostJob" className="search-buttons card-buttons ">
          Post a Job
        </Link>
      </div> */}
      <div className="main-container jobsss">
        <div className="row">
          <div className="col-sm-3">
            <div className="search-type">
              <Link
                to="/AdminDashboard"
                className="search-buttons card-buttons"
              >
                Comapny List
              </Link>
              <Link
                to="/AdminDashboard/JobList"
                className="search-buttons card-buttons"
              >
                Job List
              </Link>
              <Link
                to="/AdminDashboard/AppliedList"
                className="search-buttons card-buttons"
              >
                Applied List
              </Link>
              <Link
                to="/AdminDashboard/Candidates"
                className="search-buttons card-buttons"
              >
                Candidates
              </Link>
              <a className="search-buttons card-buttons">
                <span onClick={() => logOut()}>Log Out</span>
              </a>
            </div>
          </div>
          <div className="col-sm-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
