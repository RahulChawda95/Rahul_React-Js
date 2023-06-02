import { _omit } from "lodash";
import React, { useState } from "react";
// import { Omit } from "lodash";
const _ = require("lodash");

function UseForm(Callback) {
  //Form Values
  const [values, setvalues] = useState({});

  //Form Error
  const [errors, setErrors] = useState({});

  const Validate = (event, name, value) => {
    //A function toValidate Each Value

    switch (name) {
      case "username":
        if (value.length <= 4) {
          //We Will Set The Error
          setErrors({
            ...errors,
            username: "username atleast have 5 letters",
          });
        } else {
          //set the error state empty or remove the error for username input
          //omit function removes/omits the value from given object and returns a new object

          let newObj = _.omit(errors, "username");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter A Valid Email Address",
          });
        } else {
          let newObj = _.omit(errors, "email");
          setErrors(newObj);
        }

        break;
      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charters and containing uppercase, lowercase and number",
          });
        } else {
          let newObj = _.omit(errors, "password");
          setErrors(newObj);
        }

        break;

      default:
        break;
    }
  };
  //A Methodto handleform Input
  const handleChange = (event) => {
    //To Stop default events

    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    //Set Value In state

    Validate(event, name, val);
    setvalues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      Callback();
    } else {
      alert("There is No Error.....!");
    }
  };
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default UseForm;
