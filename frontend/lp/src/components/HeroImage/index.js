import React from "react";
import { Wrapper, Content, Text } from './HeroImage.styles'


/* I imported the HeroImg directly in the style file */
 const HeroImage = () => {
    return (
        <Wrapper>
            <Content>
                <Text>
                    <h1> Välkommen till Anderssons Vinyl! </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.</p>                        
                </Text>
            </Content>
        </Wrapper>
    )
}

export default HeroImage