import React from "react";
import { useParams } from 'react-router-dom'
import Loader from "./Loader";
import { useOneLpFetch } from "../hooks/useOneLpFetch";
import LpInfo from "./LpInfo";


const Lp = () => {

    const { id } = useParams()
    const {state, loading, error } = useOneLpFetch(id);
    

    if(loading) return <Loader />
    if(error.error) return <div> Something went wrong: {error.errorMsg} </div>

    return (
        <>
            <LpInfo lp={state}/> 
        </>
    )
}
export default Lp