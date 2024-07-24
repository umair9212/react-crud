import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../Api/BaseUrl";

function Update() {
  const { id } = useParams();
  const [formData, setData] = useState([]);
  const navigate= useNavigate();
  const fetchRecord = () => {
    const result = fetch(`${BaseUrl}/crud/${id}`, {
      method: "GET",
    }).then((response) => {
      response.json().then((result) => {
        setData(result);
      });
    });
  };
  useEffect(() => {
    fetchRecord();
  }, []);

  const changeUserFieldHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...formData, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(`${BaseUrl}/crud/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        alert("User Updated");
        navigate("/view");
      }
    });
  };
  return (
    <div className="row justify-content-center align-items-center g-2 card">
      <Link to="/view" className="btn btn-success">
        View Data
      </Link>
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
  );
}

export default Update;
