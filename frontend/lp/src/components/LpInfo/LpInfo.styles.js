import styled from 'styled-components'
import fallbackLP from '../../images/fallback-LP.jpg'


export const Wrapper = styled.div`
    background-image: ${({ backdrop }) => backdrop ? `url(${backdrop})` : `url(${fallbackLP})`};
    background-size: cover;
    background-position: center;
    max-width: 1280px;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;  
    margin-top: 100px;
    height: 85vh;
`;


export const Content = styled.div`
    background-image: ${({ backdrop }) => backdrop ? `url(${backdrop})` : `url(${fallbackLP})`};
    background-size: cover;
    background-position: center;
    background: rbga (0,0,0,0.7);
    border-radius: 20px 0 0 20px;
    width: 80%;

    animation: animateLpInfo 1s;
    @keyframes animateLpInfo {
        from {
            opacity: 0;
        }
        
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 768px ){
        display: none;
    }
`;

export const Text = styled.div `
    padding: 20px 40px;
    border-radius: 0 20px 20px 0;
    width: 110%;
    color: white;
    background-color: black;
    opacity: .90;
    
    h1 {
        padding-bottom: 2rem;
    }

    p {
        padding-bottom: 2rem;
    }

    .genre {
        padding: 2rem 0rem;
    }

    


`;