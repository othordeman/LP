import styled from 'styled-components';


export const Wrapper = styled.div `
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0px 0px;

    h1 {
        margin: 3rem 0;
    }

    @media screen and (max-width: 1400px){
        padding: 4rem;

    }


`;

export const Content = styled.div `

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2.5rem;


`;

