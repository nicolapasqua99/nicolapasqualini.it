import React from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'
import { parallaxColorNavbar, parallaxColorNavbarUnderline } from './configs/parallaxData'
import { primary, secondary, tertiary } from './configs/colors'
import { ColorProp } from './models/styled.props.models'

const StyledNav = styled.nav`
    position: fixed;
    z-index: 10;
    top: 4vh;
    right: 2vw;
    display: block;
`

const NavList = styled.ul``

const StyledNavItem = styled.li`
    position: relative;
    float: right;
    width: auto;
    height: 4rem;
    cursor: pointer;
    margin: 0rem 0rem 0rem 2rem;
    padding: 0 2rem 0 2rem;
    font-size: 2.3rem;
    & a {
        text-decoration: none;
        color: inherit;
        font-weight: 800;
    }
    & a + div {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0%;
        height: 0.3rem;
        border-radius: 0.25rem;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    &:hover a ~ div {
        left: 0%;
        width: 100%;
    }
    & a ~ div span {
        position: absolute;
        top: 0;
        left: 0%;
        width: 100%;
        height: 100%;
    }
    & a:hover ~ div {
        left: 0%;
        width: 100%;
    }
`

class Navbar extends React.Component {
    state: ColorProp

    constructor(props: any) {
        super(props)
        this.state = {
            primary: primary,
            secondary: secondary,
            tertiary: tertiary
        }
    }

    render() {
        return (
            <StyledNav>
                <Plx parallaxData={parallaxColorNavbar}>
                    <NavList>
                        <StyledNavItem>
                            <a href="#CONTACT">CONTACT</a>
                            <Plx parallaxData={parallaxColorNavbarUnderline}>
                                <span />
                            </Plx>
                        </StyledNavItem>
                        <StyledNavItem>
                            <a href="#PROJECTS">PROJECTS</a>
                            <Plx parallaxData={parallaxColorNavbarUnderline}>
                                <span />
                            </Plx>
                        </StyledNavItem>
                        <StyledNavItem>
                            <a href="#SKILLS">SKILLS</a>
                            <Plx parallaxData={parallaxColorNavbarUnderline}>
                                <span />
                            </Plx>
                        </StyledNavItem>
                        <StyledNavItem>
                            <a href="#BIO">BIO</a>
                            <Plx parallaxData={parallaxColorNavbarUnderline}>
                                <span />
                            </Plx>
                        </StyledNavItem>
                        <StyledNavItem>
                            <a href="#HOME">HOME</a>
                            <Plx parallaxData={parallaxColorNavbarUnderline}>
                                <span />
                            </Plx>
                        </StyledNavItem>
                    </NavList>
                </Plx>
            </StyledNav>
        )
    }
}

export default Navbar
