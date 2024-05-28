import React from 'react'
import styled from 'styled-components'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import { ColorProp } from '../(utils)/(models)/styled.props.models'
import Image from 'next/image'

const StyledTitleImgContainer = styled.div`
    position: absolute;
    bottom: 10vh;
    left: 0;
    height: 50vh;
    width: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        position: absolute;
        height: 80%;
    }
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background-color: ${props => props.color || 'white'};
        border-top-right-radius: 20%;
        border-top-left-radius: 20%;
        border-bottom-right-radius: 20%;
        border-bottom-left-radius: 20%;
    }
    }
`

const StyledTitle = styled.h1`
    height: 8rem;
    font-size: 8rem;
    line-height: 8rem;
    color: ${props => props.color || 'white'};
    font-weight: 600;
`

const StyledSubTitle = styled.p`
    width: 50vw;
    height: 4rem;
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 4rem;
    cursor: default;
    color: ${props => props.color || 'white'};
    text-align: center;
    font-weight: 500;
`

class Title extends React.Component {
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
            <>
                <StyledTitleImgContainer color={this.state.tertiary}>
                    <Image src="../img/newportfolio/photocolorsoldnew.svg" alt="Me" />
                </StyledTitleImgContainer>
                <StyledTitle color={this.state.tertiary}>NICOLA PASQUALINI</StyledTitle>
                <StyledSubTitle color={this.state.tertiary}>I&apos; work as a frontend developer at Arcoda srl, in Trento. I&apos;m passionate about learning new technologies and resolve complex problem. I also love 3d printing and hiking.</StyledSubTitle>
            </>
        )
    }
}

export default Title
