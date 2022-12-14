import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: antiquewhite;
    min-width: 100px;
    height: 60px;
    border-radius: 6px;
    color: black;
    border: 0;
    font-size: 1.2rem;
    margin: 10px auto;
    padding: 10px;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    border: 2px solid black;


    :hover{
        color: antiquewhite;
        background-color: black;
        border: 2px solid antiquewhite;
    }

    @media screen and (max-width: 600px){
        font-size: .9rem;
    }

`; 