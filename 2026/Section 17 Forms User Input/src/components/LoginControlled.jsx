import { useState } from "react";

import Input from "./Input";

/**
 * Controlled Input Component 
 */
export default function LoginControlled() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const [hasEdit, setHasEdit] = useState({
    email: false,
    password: false
  });

  // Validation triggered on each component rerender
  const validEmail = hasEdit.email ? userInput.email.includes("@") : true;

  function handleInput(identifier, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: value
      }
    });
  }

  function handleInputBlur(identifier) {
    setHasEdit(prevHasEdit => {
      return {
        ...prevHasEdit,
        [identifier]: true
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userInput);

    setUserInput({
      email: "",
      password: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInput("email", event.target.value)}
            onBlur={() => handleInputBlur("email")}
            value={userInput.email}
          />
          <div className="control-error">{!validEmail && <p>Invalid Email. Please try again.</p>}</div>
        </div> */}
        <Input
          label={"Email"}
          id="email"
          error={!validEmail && "Invalid Email. Please try again."}
          type="email"
          name="email"
          onChange={(event) => handleInput("email", event.target.value)}
          onBlur={() => handleInputBlur("email")}
          value={userInput.email}
        />

        <Input
          label={"Password"}
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInput("password", event.target.value)}
          value={userInput.password}
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) => handleInput("password", event.target.value)}
            value={userInput.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}