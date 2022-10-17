import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import Loader from "./Loader";
import { useOneLpFetch } from "../hooks/useOneLpFetch";
import LpInfo from "./LpInfo";
import IconBtn from "./IconBtn";


const Lp = () => {

    const { id } = useParams()
    const {state, loading, error } = useOneLpFetch(id);
    const navigate = useNavigate();

    if(error.error) return <div> Something went wrong: {error.errorMsg} </div>

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>  
            <IconBtn 
                wrapperStyle={"red"}
                callback={goBack}
                iconStyle={"left"}
                iconName={"bi:arrow-left-short"}
            />
            {!loading ? 
            (
                <LpInfo lp={state}/> 
            ) : 
            null
            }
        </>
    )
}
export default Lp