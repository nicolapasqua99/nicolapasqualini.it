import React from 'react'
import styled from 'styled-components'

const StyledTitleContainer = styled.div`
    background-color: var(--primary);
    font-family: var(--title-font);
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledTitle = styled.h1`
    color: var(--on-primary);
    font-family: var(--title-font);
    font-size: 8rem;
    line-height: 8rem;
    font-weight: 600;
`

const StyledSubTitle = styled.p`
    color: var(--on-primary);
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 2rem;
    font-weight: 500;
    width: 70%;
    text-align: center;
`

export default function Title() {
    return (
        <StyledTitleContainer>
            <StyledTitle>NICOLA PASQUALINI</StyledTitle>
            <StyledSubTitle>
                I&apos; work as a frontend developer at Arcoda srl, in Trento. I&apos;m passionate about learning new technologies and resolve complex problem. I also love 3d printing and hiking.
            </StyledSubTitle>
        </StyledTitleContainer>
    );
}
