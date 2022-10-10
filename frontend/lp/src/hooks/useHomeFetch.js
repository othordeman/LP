import {useState, useEffect} from "react";
import API from "../API";


    const initialState = {
        result: []
    }




/* Custom hook, calls the API for the 20 first lps  */
const useHomeFetch = () => {


    const [searchTerm, setSearchTerm] = useState('');

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({error: false, errorMsg: ""});


    
    const fetchLps = async (searchTerm) => {

        try {
            setError({error: false, errorMsg: ""});
            setLoading(true);
            let lps;
            
            if(searchTerm !== "") {

                lps = await API.searchAllLps(searchTerm);

            } else {
                lps = await API.fetchAllLps();
            }

            setState(lps);

        } catch (err) {
            console.log(err)
            setError({
                error: true, 
                errorMsg: err
            })
        }
        setLoading(false)
    }

    // triggers only on mount and search
    useEffect(() => {
        setState(initialState);

        fetchLps(searchTerm);
    }, [searchTerm])


    return {state, loading, error, searchTerm, setSearchTerm }
};


export default useHomeFetch
