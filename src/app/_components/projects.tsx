import React from 'react'
import styled from 'styled-components'

const StyledProjectsContainer = styled.div`
    background-color: var(--tertiary);
    padding: 8rem 0vh;
    height: auto;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
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

const StyledSubTitle = styled.h3`
    color: var(--on-tertiary);
    font-family: var(--title-font);
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 500;
    width: 80%;
    margin-top: 4rem;
    text-align: center;
    &::before {
        content: '';
        display: block;
        height: 1rem;
        width: 50%;
        background-color: var(--on-tertiary);
        border-radius: 1rem;
        transform: translateY(-2rem);
        margin: auto;
    }
`

const StyledProjectTitle = styled.h4`
    color: var(--on-tertiary);
    font-family: var(--title-font);
    font-size: 3rem;
    line-height: 3.5rem;
    margin-top: 2rem;
    font-weight: 400;
    width: 80%;
    text-align: center;
`

const StyledProjectDesc = styled.p`
    color: var(--on-tertiary);
    font-family: var(--title-font);
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: 2rem;
    font-weight: 400;
    text-align: center;
`

const StyledProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    &.full {
        width: 80%;
    }
`

export default function Projects() {
    return (
        <StyledProjectsContainer>
            <StyledTitle>My Creations</StyledTitle>
            <StyledProjectContainer className="full">
                <StyledProjectTitle>My Site</StyledProjectTitle>
                <StyledProjectDesc>
                    That&apos;s the site you are visiting right now, It&apos;s a special project for me because I&apos;ve been working on it for years now, and I think I started it from zero so many times I can&apos;t remember. I always find some
                    things I could have done better. The main purpose of this website was to allow me to test my programming skills (I began my React journey by creating the first version of this), but after a while, it became sufficient to allow me
                    to use it as a portfolio to present myself to others.
                </StyledProjectDesc>
            </StyledProjectContainer>
            <StyledSubTitle>During my years of studying at university, I got the chance to be part of some projects. Some of them had nothing to do with informatics and some of them were pure code development.</StyledSubTitle>
            <StyledProjectContainer>
                <StyledProjectTitle>CodeFrag</StyledProjectTitle>
                <StyledProjectDesc>
                    CodeFrag is a platform that developers can use to share snippets of code from various programming languages. The work I&apos;ve done with my group was to interview some target people and look on the internet at our
                    competitors&apos; websites to get an idea of what we needed to stand out from the crowd, and after that, we created a simple wireframe.
                </StyledProjectDesc>
            </StyledProjectContainer>
            <StyledProjectContainer>
                <StyledProjectTitle>Moview</StyledProjectTitle>
                <StyledProjectDesc>
                    Moview is a chatbot that is able to suggest films to the user based on some key parameters. This project started by doing some research about competitors and doing a lot of brainstorming. After that, we started to train
                    Dialogflow. From it, we became able to get the keywords from a natural language request and use them to research The Movie DB API to get the films the user might want to watch. That second part was done by a nodeJS server.
                </StyledProjectDesc>
                <a target={'blank'} href={'https://t.me/moview_chatbot'}>
                    https://t.me/moview_chatbot
                </a>
            </StyledProjectContainer>
            <StyledProjectContainer>
                <StyledProjectTitle>BOOM</StyledProjectTitle>
                <StyledProjectDesc>
                    BOOM is the name we gave to a project about finding a solution to the low number of visitors to the museum. We did many different tasks, starting from a general analysis of the museum&apos;s access during the year and then moving
                    to a specific approach using a Value Proposition Canvas. After the research, we created a postcard and a poster to advertise our idea.
                </StyledProjectDesc>
            </StyledProjectContainer>
            <StyledSubTitle>Those are projects I&apos;ve done because I wanted to help someone or because I got the occasion to start a big project that sadly ended up closing.</StyledSubTitle>
            <StyledProjectContainer>
                <StyledProjectTitle>Munari Automazioni</StyledProjectTitle>
                <StyledProjectDesc>This is a website for an Italian society that introduces the society and the services it provides, as well as the possibility to request an estimate for a specific work.</StyledProjectDesc>
                <a target={'blank'} href={'https://www.munariautomazioni.it/'}>
                    www.munariautomazioni.it
                </a>
            </StyledProjectContainer>
            <StyledProjectContainer className={'middle'}>
                <StyledProjectTitle>Miari Magazine</StyledProjectTitle>
                <StyledProjectDesc>Miari Magazine is a website where photographers can view the work of their colleagues, read interviews, and submit their own work. </StyledProjectDesc>
                <a target={'blank'} href={'https://www.miarimagazine.com/'}>
                    www.miarimagazine.com
                </a>
            </StyledProjectContainer>
            <StyledProjectContainer>
                <StyledProjectTitle>Miari Admin</StyledProjectTitle>
                <StyledProjectDesc>Miari Admin is a simple website with authentication created in Django that lets Miari Magazine admins look at the submission that has been sent.</StyledProjectDesc>
                <a target={'blank'} href={'https://miariadmin.herokuapp.com/auth'}>
                    miariadmin.herokuapp.com
                </a>
            </StyledProjectContainer>
        </StyledProjectsContainer>
    )
}
