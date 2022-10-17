import styled from 'styled-components';

export const Container = styled.div`
`

export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    min-height: 60px;

    @media screen and (max-width: 767px) {
        position: fixed;

        top: unset;
        bottom: ${props => props.showMenu ? "0" : "-100%"};
        transition: .8s ease-in-out;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;  
    justify-content: space-between;
    padding: 20px;

    @media screen and (max-width: 767px) {
        display: grid;
        grid-template-areas: 
        "a a"
        "b b";
        background-color: antiquewhite;
        z-index: var(--z-modal);
    }
`

/* Ta bort a sen när det är bytt till riktig logga */
export const Logo = styled.div`

    a {
        text-decoration: none;
        font-size: 2.8rem;
        color: black;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`


export const NavList = styled.div`


    align-self: center;

    .nav__link {
        font-size: var(--h2-font-size);
        margin: 20px;
        text-decoration: none;
        color: white;
        border-bottom: 4px solid transparent;

    }

    .nav__link:hover,
    .link-active {
        border-bottom: 4px solid white;
    }

    

    .nav__icon{
        display: none;
    }



    @media screen and (max-width: 767px) {

        grid-area: b;
        display: grid;
        gap: 2rem;
        grid-template-areas: 
            "c d"
            "e f";
        justify-content: space-evenly;


        .nav__link{
            margin: 20px;
            color: black;
        }

        .nav__link:hover,
        .link-active {
            border-bottom: 4px solid black;
        }


        .nav__link.first__link{
            grid-area: c;
        }

        .nav__link.second__link {
            grid-area: d;
        }

        .nav__link.third__link {
            grid-area: e;
        }

        .nav__link.fourth__link {
            grid-area: f;
    
        }

        .nav__icon{
            display: inline-block;
            justify-self: center;
        }
    }


    @media screen and (max-width: 350px) {

        .nav__link{
            margin: 20px;
            font-size: 1rem;
        }


    }   

`

export const MenuSwapper = styled.div`

    display: none;



    @media screen and (max-width: 767px) {
        display: unset;
        position: fixed;
        bottom: 5px;
        right: 5px;
        z-index: 1000;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s;
    }


    .close {
        color: black;
    }

    .open {
        color: #FAEBD7;
    }
`









