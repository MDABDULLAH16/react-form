import React, { useState } from "react";

const ControlledForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("btn clicked");
  };
  const handleNameOnChange = (e) => {
    setName(e.target.value);
    if (name.length < 6) {
      setError("Name must be less then 6 letter");
    } else {
      setError("");
    }
  };
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };
  console.log(name, email);

  return (
    <div>
      <h2>Controlled React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameOnChange}
          defaultValue={name}
          type="text"
          placeholder="Your name"
          name="name"
        />
        <br />
        <input
          type="email"
          defaultValue={email}
          onChange={handleEmailOnChange}
          name="email"
          placeholder="Your Email"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledForm;
