import React, { useState} from "react";
import {Container, Wrapper, Content, Logo, Nav__List, MenuSwapper } from './Header.styles'
import { Link, NavLink } from "react-router-dom";
import { useOutsideClickAleart } from "../../hooks/useOutsideClickAleart";

/* 
    Header.
    When on smaller screens the user can toggle the navbar
    (menuswapper component)
    useRef handles click outside component.
    This makes sure that menu is closing when user
    clicks outside component
*/

const Header = () => {
    const {showMenu, setShowMenu, ref} = useOutsideClickAleart(false);



    const handleNavBar = () => (
        setShowMenu(prevValue => !prevValue)
    );

    return (
        <Container ref={ref}> 
            <Wrapper showMenu={showMenu}>
                <Content>
                    <Logo>
                        <Link to='/'>
                            Anderssons LP
                        </Link>
                    </Logo>
                    <Nav__List> 
                        <NavLink to='/' end className={({ isActive }) => (isActive ? "nav__link first__link link-active" : "nav__link first__link")}><i className="uil uil-estate nav__icon"> </i> Hem </NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? "nav__link second__link link-active" : "nav__link second__link")}><i className="uil uil-user nav__icon"> </i> Om  </NavLink>
                        <NavLink to='/contact'className={({ isActive }) => (isActive ? "nav__link third__link link-active" : "nav__link third__link")}><i className="uil uil-message nav__icon"></i> Kontakt </NavLink>
                        <NavLink to='/login'className={({ isActive }) => (isActive ? "nav__link fourth__link link-active" : "nav__link fourth__link")}><i className="uil uil-message nav__icon"></i> Logga In </NavLink> 
                    </Nav__List> 
                </Content>
            </Wrapper>
            <MenuSwapper onClick={handleNavBar} >
                {showMenu ? 
                    <i className="uil uil-times"></i>
                        :
                    <i className="uil uil-apps"></i>
                }
            </MenuSwapper>
        </Container>
    )
}

export default Header