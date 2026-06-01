import { useActionState } from "react";
import * as validation from "../util/validation";

 function signupAction(prevState, formData) {
    const {
      email,
      password,
      ["confirm-password"]: confirmPassword,
      ["first-name"]: firstName,
      ["last-name"]: lastName,
      role,
      terms
    } = Object.fromEntries(formData);
    const acquisitionMethods = formData.getAll("acquisition");

    const errors = [];
    if (!validation.isEmail(email)) {
      errors.push("Email invalid!");
    }

    if (!validation.isNotEmpty(password) && !validation.hasMinLength(password, 6)) {
      errors.push("Password needs to have at least 6 characters!`")
    }

    if (!validation.isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Passwords need to match!");
    }

    if (!validation.isNotEmpty(firstName) || !validation.isNotEmpty(lastName)) {
      errors.push("Please ensure that you have entered your name and surname!");
    }

    if (!role) {
      errors.push("Please select a role");
    }

    if (acquisitionMethods.length < 1) {
      errors.push("Please select an acquisition method!")
    }

    if (!terms) {
      errors.push("Please accept the terms and conditions!")
    }

    return errors.length ? {
      errors,
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      role,
      terms,
      acquisitionMethods
    } : {
      errors: [],
    }
  }

export default function Signup() {
  const [formState, dispatchAction] = useActionState(signupAction, { errors: [] });

  return (
    <form action={dispatchAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState?.email} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState?.password} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={formState?.firstName} />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" defaultValue={formState?.lastName}/>
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState?.acquisitionMethods?.includes("google")}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState?.acquisitionMethods?.includes("friend")}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState?.acquisitionMethods?.includes("other")}/>
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" defaultValue={formState?.terms}/>I
          agree to the terms and conditions
        </label>
      </div>

      {formState.errors &&
        <ul className="errors">
          {formState.errors.map((error, index) => {
            return <li key={index}>
              {error}
            </li>
          })}
        </ul>
      }

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
