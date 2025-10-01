import React from "react";
import useInputField from "../hooks/formHooks";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <div>
      <h2>React Hooks Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={nameOnChange}
          defaultValue={name}
          type="text"
          placeholder="Your name"
          name="name"
        />
        <br />
        <input
          onChange={emailOnChange}
          defaultValue={email}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
