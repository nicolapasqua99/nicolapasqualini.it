import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

const StyledExperiencesContainer = styled.div`
    background-color: var(--secondary);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & div {
        margin-top: 2rem;
    }
    & svg {
        & circle {
            fill: var(--on-secondary);
        }
        & path {
            fill: var(--on-secondary);
            &.line {
                fill: var(--on-secondary);
            }
        }
        & rect {
            fill: var(--on-secondary);
        }
    }
`

const StyledTitle = styled.h1`
    color: var(--on-secondary);
    font-family: var(--title-font);
    font-size: 8rem;
    line-height: 8rem;
    font-weight: 600;
`

export default function Experiences() {
    return (
        <StyledExperiencesContainer>
            <StyledTitle>My Experiences</StyledTitle>
            <ReactSVG src="./experiences.svg" />
        </StyledExperiencesContainer>
    )
}
