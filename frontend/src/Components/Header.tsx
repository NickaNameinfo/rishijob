"use client";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Store";
const Header = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [userName, setUserName] = React.useState(null);
  console.log(userInfo, "userInfo45234");
  const [comapnyName, setCOmpanyName] = React.useState(null);

  React.useEffect(() => {
    let userName = localStorage?.getItem("userName");
    setUserName(userName);
    let CompanyName = localStorage.getItem("companyName");
    setCOmpanyName(CompanyName);
  }, [userInfo]);

  return (
    <div className="navbar-area">
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src="/Images/logo.png" alt="Logo"></img>
        </Link>
      </div>

      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img src="/Images/logo.png" alt="Logo"></img>
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link dropdown-toggle active">
                    Home
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link
                    to="/Components/Dashboard"
                    className="nav-link dropdown-toggle"
                  >
                    Jobs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Components/UserDashboard"
                    className="nav-link dropdown-toggle"
                  >
                    Profile
                  </Link>
                </li> */}
              </ul>
              <div className="common-btn">
                {!userInfo && !userInfo ? (
                  <>
                    <Link className="login-btn pe-0" to="/Components/Login">
                      Log in /
                    </Link>
                    <Link
                      className="login-btn"
                      to="/Components/Login/CompanyLogin"
                    >
                      Employers / Post Job
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to={
                        comapnyName
                          ? "/CompanyDashboard/CompanyProfile"
                          : "/Components/UserDashboard/UserProfile"
                      }
                    >
                      <img
                        className="user-profile"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                        alt=""
                      />
                      <div className="user-name">
                        {userInfo ? userInfo : userInfo}
                      </div>
                    </Link>
                  </>
                )}
                <div
                  id="google_translate_element"
                  className="lang"
                  style={{ display: "inline" }}
                ></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
