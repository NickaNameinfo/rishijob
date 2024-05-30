import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../loginSlice";

const UserDashboardLayout: any = ({ children }) => {
  const [localUserName, setCompanyName] = React.useState(
    localStorage.getItem("userName")
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    // let localUserName = localStorage.getItem("userName");
    console.log(localUserName, "sdfas");
    if (!localUserName) {
      navigate("/");
    }
  }, []);

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
    <div>
      <div className="wrapper">
        <div className="main-container jobsss">
          <div className="row">
            <div className="col-sm-3">
              <div className="search-type">
                <Link
                  to="/Components/UserDashboard/UserProfile"
                  className="search-buttons card-buttons"
                >
                  My Profile
                </Link>
                <Link
                  to="/Components/UserDashboard/AppliedJob"
                  className="search-buttons card-buttons"
                >
                  Applied Jobs
                </Link>
                <Link
                  to="/Components/UserDashboard/SearchJob"
                  className="search-buttons card-buttons"
                >
                  Search Jobs
                </Link>
                <Link to="" className="search-buttons card-buttons">
                  Saved Jobs
                </Link>
                {/* <Link to="" className="search-buttons card-buttons">
                  Notification
                </Link> */}
                <Link
                  to="/Components/UserDashboard/Help"
                  className="search-buttons card-buttons"
                >
                  Help
                </Link>
                <Link
                  to="/Components/UserDashboard/Settings"
                  className="search-buttons card-buttons"
                >
                  Settings
                </Link>
                <Link className="search-buttons card-buttons" to="#">
                  <span onClick={() => logOut()}>Log Out</span>
                </Link>
              </div>
            </div>
            <div className="col-sm-9">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
