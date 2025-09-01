import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import { PatternFormat } from "react-number-format";
import { Link } from "react-router-dom";

const Form1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_veszfvb", "template_lfao57e", form.current, {
        publicKey: "iq_wQqMzppIPWuhj2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="title">Revolution Financial Management</p>
      <form
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="lead"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          className="lead"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <input
          className="lead"
          name="email"
          placeholder="Email"
          required
        />
        <PatternFormat
          format="(###) ###-####"
          className="lead"
          name="phone"
          type="tel"
          placeholder="Mobile Phone"
          required
        />
        <input className="send" type="submit" value="Submit" />
        <p className="p">
          By submitting the form, you agree to receive calls, text messages, or
          emails from Revolution Finacial Management at the contact information
          provided. Message rates may apply. Text STOP to cancel text messaging
          at any time. See{" "}
          <span>
            <Link
              to="https://www.transamerica.com/terms-of-use"
              target="_blank"
              style={{ color: "#3770BA", textDecoration: "underline" }}
            >
              Terms of Service
            </Link>{" "}
          </span>
          and{" "}
          <span>
            <Link
              to={"/privacy-policy"}
              target="_blank"
              style={{ color: "#3770BA", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
          </span>{" "}
          for additional details.
        </p>
      </form>
    </div>
  );
};

export default Form1;
