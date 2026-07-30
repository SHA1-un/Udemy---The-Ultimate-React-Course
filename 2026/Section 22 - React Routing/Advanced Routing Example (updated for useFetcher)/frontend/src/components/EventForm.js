import { Form, useActionData, useNavigate, useNavigation, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

export default function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  // Build validation error array 
  let errors = [];
  if (data) errors = Object.values(data.errors).map(error => {
    return <li>
      {error}
    </li>
  });

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {errors.length && <div>
        <p>{data.message}</p>
        <ul>
          {errors}
        </ul>
      </div>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSubmitting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const formData = await request.formData();
  const eventData = {
    title: formData.get("title"),
    date: formData.get("date"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  console.log("request")
  console.log(request)


  // Change url for patch requests to also send through teh event id for edits
  let url = 'http://localhost:8081/events';
  if (method === "PATCH") url += `/${params.id}`;

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
    });

  // Intercept validation error and return response so that it can be gracefully handled.
  if (response.status === 422) return response;
  if (!response.ok) throw new Response(JSON.stringify({ message: "Could not save event." }), { status: 500 });

  return redirect("/events");
}