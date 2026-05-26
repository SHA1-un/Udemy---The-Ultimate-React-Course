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
  const { value: emailValue, setInput: setEmailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailError } = useInput("", validateEmail);
  const { value: passwordValue, setInput: setPasswordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordError } = useInput("", validatePassword);

  // Validation triggered on each component rerender
  // const validEmail = editedEmail ? emailValue.includes("@") : true;

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
          error={emailError && "Invalid Email. Please try again."}
          type="email"
          name="email"
          onChange={(event) => handleEmailChange(event.target.value)}
          onBlur={handleEmailBlur}
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
          error={passwordError && "Weak Password. Try choosing a better one!"}
          type="password"
          name="password"
          onChange={(event) => handlePasswordChange(event.target.value)}
          onBlur={handlePasswordBlur}
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

function validateEmail(value) {
  return value.includes("@");
}

function validatePassword(value) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return regex.test(value);
}