import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
    const error = useRouteError();
    const errorData = JSON.parse(error.data);

    let title = "An error occured!";
    let message = "Something went wrong!";

    if (error.status === 500) message = errorData.message;
    if (error.status === 404) {
        title = "Not Found";
        message = "Page not found!";
    }

    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}