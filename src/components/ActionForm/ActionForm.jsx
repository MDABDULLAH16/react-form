import React, { useState } from "react";

const ActionForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleFromData = (formData) => {
    setForm({ name: formData.get("name"), email: formData.get("email") });
  };
  console.log("collect data from action form", form);

  return (
    <div>
      <h2>Action React From</h2>
      <form action={handleFromData}>
        <input type="text" name="name" placeholder="Name" id="" required />{" "}
        <br />
        <input type="email" name="email" placeholder="Email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ActionForm;
