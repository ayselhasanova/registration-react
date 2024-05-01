import React, { useState } from "react";
import "./register.css";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = {};

    if (!formData.email.endsWith(".ru")) {
      error.email = "Yalnız .ru domenlərinə icazə verilir";
    }

    if (formData.password.length < 8) {
      error.password = "Ən azı 8 simvol";
    }

    if (Object.keys(error).length === 0) {
      alert("Form müvəffəqiyyətlə göndərildi");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        password: "",
      });
      setErrors({});
    } else {
      setErrors(error);
    }
  };

  return (
    <>
      <section>
        <div className="reg-container">
          <h1>ASOIU Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <p>Name:</p>
              <input
                className="transparent"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="lastname">
              <p>Lastname:</p>
              <input
                className="transparent"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <p>Email:</p>
              <input
                className="transparent"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="password">
              <p>Password:</p>
              <input
                className="transparent"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="submit-btn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
