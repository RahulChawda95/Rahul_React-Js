import React from "react";

function Validation(props) {
  const error = {};
  const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const password_pattern = /^[A-Za-z]\w{7,14}$/;
  const phone_pattern = /^[0-9]$/;
  if (values.name === "") {
    error.name = "Name Is Required....!";
  }

  if (vales.email === " ") {
    error.email = "Email Is Required...!";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  }

  if (values.password === "") {
    error.password = "Password Requird...!";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password is Didn't match";
  }

  if (values.phone === "") {
    error.phone = "Phone Requird...!";
  } else if (!phone_pattern.test(values.phone)) {
    error.phone = "Phone is Didn't match";
  }

  return error;
}
export default Validation;
