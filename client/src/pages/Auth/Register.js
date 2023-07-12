import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";

export const Register = () => {
  const [detail, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  function handleChanges(event) {
    // console.log(event.target.value);
    const changeElement = event.target.name;
    const newValue = event.target.value;
    setDetails({ ...detail, [changeElement]: newValue });
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(event.target);
  }
  return (
    <Layout>
      <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              onChange={handleChanges}
              type="text"
              className="form-control"
              id="exampleInputName"
              value={detail.name}
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              onChange={handleChanges}
              type="email"
              className="form-control"
              id="exampleInputEmail"
              value={detail.email}
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handleChanges}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={detail.password}
              name="password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              onChange={handleChanges}
              type="text"
              className="form-control"
              id="exampleInputPhone"
              value={detail.phone}
              name="phone"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={handleChanges}
              type="text"
              className="form-control"
              id="exampleInputAddress"
              value={detail.address}
              name="address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
