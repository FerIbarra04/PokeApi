// useFetchedInfo.ts
import { useEffect, useState } from "react";

const usePokeinfo = (url: string) => {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (response.status !== 200) {
                    throw new Error("Error en la petición");
                }
                const data = await response.json();
                setInfo(data);
            } catch (error) {
                setError(error as any);
            } finally {
                setLoading(false);
            }
        };
        fetchInfo();
    }, [url]);

    return { info, loading, error };
};

export default usePokeinfo;
