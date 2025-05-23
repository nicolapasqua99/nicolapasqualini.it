import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const StyledProjectsSectionContainer = styled.div`
    background-color: var(--tertiary);
    padding: 8rem 0vh;
    height: auto;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const StyledProjectListContainer = styled.div`
    height: auto;
    width: 100vw;
    transform: translateY(-8rem);
`

const StyledTitle = styled.h2`
    color: var(--on-tertiary);
    font-family: var(--title-font);
    font-size: 8rem;
    line-height: 8rem;
    font-weight: 600;
    width: 100%;
    margin-bottom: 6rem;
    text-align: center;
`

const StyledProjectTitle = styled.h4`
    color: var(--on-tertiary);
    font-family: var(--title-font);
    font-size: 3rem;
    line-height: 3.5rem;
    margin-top: 2rem;
    font-weight: 400;
    text-align: center;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    & svg {
        margin-left: 1rem;
        width: 2rem;
        height: 2rem;
    }
`

const StyledProjectDesc = styled.p`
    color: var(--on-tertiary);
    font-family: var(--title-font);
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: 2rem;
    font-weight: 400;
    text-align: left;
`

const StyledProjectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70%;
    margin: 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0rem;
        background-color: var(--on-tertiary);
        border-radius: 1rem;
        height: 100%;
        width: 1rem;
    }
    &::after {
        content: '';
        position: absolute;
        background-color: var(--on-tertiary);
        border-radius: 1rem;
        height: 1rem;
        width: 16rem;
        transform: translate(-3.5rem, -4.5rem);
    }
`

const StyledJunctionCircle = styled.span`
    position: relative;
    width: 4rem;
    height: 4rem;
    background-color: var(--on-tertiary);
    border-radius: 2rem;
    transform: translateX(1.5rem);
`

const StyledSuspenceDotsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    & ${StyledJunctionCircle} {
        margin-left: calc(20% - 4rem);
        margin-top: 2rem;
    }
`

const StyledProjectGroupContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    align-items: flex-start;
    margin-left: calc(20% - 1rem);
    & ${StyledProjectContainer} {
        margin-left: 8rem;
        align-items: flex-start;
        &::before {
            left: -8rem;
        }
    }
    & ${StyledJunctionCircle} {
        transform: translateX(-1.5rem);
    }
`

export default function Projects() {
    return (
        <StyledProjectsSectionContainer>
            <StyledTitle>My Creations</StyledTitle>
            <StyledProjectListContainer>
                <StyledSuspenceDotsContainer>
                    <StyledJunctionCircle />
                    <StyledJunctionCircle />
                    <StyledJunctionCircle />
                </StyledSuspenceDotsContainer>
                <StyledProjectGroupContainer>
                    <StyledProjectContainer>
                        <StyledProjectTitle>My Site</StyledProjectTitle>
                        <StyledProjectDesc>
                            That&apos;s the site you are visiting right now, It&apos;s a special project for me because I&apos;ve been working on it for years now, and I think I started it from zero so many times I can&apos;t remember. I always find
                            some things I could have done better. The main purpose of this website was to allow me to test my programming skills (I began my React journey by creating the first version of this), but after a while, it became sufficient
                            to allow me to use it as a portfolio to present myself to others.
                        </StyledProjectDesc>
                    </StyledProjectContainer>
                </StyledProjectGroupContainer>
                <StyledProjectGroupContainer>
                    <StyledJunctionCircle />
                    <StyledProjectContainer>
                        <StyledProjectTitle>CodeFrag</StyledProjectTitle>
                        <StyledProjectDesc>
                            CodeFrag is a platform that developers can use to share snippets of code from various programming languages. The work I&apos;ve done with my group was to interview some target people and look on the internet at our
                            competitors&apos; websites to get an idea of what we needed to stand out from the crowd, and after that, we created a simple wireframe.
                        </StyledProjectDesc>
                    </StyledProjectContainer>
                    <StyledJunctionCircle />
                    <StyledProjectContainer>
                        <StyledProjectTitle>
                            Moview
                            <a target={'blank'} href={'https://t.me/moview_chatbot'}>
                                <FaExternalLinkSquareAlt />
                            </a>
                        </StyledProjectTitle>
                        <StyledProjectDesc>
                            Moview is a chatbot that is able to suggest films to the user based on some key parameters. This project started by doing some research about competitors and doing a lot of brainstorming. After that, we started to train
                            Dialogflow. From it, we became able to get the keywords from a natural language request and use them to research The Movie DB API to get the films the user might want to watch. That second part was done by a nodeJS server.
                        </StyledProjectDesc>
                    </StyledProjectContainer>
                    <StyledJunctionCircle />
                    <StyledProjectContainer>
                        <StyledProjectTitle>BOOM</StyledProjectTitle>
                        <StyledProjectDesc>
                            BOOM is the name we gave to a project about finding a solution to the low number of visitors to the museum. We did many different tasks, starting from a general analysis of the museum&apos;s access during the year and then
                            moving to a specific approach using a Value Proposition Canvas. After the research, we created a postcard and a poster to advertise our idea.
                        </StyledProjectDesc>
                    </StyledProjectContainer>
                </StyledProjectGroupContainer>
                <StyledProjectGroupContainer>
                    <StyledJunctionCircle />
                    <StyledProjectContainer>
                        <StyledProjectTitle>
                            Munari Automazioni
                            <a target={'blank'} href={'https://www.munariautomazioni.it/'}>
                                <FaExternalLinkSquareAlt />
                            </a>
                        </StyledProjectTitle>
                        <StyledProjectDesc>This is a website for an Italian society that introduces the society and the services it provides, as well as the possibility to request an estimate for a specific work.</StyledProjectDesc>
                    </StyledProjectContainer>
                    <StyledJunctionCircle />
                    <StyledProjectContainer>
                        <StyledProjectTitle>
                            Miari Magazine
                            <a target={'blank'} href={'https://www.miarimagazine.com/'}>
                                <FaExternalLinkSquareAlt />
                            </a>
                        </StyledProjectTitle>
                        <StyledProjectDesc>Miari Magazine is a website where photographers can view the work of their colleagues, read interviews, and submit their own work. </StyledProjectDesc>
                    </StyledProjectContainer>
                    <StyledJunctionCircle />
                    <StyledProjectContainer>
                        <StyledProjectTitle>
                            Miari Admin
                            <a target={'blank'} href={'https://miariadmin.herokuapp.com/auth'}>
                                <FaExternalLinkSquareAlt />
                            </a>
                        </StyledProjectTitle>
                        <StyledProjectDesc>Miari Admin is a simple website with authentication created in Django that lets Miari Magazine admins look at the submission that has been sent.</StyledProjectDesc>
                    </StyledProjectContainer>
                </StyledProjectGroupContainer>
                <StyledSuspenceDotsContainer>
                    <StyledJunctionCircle />
                    <StyledJunctionCircle />
                    <StyledJunctionCircle />
                </StyledSuspenceDotsContainer>
            </StyledProjectListContainer>
        </StyledProjectsSectionContainer>
    )
}
