import Input from "./Input";
import useInput from "../hooks/useInput";
/**
 * Controlled Input Component 
 */
export default function LoginControlled() {
  // NOTE: Moved and abstracted to useInput 
  // const [userInput, setUserInput] = useState({
  //   email: "",
  //   password: ""
  // });

  // const [hasEdit, setHasEdit] = useState({
  //   email: false,
  //   password: false
  // });
  const { value: emailValue, setInput: setEmailValue, edited: editedEmail, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur } = useInput("");
  const { value: passwordValue, setInput: setPasswordValue, edited: editedPassword, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur } = useInput("");

  // Validation triggered on each component rerender
  const validEmail = editedEmail ? emailValue.includes("@") : true;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const strongPassword = editedPassword ? regex.test(passwordValue) : true;

  // NOTE: Moved and abstracted to useInput 
  // function handleInput(identifier, value) {
  //   setUserInput(prevUserInput => {
  //     return {
  //       ...prevUserInput,
  //       [identifier]: value
  //     }
  //   });
  // }

  // function handleInputBlur(identifier) {
  //   setHasEdit(prevHasEdit => {
  //     return {
  //       ...prevHasEdit,
  //       [identifier]: true
  //     }
  //   });
  // }

  function handleSubmit(event) {
    event.preventDefault();

    setEmailValue("");
    setPasswordValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label={"Email"}
          id="email"
          error={!validEmail && "Invalid Email. Please try again."}
          type="email"
          name="email"
          onChange={(event) => handleEmailChange("email", event.target.value)}
          onBlur={() => handleEmailBlur("email")}
          value={emailValue}
        />
        {/* Replaced with the above with a reusable input component */}
        {/* <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={(event) => handleInput("email", event.target.value)}
              onBlur={() => handleInputBlur("email")}
              value={emailValue}
            />
            <div className="control-error">{!validEmail && <p>Invalid Email. Please try again.</p>}</div>
          </div> */}

        <Input
          label={"Password"}
          id="password"
          error={!strongPassword && "Weak Password. Try choosing a better one!"}
          type="password"
          name="password"
          onBlur={() => handlePasswordChange("password")}
          onChange={(event) => handlePasswordBlur("password", event.target.value)}
          value={passwordValue}
        />
        {/* Replaced with the above with a reusable input component */}
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) => handleInput("password", event.target.value)}
            value={passwordValue}
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