import styled from 'styled-components';

export const Container = styled.div`
    height: 300px;
    width: 240px;
    max-height: 300px;
    max-width: 240px;
    border-radius: 20px;
    background-color: transparent;
    perspective: 1000px; 


`;

export const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    :hover{
        transform: rotateY(180deg);

    }
`;

export const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: whitesmoke; //#F3ECE7;
    color: black;
    border-radius: 20px;

    p{
        font-size: .9rem;
    }


`;

export const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 20px;

    background-color: var(--hue-color);
    color: whitesmoke;
    transform: rotateY(180deg);

    div{
        margin-top: 6rem;
    }
    p{
        margin: 2rem .5rem 0 .5rem;
    }
`;


export const Image = styled.img`
    width: 100%;
    padding: 8px;
    height: 80%;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

@keyframes animateThumb {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}
`;
