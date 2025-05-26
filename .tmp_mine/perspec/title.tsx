import React from 'react'
import styled from 'styled-components'
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
        height: 80% !important;
        width: auto;
    }
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background-color: var(--primary);
        border-top-right-radius: 20%;
        border-top-left-radius: 20%;
        border-bottom-right-radius: 20%;
        border-bottom-left-radius: 20%;
    }
`

const StyledTitle = styled.h1`
    height: 8rem;
    font-size: 8rem;
    line-height: 8rem;
    color: var(--tertiary);
    font-weight: 600;
`

const StyledSubTitle = styled.p`
    width: 50vw;
    height: 4rem;
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 4rem;
    cursor: default;
    color: var(--tertiary);
    text-align: center;
    font-weight: 500;
`

class Title extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <>
                <StyledTitle>NICOLA PASQUALINI</StyledTitle>
                <StyledSubTitle>I&apos; work as a frontend developer at Arcoda srl, in Trento. I&apos;m passionate about learning new technologies and resolve complex problem. I also love 3d printing and hiking.</StyledSubTitle>
            </>
        )
    }
}

export default Title
