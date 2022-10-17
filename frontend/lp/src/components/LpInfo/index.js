import React from "react";


import {Wrapper, Content, Text} from './LpInfo.styles'



/* How to handle cover image and genre correctly? If none exists how does the program handles it? */


const LpInfo = ({lp}) => {

    let cover_image = lp.result[0].discog_info[0].cover_image;
    let genres = lp.result[0].discog_info[0].genre;
    

    return (
         
        <Wrapper backdrop={cover_image}>
            <Content backdrop={cover_image}>
            </Content>
            <Text>
                <h1> {lp.result[0].Artist} - {lp.result[0].Titel}  </h1>

                {genres ? (

                    <div className="genre">
                        Genre:
                        {genres.map((genre, index) => (
                            <span key={index}> { genre} </span>
                        ))}
                    </div>)
                : null}

                <p> Anmärkning: {lp.result[0].Anm}  </p>
                <p> Pris: {lp.result[0].Pris}:- </p>
            </Text>
        </Wrapper>
    )

}



export default LpInfo