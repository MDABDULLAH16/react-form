import React, { useRef } from "react";

const UncontrolledField = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log(name, email);
  };
  return (
    <div>
      <h2>Uncontrolled Field using useRef in React</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Your name" name="name" />
        <br />
        <input
          ref={emailRef}
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

export default UncontrolledField;
