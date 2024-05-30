import React from "react";

const Testimonial = () => {
  return (
    <div>
      <>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-text">
                  <h2>Testimonials</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li>Testimonials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="companies-area companies-area-two pt-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div
                  className="companies-item wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <img src="/Images/avatar.webp" alt="Companies" />
                  <h3>
                    <a href="company-details.html">Ashok.P</a>
                  </h3>
                  <p>
                    I like the work culture and the the support from the seniors
                    lots of learning to update your skills.
                  </p>
                  {/* <a class="companies-btn"
                          href="create-account.html">Hiring</a> */}
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div
                  className="companies-item wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <img src="/Images/avatar.webp" alt="Companies" />
                  <h3>
                    <a href="company-details.html">Joseph.M</a>
                  </h3>
                  <p>
                    Its a leading company and their are many things to learn
                    more and got growth as per your working experience...
                  </p>
                  {/* <a class="companies-btn"
                          href="create-account.html">Hiring</a> */}
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div
                  className="companies-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="/Images/avatar.webp" alt="Companies" />
                  <h3>
                    <a href="company-details.html">Vivek.G</a>
                  </h3>
                  <p>
                    Job security is completely hopeless, suddenly HR force to
                    submit letter. even 2 month advanced information all so not
                    happen. it become a rude approach.
                  </p>
                  {/* <a class="companies-btn"
                          href="create-account.html">Hiring</a> */}
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div
                  className="companies-item wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <img src="/Images/avatar.webp" alt="Companies" />
                  <h3>
                    <a href="company-details.html">Ramesh.A</a>
                  </h3>
                  <p>
                    Salary on time is only key of this organisation what most of
                    the popel feel good 
                  </p>
                  {/* <a class="companies-btn"
                          href="create-account.html">Hiring</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Testimonial;
