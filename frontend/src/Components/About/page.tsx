import React from "react";

const About = () => {
  return (
    <div>
      <>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-text">
                  <h2>About</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-area pt-100 pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="popular-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6 imght">
                      <div className="practice-inner">
                        <img src="/Images/jobs.jpeg" alt="Popular" />
                        <img src="/Images/job1.jpg" alt="Popular" />
                      </div>
                    </div>
                    <div className="col-lg-6 imgsm">
                      <div className="practice-inner">
                        <img src="/Images/jobs1.webp" alt="Popular" />
                        <img src="/Images/job.png" alt="Popular" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="popular-item popular-right">
                  <div className="section-title text-left">
                    <h2>Why We are Most Popular</h2>
                  </div>
                  <p>
                    At Rishijobs, our mission is to help people get jobs. We
                    have more than ~13,000 global employees passionately
                    pursuing this purpose and improving the recruitment journey
                    through real stories and data. We foster a collaborative
                    workplace that strives to create the best experience for job
                    seekers.
                  </p>
                  <div className="row popular-wrap">
                    <div className="col-sm-6 col-lg-6">
                      <ul>
                        <li>
                          <i className="flaticon-approved" />
                          Trusted &amp; Quality Job
                        </li>
                        <li>
                          <i className="flaticon-no-money" />
                          No Extra Charge
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <ul>
                        <li>
                          <i className="flaticon-enterprise" />
                          Top Companies
                        </li>
                        <li>
                          <i className="flaticon-employee" />
                          International Job
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
