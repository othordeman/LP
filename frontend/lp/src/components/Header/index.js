import React from "react";
import {Container, Wrapper, Content, Logo, NavList, MenuSwapper } from './Header.styles'
import {  NavLink } from "react-router-dom";
import { useOutsideClickAleart } from "../../hooks/useOutsideClickAleart";
import { Icon } from '@iconify/react';


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
                        {/* <NavLink to='/'>
                            mb go without a logo? 
                        </NavLink> */}
                    </Logo>
                    <NavList> 
                        <NavLink to='/' end className={({ isActive }) => (isActive ? "nav__link first__link link-active" : "nav__link first__link")}><Icon className="nav__icon" icon="uil:estate"/> Hem </NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? "nav__link second__link link-active" : "nav__link second__link")}><Icon className="nav__icon" icon="uil:user"/> Om  </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? "nav__link third__link link-active"  : "nav__link third__link")}><Icon className="nav__icon" icon="uil:message"/> Kontakt </NavLink>
                        <NavLink to='/login'className={({ isActive }) => (isActive ? "nav__link fourth__link link-active" : "nav__link fourth__link")}><Icon className="nav__icon" icon="uil:message"/> Logga In </NavLink> 
                    </NavList> 
                </Content>
            </Wrapper>
            <MenuSwapper onClick={handleNavBar} >
                {showMenu ? 
                    <Icon className="close" icon="uil:times" />
                        :
                    <Icon className="open" icon="uil:apps" />
                }
            </MenuSwapper>
        </Container>
    )
}

export default Header