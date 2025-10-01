import React, { useState } from "react";

const SimpleForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: e.target.name.value, email: e.target.email.value });
  };
  console.log({ form });
  return (
    <div>
      <h2>Simple React Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" name="name" />
        <br />
        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
