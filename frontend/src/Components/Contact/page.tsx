import React from "react";

const Contact = () => {
  return (
    <div>
      <>
        <div className="page-title-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-title-text">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-area pt-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                <div className="">
                  <div className="single-profile-item">
                    <div className="single-profile-left">
                      <div className="single-profile-contact">
                        <h3>Contact Info</h3>
                        <ul>
                          <li>
                            <i className="icofont-ui-call" />
                            <a href="tel:+07554332322">
                              Call : +91 99003 59747
                            </a>
                          </li>
                          <li>
                            <i className="icofont-email" />
                            <a href="mailto:rishigroubs@gmail.com">
                              rishigroubs@gmail.com
                            </a>
                          </li>
                          <li>
                            <i className="icofont-location-pin" />
                            Rishi technologies 848, Kamaraj Nagar 7 th street,
                            Palakkarai, Kumbakonam.
                          </li>
                        </ul>
                      </div>
                      {/*<div class="single-profile-social">*/}
                      {/*    <h3>Social Links</h3>*/}
                      {/*    <ul>*/}
                      {/*        <li>*/}
                      {/*            <i class="icofont-facebook"></i>*/}
                      {/*            <a href="https://www.facebook.com/" target="_blank">https://www.facebook.com</a>*/}
                      {/*        </li>*/}
                      {/*        <li>*/}
                      {/*            <i class="icofont-instagram"></i>*/}
                      {/*            <a href="https://www.instagram.com/"*/}
                      {/*                target="_blank">https://www.instagram.com</a>*/}
                      {/*        </li>*/}
                      {/*        <li>*/}
                      {/*            <i class="icofont-linkedin"></i>*/}
                      {/*            <a href="https://www.linkedin.com/" target="_blank">https://www.linkedin.com</a>*/}
                      {/*        </li>*/}
                      {/*        <li>*/}
                      {/*            <i class="icofont-twitter"></i>*/}
                      {/*            <a href="https://www.twitter.com/" target="_blank">https://www.twitter.com</a>*/}
                      {/*        </li>*/}
                      {/*    </ul>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="enquiry single-profile-left">
                  <h3>Enquiry Now</h3>
                  <form id="contactForm">
                    <div className="row contact-wrap">
                      <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            data-error="Please enter your name"
                            placeholder="Your Full Name"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            data-error="Please enter your email"
                            placeholder="Your Email"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            data-error="Please enter your number"
                            className="form-control"
                            placeholder="Your Phone"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            className="form-control"
                            data-error="Please enter your subject"
                            placeholder="Subject"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols={7}
                            rows={5}
                            data-error="Write your message"
                            placeholder="Job Description"
                            defaultValue={""}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="text-center">
                          <button type="submit" className="btn contact-btn">
                            Submit
                          </button>
                        </div>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-area pb-100">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1587549815840!5m2!1sen!2sbd" />
        </div>
      </>
    </div>
  );
};

export default Contact;
