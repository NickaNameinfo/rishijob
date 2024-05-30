import React from "react";
import Header from "../../Header";
import Footer from "../../Footer/page";
import { infoData } from "../../../../configData";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [courses, setCourses] = React.useState(null);
  const [customer, setCustomer] = React.useState(null);
  const [leave, setLevel] = React.useState(null);
  const [localUserName, setCOmpanyName] = React.useState(
    localStorage.getItem("userName")
  );
  const navigate = useNavigate();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
    watch,
  } = useForm();

  console.log(id, "sdfjaslkd43245", courses);

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("userName");
    console.log(localUserName, "sdfas");
    if (!localUserName) {
      alert("Before applying job kindly login your account");
      navigate("/");
    }

    const apiUrl1 = `${infoData?.baseApi}/courses/${id}`;
    const apiUrl2 = `${infoData?.baseApi}/customers/${localStorage.getItem(
      "userID"
    )}`;
    axios
      .get(apiUrl1)
      .then((response1) => {
        setCourses(response1?.data?.data);
        console.log(response1?.data?.data, "Response from API 1");
        return axios.get(apiUrl2);
      })
      .then((response2) => {
        setCustomer(response2?.data?.data);
        console.log(response2?.data?.data, "Response from API 2");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("userName", `${customer?.userName}`);
    formData.append("jobTitle", courses?.jobTitle);
    formData.append("jobCategory", courses?.jobCategory);
    formData.append("companyName", courses?.companyName);
    formData.append("companyId", courses?.companyId);
    formData.append("jobStatus", "Applied");
    try {
      const response = await axios.post(`${infoData?.baseApi}/jobs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (!response?.data?.success) {
        alert("Somthing want worng");
      } else {
        alert("Good Job! Thanks for submitting the form!");
        navigate("/Components/UserDashboard/AppliedJob");
      }
      // Handle the response as needed
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error);
    }
  };

  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-text">
                <h2>Apply Now</h2>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <i className="icofont-simple-right" />
                  </li>
                  <li>Apply Now</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="create-account-area pt-50 pb-50">
        <div className="container">
          <div className="create-photo">
            <div className="already-create text-center"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item applyform text-center">
                    <h5 className="mb15">Add your contact information</h5>
                    {/* <p>Enter your Registered Mobile No.</p> */}
                    <div className="create-photo-right">
                      <div className="form-group">
                        <Controller
                          name="name"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.name?.type === "required"
                            ? "Name is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="phoneNumber"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Number"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.phoneNumber?.type === "required"
                            ? "Number is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="email"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.email?.type === "required"
                            ? "Email is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="jobLocation"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.jobLocation?.type === "required"
                            ? "Location is required"
                            : null}
                        </p>
                      </div>

                      <div className="form-group textleft">
                        <input
                          type="radio"
                          id="fresher"
                          value="fresher"
                          name="experienceType"
                          onChange={(e) => setLevel(e.target.value)}
                        />
                        <label htmlFor="fresher">Fresher</label>

                        <input
                          type="radio"
                          id="experience"
                          value="experience"
                          name="experienceType"
                          onChange={(e) => setLevel(e.target.value)}
                        />
                        <label htmlFor="experience">Experience</label>
                      </div>
                      {leave === "experience" && (
                        <>
                          <div className="form-group">
                            <Controller
                              name="experience"
                              control={controlLogin}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Experience"
                                  {...field}
                                />
                              )}
                            />
                            <p className="error">
                              {errorsLogin.experience?.type === "required"
                                ? "Experience is required"
                                : null}
                            </p>
                          </div>
                          <div className="form-group">
                            <Controller
                              name="oldJobTitle"
                              control={controlLogin}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Job Title"
                                  {...field}
                                />
                              )}
                            />
                            <p className="error">
                              {errorsLogin.jobTItle?.type === "required"
                                ? "Job Title is required"
                                : null}
                            </p>
                          </div>
                          <div className="form-group">
                            <Controller
                              name="oldCompanyName"
                              control={controlLogin}
                              rules={{ required: true }}
                              render={({ field }) => (
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Company Name"
                                  {...field}
                                />
                              )}
                            />
                            <p className="error">
                              {errorsLogin.companyName?.type === "required"
                                ? "Company Name is required"
                                : null}
                            </p>
                          </div>
                        </>
                      )}

                      <div className="form-group">
                        <Controller
                          name="resume"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type={"file"}
                              onChange={(e) => {
                                field.onChange(e.target.files[0]); // Don't forget to call field.onChange to update the form state
                              }}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.resume?.type === "required"
                            ? "Resume is required"
                            : null}
                        </p>
                      </div>
                      <div className="text-right submitt">
                        <button type="submit" className="btn create-photo-btn">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
