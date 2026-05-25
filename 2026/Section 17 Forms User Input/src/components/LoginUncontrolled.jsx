import { useRef, useState } from "react";

/**
 * Uncontrolled Input Component
 */
export default function LoginUncontrolled() {
  const email = useRef("");
  const password = useRef("");

  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const validateEmail = email.current.value.includes("@");
    if (!validateEmail) {
      setIsValidEmail(false);
      return;
    }
    console.log(`email: ${email.current.value}, password: ${password.current.value}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
        </div>
        <div className="control-error">{!isValidEmail && <p>Invalid Email. Please try again.</p>}</div>


        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
