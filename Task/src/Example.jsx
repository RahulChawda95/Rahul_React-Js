import React, { useState } from "react";
import "./Example.css";
import Validation from "./Validation";

function Example(props) {
  const [value, setvalue] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
    phone: "",
    address: "",
  });
  const [errors, setError] = useState({});
  function handleInput(event) {
    const newobj = { ...values, [event.target.name]: event.target.value };
    setvalue(newobj);
  }

  function handlevalidation(event) {
    event.preventdefault();
    setError(Validation(values));
  }
  return (
    <>
      <table border={"1"}>
        <tr>
          <th colspan="2">
            <h1>User Registration</h1>
          </th>
        </tr>
        <tr>
          <th colspan="2">
            Field Mark <span>*</span>
            Are Required
          </th>
        </tr>
        <tr>
          <td>
            <label for="email">
              Email: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="email"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.name && <p style={{ color: "red" }}>{error.email}</p>}
          </td>
        </tr>
        <tr>
          <td>
            <label for="password">
              Password: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </td>
        </tr>
        <tr>
          <td>
            <label for="password">
              Re-type Password: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </td>
        </tr>
        <tr>
          <td>
            <label for="fname">
              First Name: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.fname && <p style={{ color: "red" }}>{error.fname}</p>}
          </td>
        </tr>
        <tr>
          <td>
            <label for="l-name">
              Last Name: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.lname && <p style={{ color: "red" }}>{error.lname}</p>}
          </td>
        </tr>
        <tr>
          <td>
            <label for="phone">
              Phone Number: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
          </td>
        </tr>
        <tr>
          <td>
            <label for="address">
              Address: <span>*</span>
            </label>
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter Your Email Addres"
              onChange={handleinput}
            />
            {error.address && <p style={{ color: "red" }}>{error.address}</p>}
          </td>
        </tr>

        <tr>
          <td colSpan={"2"} align="center">
            <button onClick={handlevalidation()}>Submit</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Example;
