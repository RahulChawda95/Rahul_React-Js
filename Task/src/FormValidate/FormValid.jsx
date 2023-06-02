import React from "react";
import UseForm from "./UseForm";

function FormValid(props) {
  //   console.log("Form Errors", errors);
  //Final Submit Function
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values", values);
  };
  //Call Custom Hook
  const { handleChange, values, errors, handleSubmit } = UseForm(formLogin);
  return (
    <>
      <div className="container">
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter E-Mail"
            onChange={handleChange}
          />
          {errors.email && <h3>{errors.email}</h3>}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            minLength={"8"}
            onChange={handleChange}
          />
          {errors.password && <h3>{errors.password}</h3>}

          <input
            type="text"
            name="username"
            placeholder="Enter UserName"
            minLength={"5"}
            onChange={handleChange}
          />
          {errors.username && <h3>{errors.username}</h3>}

          <input type="submit" value={"Submit"} className="submit" />
        </form>
      </div>
    </>
  );
}

export default FormValid;
