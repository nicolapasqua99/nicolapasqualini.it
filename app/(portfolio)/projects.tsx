import React from 'react'
import styled from 'styled-components'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import { ColorProp } from '../(utils)/(models)/styled.props.models'

const TitleList = styled.h2`
    position: relative;
    padding-top: 12vh;
    left: 0vh;
    width: 100vw;
    line-height: 6rem;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    color: var(--secondary);
`

const Container = styled.div`
    position: relative;
    padding-top: 2vh;
    left: 20vw;
    width: 60vw;
    height: auto;
    line-height: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const TitleProject = styled.h3`
    position: relative;
    left: 0vh;
    margin: auto;
    width: 100%;
    line-height: 3.5rem;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    color: var(--secondary);
`

const ProjectDesc = styled.p`
    position: relative;
    padding-top: 2vh;
    padding-bottom: 3vh;
    left: 0vh;
    margin: auto;
    max-width: 50vw;
    line-height: 3rem;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    color: var(--secondary);
`

const TitleUniProject = styled.h4`
    position: relative;
    left: 0vh;
    width: 20vw;
    height: auto;
    line-height: 3.5rem;
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    color: var(--secondary);
`

const UniProjectDesc = styled.p`
    position: relative;
    left: 0vh;
    padding: 2vh 2vw 3vh 2vw;
    width: calc(16vw - 4px);
    line-height: 3rem;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: justify;
    height: auto;
    margin-bottom: 4vh;
    color: var(--secondary);
    &.middle {
        border-left: 2px solid var(--primary);
        border-right: 2px solid var(--primary);
    }
    & a {
        position: absolute;
        left: 2vw;
        bottom: -1vh;
        text-align: center;
        width: calc(16vw - 4px);
        color: var(--secondary);
    }
    & a:visited {
        color: var(--secondary);
    }
`

class Projects extends React.Component {
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
                <TitleList >Some project I&apos;ve worked on</TitleList>
                <Container>
                    <TitleProject>My Site</TitleProject>
                    <ProjectDesc>
                        That&apos;s the site you are visiting right now, It&apos;s a special project for me because I&apos;ve been working on it for years now, and I think I started it from zero so many times I can&apos;t remember. I always find some
                        things I could have done better. The main purpose of this website was to allow me to test my programming skills (I began my React journey by creating the first version of this), but after a while, it became sufficient to allow
                        me to use it as a portfolio to present myself to others.
                    </ProjectDesc>
                    <TitleProject>University Projects</TitleProject>
                    <ProjectDesc>
                        During my years of studying at university, I got the chance to be part of some projects. Some of them had nothing to do with informatics and some of them were pure code development.
                    </ProjectDesc>
                    <TitleUniProject>CodeFrag</TitleUniProject>
                    <TitleUniProject>Moview</TitleUniProject>
                    <TitleUniProject>BOOM</TitleUniProject>
                    <UniProjectDesc>
                        CodeFrag is a platform that developers can use to share snippets of code from various programming languages. The work I&apos;ve done with my group was to interview some target people and look on the internet at our
                        competitors&apos; websites to get an idea of what we needed to stand out from the crowd, and after that, we created a simple wireframe.
                    </UniProjectDesc>
                    <UniProjectDesc className={'middle'}>
                        Moview is a chatbot that is able to suggest films to the user based on some key parameters. This project started by doing some research about competitors and doing a lot of brainstorming. After that, we started to train
                        Dialogflow. From it, we became able to get the keywords from a natural language request and use them to research The Movie DB API to get the films the user might want to watch. That second part was done by a nodeJS server.
                        <a target={'blank'} href={'https://t.me/moview_chatbot'}>
                            https://t.me/moview_chatbot
                        </a>
                    </UniProjectDesc>
                    <UniProjectDesc>
                        BOOM is the name we gave to a project about finding a solution to the low number of visitors to the museum. We did many different tasks, starting from a general analysis of the museum&apos;s access during the year and then
                        moving to a specific approach using a Value Proposition Canvas. After the research, we created a postcard and a poster to advertise our idea.
                    </UniProjectDesc>
                    <TitleProject>Some other projects i did</TitleProject>
                    <ProjectDesc>Those are projects I&apos;ve done because I wanted to help someone or because I got the occasion to start a big project that sadly ended up closing.</ProjectDesc>
                    <TitleUniProject>Munari Automazioni</TitleUniProject>
                    <TitleUniProject>Miari Magazine</TitleUniProject>
                    <TitleUniProject>Miari Admin</TitleUniProject>
                    <UniProjectDesc>
                        This is a website for an Italian society that introduces the society and the services it provides, as well as the possibility to request an estimate for a specific work.
                        <a target={'blank'} href={'https://www.munariautomazioni.it/'}>
                            www.munariautomazioni.it
                        </a>
                    </UniProjectDesc>
                    <UniProjectDesc className={'middle'}>
                        Miari Magazine is a website where photographers can view the work of their colleagues, read interviews, and submit their own work. 
                        <a target={'blank'} href={'https://www.miarimagazine.com/'}>
                            www.miarimagazine.com
                        </a>
                    </UniProjectDesc>
                    <UniProjectDesc>
                        Miari Admin is a simple website with authentication created in Django that lets Miari Magazine admins look at the submission that has been sent.
                        <a target={'blank'} href={'https://miariadmin.herokuapp.com/auth'}>
                            miariadmin.herokuapp.com
                        </a>
                    </UniProjectDesc>
                </Container>
            </>
        )
    }
}

export default Projects
