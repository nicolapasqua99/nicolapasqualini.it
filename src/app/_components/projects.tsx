import React from 'react'
import styled from 'styled-components'

const StyledProjectsContainer = styled.div`
    background-color: var(--tertiary-container);
    padding: 8rem 0vh;
    height: auto;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const StyledTitle = styled.h2`
    color: var(--on-tertiary-container);
    font-family: var(--title-font);
    font-size: 8rem;
    line-height: 8rem;
    font-weight: 600;
    width: 100%;
    margin-bottom: 6rem;
    text-align: center;
`

const StyledProjectTitle = styled.h4`
    color: var(--on-tertiary-container);
    font-family: var(--title-font);
    font-size: 3rem;
    line-height: 3.5rem;
    margin-top: 2rem;
    font-weight: 400;
    text-align: center;
`

const StyledProjectDesc = styled.p`
    color: var(--on-tertiary-container);
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
    justify-content: center;
    width: 70%;
    margin: 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0rem;
        background-color: var(--on-tertiary-container);
        border-radius: 1rem;
        height: 1rem;
        width: 9rem;
    }
    &::after {
        content: '';
        position: absolute;
        background-color: var(--on-tertiary-container);
        border-radius: 1rem;
        height: 100%;
        width: 1rem;            
    }
`

const StyledProjectGroupContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    &.right-line {
        align-items: flex-end;
        margin-right: calc(50% - 1rem);
        &::after {
            content: '';
            position: absolute;
            background-color: var(--on-tertiary-container);
            border-radius: 1rem;
            height: calc(100% + 2rem);
            width: 1rem;
        }
        & ${StyledProjectContainer} {
            margin-right: 8rem;
            align-items: flex-end;
            &::before {
                right: -8rem;
            }
        }
    }
    &.left-line {
        align-items: flex-start;
        margin-left: calc(50% - 1rem);
        &::before {
            content: '';
            position: absolute;
            background-color: var(--on-tertiary-container);
            border-radius: 1rem;
            height: calc(100% + 2rem);
            width: 1rem;
        }
        & ${StyledProjectContainer} {
            margin-left: 8rem;
            align-items: flex-start;
            &::before {
                left: -8rem;
            }
        }
    }
`

export default function Projects() {
    return (
        <StyledProjectsContainer>
            <StyledTitle>My Creations</StyledTitle>
            <StyledProjectGroupContainer className='right-line'>
                <StyledProjectContainer>
                    <StyledProjectTitle>My Site</StyledProjectTitle>
                    <StyledProjectDesc>
                        That&apos;s the site you are visiting right now, It&apos;s a special project for me because I&apos;ve been working on it for years now, and I think I started it from zero so many times I can&apos;t remember. I always find some
                        things I could have done better. The main purpose of this website was to allow me to test my programming skills (I began my React journey by creating the first version of this), but after a while, it became sufficient to allow me
                        to use it as a portfolio to present myself to others.
                    </StyledProjectDesc>
                </StyledProjectContainer>
            </StyledProjectGroupContainer>
            <StyledProjectGroupContainer className='left-line'>
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
            </StyledProjectGroupContainer>
            <StyledProjectGroupContainer className='right-line'>
                <StyledProjectContainer>
                    <StyledProjectTitle>Munari Automazioni</StyledProjectTitle>
                    <StyledProjectDesc>This is a website for an Italian society that introduces the society and the services it provides, as well as the possibility to request an estimate for a specific work.</StyledProjectDesc>
                    <a target={'blank'} href={'https://www.munariautomazioni.it/'}>
                        www.munariautomazioni.it
                    </a>
                </StyledProjectContainer>
                <StyledProjectContainer>
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
            </StyledProjectGroupContainer>
        </StyledProjectsContainer>
    )
}
