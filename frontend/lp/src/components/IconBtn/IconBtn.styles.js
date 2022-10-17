import styled from "styled-components";



export const Wrapper = styled.div`
    z-index: 10000;
    position: fixed;
    top: 50px;
    left: 20px;



    .iconBtn {
        display:block;
        background-color: antiquewhite;
        color: black;
        width: 40px;
        height: 40px;

        cursor: pointer;
        border: 2px solid black;
        border-radius: 20px;

        @media screen and (max-width: 767px){
            font-size: 2rem;

        }

    }

    
    .iconBtn:hover {
        background-color: #231B1D;
        color: antiquewhite;
        border: 2px solid antiquewhite;
    }

` 