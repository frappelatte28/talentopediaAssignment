import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "./contactUs.css";
import sampleImage from "../../images/sampleImage.jpg";
// import { Button } from "../button";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    axios({
      method: "POST",
      url: "https://localhost:7000/sendEmail",
      data: this.state,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data);
        else if (err.request) console.log(err.request);
        else console.log("Error", err.message);
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <>
        <Row className="no-gutters">
          <div className="contact-us-section">
            <img className="contactSectionImage" src={sampleImage}></img>
          </div>
        </Row>
        <div className="section p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2 className="title">Contact Us</h2>
                  <p>
                    Let us know what you think! In order to provide better
                    service, please do not hesitate to give us your feedback.
                    Thank you.
                  </p>
                  <hr />
                  <form
                    id="contact-form"
                    onSubmit={this.submitEmail.bind(this)}
                    method="POST"
                  >
                    <div className="form-group ">
                      <Row>
                        <div className="col-md-6 p-2 ">
                          <input
                            placeholder="Name"
                            id="name"
                            type="text"
                            className="form-control"
                            required
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                          />
                        </div>
                      </Row>
                      <Row className="col-md-6 p-2 ">
                        <input
                          placeholder="Email"
                          id="email"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          required
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                        />
                      </Row>
                    </div>
                    <Row className="form-group">
                      <textarea
                        placeholder="Message"
                        id="message"
                        className="form-control"
                        rows="3"
                        required
                        value={this.state.message}
                        onChange={this.onMsgChange.bind(this)}
                      />
                    </Row>
                    <button className="submitBtn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="footer">
          <Col className="aboutSection p-3 m-2">About Company</Col>
          <Col>
            <div>
              <div className="social_icons">
                <div>
                  <FaFacebookSquare color="white" size="2em" />
                </div>
                <div>
                  <FaLinkedin size="2em" color="white" />
                </div>
                <div>
                  <FaTwitterSquare size="2em" color="white" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default ContactForm;
