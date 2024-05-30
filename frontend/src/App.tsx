import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Index/page";
import Header from "./Components/Header";
import Footer from "./Components/Footer/page";
import Login from "./Components/Login/page";
import CreateAccount from "./Components/CreateAccount/page";
import CompanyLogin from "./Components/Login/CompanyLogin/page";
import Company from "./Components/Company/page";
import Terms from "./Components/Terms/page";
import Privacy from "./Components/Privacy/page";
import Disclaimer from "./Components/Disclaimer/page";
import About from "./Components/About/page";
import Testimonial from "./Components/Testimonial/page";
import Contact from "./Components/Contact/page";
import UserProfile from "./Components/UserDashboard/UserProfile/page";
import AppliedJob from "./Components/UserDashboard/AppliedJob/page";
import SearchJob from "./Components/UserDashboard/SearchJob/page";
import Help from "./Components/UserDashboard/Help/page";
import Settings from "./Components/UserDashboard/Settings/page";
import COmpanyProfile from "./CompanyDashboard/CompanyProfile/page";
import PostJob from "./CompanyDashboard/PostJob/page";
import Jobs from "./CompanyDashboard/Jobs/page";
import Candidates from "./AdminDashboard/Candidates/page";
import JobList from "./AdminDashboard/JobList/page";
import AdminDashboard from "./AdminDashboard/page";
import ComapnySettings from "./CompanyDashboard/Settings/page";
import CompanyCandidates from "./CompanyDashboard/Candidates/page";
import JobDetails from "./Components/[slug]/page";
import Apply from "./Components/Apply/[slug]/page";
import JobOtp from "./Components/JobOtp/page";
import { useDispatch } from "react-redux";
import React from "react";
import { login } from "./loginSlice";
import Forgot from "./Components/Forgot/page";


function App() {
  const dispatch = useDispatch();
  let profileName:any = localStorage.getItem("profileName");

  React.useEffect(() => {
    if (profileName) {
      dispatch(login(profileName));
    } else {
      dispatch(login(null));
    }
  }, [profileName]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Components/Login" element={<Login />} />
        <Route path="/Components/CreateAccount" element={<CreateAccount />} />
        <Route
          path="/Components/Login/CompanyLogin"
          element={<CompanyLogin />}
        />
        <Route path="/Components/Company" element={<Company />} />
        <Route path="/Components/Terms" element={<Terms />} />
        <Route path="/Components/Privacy" element={<Privacy />} />
        <Route path="/Components/Disclaimer" element={<Disclaimer />} />
        <Route path="/Components/About" element={<About />} />
        <Route path="/Components/Testimonial" element={<Testimonial />} />
        <Route path="/Components/Contact" element={<Contact />} />
        <Route path="/Components/JobDetails" element={<JobDetails />} />
        <Route path="/Components/Apply" element={<Apply />} />
        <Route path="/Components/JobOtp" element={<JobOtp />} />
        <Route path="/Components/Forgot" element={<Forgot />} />
        <Route
          path="/Components/UserDashboard/UserProfile"
          element={<UserProfile />}
        />
        <Route
          path="/Components/UserDashboard/AppliedJob"
          element={<AppliedJob />}
        />
        <Route
          path="/Components/UserDashboard/SearchJob"
          element={<SearchJob />}
        />
        <Route path="/Components/UserDashboard/Help" element={<Help />} />
        <Route
          path="/Components/UserDashboard/Settings"
          element={<Settings />}
        />
        <Route
          path="/CompanyDashboard/CompanyProfile"
          element={<COmpanyProfile />}
        />
        <Route path="/CompanyDashboard/PostJob" element={<PostJob />} />
        <Route path="/CompanyDashboard/Jobs" element={<Jobs />} />
        <Route
          path="/CompanyDashboard/Candidates"
          element={<CompanyCandidates />}
        />
        <Route
          path="/CompanyDashboard/Settings"
          element={<ComapnySettings />}
        />
        <Route path="/AdminDashboard/JobList" element={<JobList />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminDashboard/Candidates" element={<Candidates />} />
        <Route path="/AdminDashboard/AppliedList" element={<Candidates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
