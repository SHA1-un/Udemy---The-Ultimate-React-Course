import { useState } from "react";

/**
 * Controlled Input Component 
 */
export default function LoginControlled() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const validEmail = userInput.email !== "" ? userInput.email.includes("@") && userInput.email.includes(".") : true;

  function setInput(key, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [key]: value
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => setInput("email", event.target.value)} value={userInput.email} />
          <div className="control-error">{!validEmail && <p>Invalid Email. Please try again.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => setInput("password", event.target.value)} value={userInput.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
