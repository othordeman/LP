import {useState, useEffect} from "react";
import API from "../API";


const initialState = {
    page: 0,
    result: [],
    total_pages: 1199,

};




/* Custom hook, calls the API for the 20 first lps  */
const useHomeFetch = () => {


    const [searchTerm, setSearchTerm] = useState("");

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({error: false, errorMsg: ""});
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    
    
    const fetchLps = async (page, searchTerm = "") => {

        try {

            setError({error: false, errorMsg: ""});
            setLoading(true);

            let lps;
            if(searchTerm !== "") {

                lps = await API.searchAllLps(searchTerm);

            } else {
                lps = await API.fetchAllLps(page);
            }


            setState(prev => ({
                total_pages: prev.total_pages,
                page: page,
                result:
                 [...lps.result] 
            }))

        } catch (err) {
            setError({
                error: true, 
                errorMsg: err
            })
        }
        setLoading(false)
    }

    useEffect(() => {
        if(!isLoadingMore) return

        fetchLps(state.page + 20, searchTerm)
        setIsLoadingMore(false)

    }, [isLoadingMore, searchTerm, state.page])



    // triggers only on mount and search
    useEffect(() => {
        setState(initialState);

        fetchLps(20, searchTerm);
    }, [searchTerm])


    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }
};


export default useHomeFetch
