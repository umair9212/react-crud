import React, { useState } from "react";
import BaseUrl from "../Api/BaseUrl";
import { Link, useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const [formData, setData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const changeUserFieldHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...formData, [name]: value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = fetch(`${BaseUrl}/crud`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        console.log(response);
        if (response.ok) {
          alert("User Created");
          navigate("/view");
        }
      });
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div className="row justify-content-center align-items-center g-2 card">
      <Link to='/view' className="btn btn-success">View Data</Link>
        <form method="POST" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formData.name}
              onChange={changeUserFieldHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Enter Age
            </label>
            <input
              type="age"
              name="age"
              className="form-control"
              id="age"
              value={formData.age}
              onChange={changeUserFieldHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Enter Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeUserFieldHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
