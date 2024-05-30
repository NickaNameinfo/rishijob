import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CompanyDashboardLayout: any = ({ children }) => {
  const [companyName, setLoginUserName] = React.useState(
    localStorage.getItem("companyName")
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("companyName");
    console.log(companyName, "sdfas");
    if (!companyName) {
      navigate("/");
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("userName");
    localStorage.removeItem("companyId");
    localStorage.removeItem("companyName");
    localStorage.removeItem("profileName");
 localStorage.removeItem("companyLogo");
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
                to="/CompanyDashboard/PostJob"
                className="search-buttons card-buttons"
              >
                Create a jobs
              </Link>
              <Link
                to="/CompanyDashboard/CompanyProfile"
                className="search-buttons card-buttons"
              >
                Company Profile
              </Link>
              <Link
                to="/CompanyDashboard/Jobs"
                className="search-buttons card-buttons"
              >
                Jobs
              </Link>
              <Link
                to="/CompanyDashboard/Candidates"
                className="search-buttons card-buttons"
              >
                Candidates
              </Link>
              <Link
                to="/CompanyDashboard/Settings"
                className="search-buttons card-buttons"
              >
                Settings
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

export default CompanyDashboardLayout;
