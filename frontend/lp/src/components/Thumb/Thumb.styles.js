import styled from 'styled-components';


export const Container = styled.div`
    height: 300px;
    width: 240px;
    max-height: 300px;
    max-width: 240px;
    border-radius: 20px;

    background-color: #F3ECE7;
    text-decoration: none;

`;


export const Image = styled.img`
    width: 100%;
    padding: 8px;
    height: 80%;

    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.8s;
    }


@keyframes animateThumb {

    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
    
}

`;




export const Text = styled.div`
    text-decoration: none;
    margin-left: 1rem;
    color: black;

    .Link{
        text-decoration: none;

    }

    p{
        font-size: .9rem;
        text-decoration: none;
        border-bottom: none;

    }

`;

