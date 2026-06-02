import { useActionState, useContext } from "react";
import { hasMinLength, isNotEmpty } from "../util/validation";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  async function submitAction(previousState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    // validation
    const errors = [];
    if (!isNotEmpty(userName) || !hasMinLength(userName, 3)) {
      errors.push("Your name cannot have less than 3 characters");
    }

    if (!isNotEmpty(title)) {
      errors.push("The title cannot be empty")
    }

    if (!isNotEmpty(body)) {
      errors.push("The body cannot be empty")
    }

    if (errors.length) {
      return {
        errors,
        userName,
        title,
        body,
      }
    }

    const newOpinion = {
      userName,
      title,
      body
    };
 
    // Post to backend
    try {
      await addOpinion(newOpinion);
    } catch (error) {
      // error message
    }

    // return clear form state after post - still need to handle post failure. would likely need to set default values of from to previous values. 
    return { errors: [] }
  }

  const [formState, submitDispatchAction] = useActionState(submitAction, {
    errors: [],
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={submitDispatchAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState?.body}></textarea>
        </p>

        {formState.errors &&
          <ul className="errors">
            {formState.errors.map((error, index) => {
              return <li key={index}>
                {error}
              </li>
            })}
          </ul>
        }

        <Submit/>
      </form>
    </div>
  );
}
