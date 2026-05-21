import { useEffect, useState } from "react";
export default function useFetch(fetchFn, initialValue) {
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({
                    message:
                        error.message || 'Could not fetch places, please try again later.',
                });
            }
            setIsFetching(false);
        }

        fetchPlaces();
    }, [fetchFn]);

    return { fetchedData, isFetching, error, setFetchedData };
}