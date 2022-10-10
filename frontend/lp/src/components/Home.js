import React from "react";

//Components
import HeroImage from './HeroImage';
import Grid from "./Grid";
import Thumb from "./Thumb";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
// Hooks
import useHomeFetch from '../hooks/useHomeFetch'
//Image
import fallbackLP from '../images/fallback-LP.jpg'



const Home = () => {

    const {state, error, loading, searchTerm, setSearchTerm} = useHomeFetch();
    
    if (error.error) { 
        return <div> An Error occured: {error.errorMsg}</div>
    }


    return (
        <>
            <HeroImage />
            <SearchBar setSearchTerm={setSearchTerm} />
            {loading ? <Loader /> : 
            <Grid header= {searchTerm ? "Sökresultat" : 'Utvalda LPs' }>

                {state.result.length > 0 ? (state.result.map(lp => (
                    <Thumb
                        key={lp._id}
                        clickable
                        image={
                            lp.discog_info[0] === "no info" ? fallbackLP : lp.discog_info[0].cover_image
                        }
                        id = {lp._id}
                        titel = {lp.Titel}
                        artist = {lp.Artist}
                    />  
                )))
                    : <h2 style={{width: "600px"}}> Tyvärr kunde inget hittas med termen "{searchTerm}"  </h2>
                }
            </Grid>
            }
            
        </>
    )
}

export default Home