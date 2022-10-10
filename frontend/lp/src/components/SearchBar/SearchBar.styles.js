import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: black;
    padding: 0 20px;

/* max-width: 1280px;
    margin: 0 auto; 
        --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    
    
    */

`;

export const Content = styled.div`
    position: relative;
    max-width: 1280px;
    width: 100%;
    height: 55px;
    margin: 0 auto;
    background-color: #353535;
    border-radius: 40px;
    color: white;


    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        font-size: 20px;
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: white;

        :focus{
            outline: none;
        }
    }

`;

