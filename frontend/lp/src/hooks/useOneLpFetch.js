import {useEffect, useState} from "react";
import Api from "../API";


export const useOneLpFetch = id => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({error: false, errorMsg: ""});



    useEffect(() => {

        const fetchData = async() => {
            try {
                setError({error: false, errorMsg: ""});
                setLoading(true);

                const lp = await Api.fetchALp(id);
                setState(lp);
                setLoading(false);
                
            } catch (err) {
                setError({error: true, errorMsg: err})
            }
        }

        fetchData();

    },[id])


    return {state, loading, error}
}