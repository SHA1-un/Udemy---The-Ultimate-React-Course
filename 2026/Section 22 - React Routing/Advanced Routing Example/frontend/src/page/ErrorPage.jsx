import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
    const error = useRouteError();
    const errorData = error.data; 

    const title = "An error occured!";
    const message = errorData.message || "Something went wrong!";

    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}