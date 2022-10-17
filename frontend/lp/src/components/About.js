import React from "react";
import lp4 from '../images/lp4.jpg'
import styled from "styled-components";




export const Wrapper = styled.div `


background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 49%,
            rgba(0, 0, 0, 0) 100%
        ),
        url(${lp4}), var(--darkGrey);
    //background-size: 100%, cover; // Kolla med my om hon gillar de bäst med eller utan dennna 
    height: 750px;
    position: relative;
    animation: animateHeroimage 1s;

    @keyframes animateHeroimage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


    @media screen and (max-width: 768px) {
        background: unset;

    }


`;




export const Text = styled.div `

    padding: 60px 10rem;
    max-width: 700px;
    color: #010203;

    h1 {
        padding-bottom: 2rem;
    }


    @media screen and (max-width: 768px) {
        padding: 10px 2rem;
        color: #E1D9D1;


    }




`;





const About = () => {

    return (
        <Wrapper >
                <Text>

                    <h1> Om </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.</p>         


                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. .</p>          

                </Text>
        </Wrapper>
    )


}
   
export default About