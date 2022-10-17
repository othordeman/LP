
import styled from 'styled-components';
import lp1 from '../../images/lp1.jpg'

export const Wrapper = styled.div`
    background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 49%,
            rgba(0, 0, 0, 0) 100%
        ),
        url(${lp1}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 700px;
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
`;

export const Content = styled.div`

    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 80px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);
    z-index: 1;
    

    h1 {
        margin-bottom: 1rem;
    }

`;

