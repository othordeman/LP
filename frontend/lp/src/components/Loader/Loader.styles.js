import styled from 'styled-components';

export const Loader = styled.div `

    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;


    @keyframes spin { // 0% and from is the same, could have been from and to instead of 0% and 100%
        0% {
            transform: rotate(0deg);
        } 100% {
            transform: rotate(360deg);
        }
    }
`