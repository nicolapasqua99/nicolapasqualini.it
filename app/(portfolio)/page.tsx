'use client'
import TypeIt from 'typeit-react'
import React from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'
import { ReactSVG } from 'react-svg'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import Title from './title'
import Navbar from './navbar'
import Social from './social'
import Skills from './skills'
import Projects from './projects'
import Contacts from './contacts'
import { parallaxBackgroundNavbar } from './(portfolio_configs)/parallaxData'
import { ColorProp } from '../(utils)/(models)/styled.props.models'
import { PageState } from '../(utils)/(models)/page.state.model'
import './page.css'

const Section = styled.div<ColorProp>`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color || 'white'};
    scroll-snap-align: start;
    &#HOME {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--tertiary);
    }
    // &#BIO, &#PROJECTS {
    //     width: calc(100vw - 80px);
    //     margin: 40px;
    //     border: 2px solid black;    
    // }
    // &#BIO {
    //     height: calc(100vh - 180px);
    // }
    &#PROJECTS {
        height: calc(164vh - 80px);
    }
`

const Header = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(8vh + 4rem);
    & div {
        width: 100%;
        height: 100%;
    }
`

const Rect = styled.div`
    position: fixed;
    z-index: -5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

const RectErrorResponsiveness = styled.div<ColorProp>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color || 'white'};
    & h1 {
        position: absolute;
        width: 80vw;
        left: 10vw;
        text-align: center;
        font-size: 4rem;
        top: 20vh;
    }
`

class Page extends React.Component {
    public rectDim: React.RefObject<HTMLDivElement>
    public state: PageState
    public skills: {main: string, subSkills: string}[]

    constructor(props: any) {
        super(props)
        this.rectDim = React.createRef()
        this.skills = [
            {
                main: 'A Tech Enthusiast',
                subSkills: 'I love tech and other mancraft, and I love to understand how they works'
            },
            {
               main: 'A Developer',
               subSkills: 'Through the years I learned to code in various language, the ones I know better are Typescript, Python and a little of Rust' 
            },
            {
                main: 'A Web Developer',
                subSkills: 'My best field is web development, I can use Angular, React and NextJS framework'
            },
            {
                main: 'A 3D Printing Enthusiast',
                subSkills: 'I love to create things that are tailored to my needs, to make my life easier'
            },
            {
                main: 'A Learner',
                subSkills: 'I just love to read books and forum to learn new things'
            }

        ]
        this.state = {
            primary: primary,
            secondary: secondary,
            tertiary: tertiary,
            mobile: true,
            ratio: 0
        }
    }

    updateRatio(): void {
        let ratio
        let width = 100
        let heigth = 100
        if (this.rectDim.current) {
            width = this.rectDim.current.offsetWidth
            heigth = this.rectDim.current.offsetHeight
        }
        ratio = width / heigth
        if (ratio < 0.7) {
            this.setState({ little: true })
        } else {
            this.setState({ little: false })
        }
        this.setState({ratio: ratio})
        console.log(this.state.mobile, ratio)
    }

    componentDidMount() {
        let ratio
        let width = 100
        let heigth = 100
        if (this.rectDim.current) {
            width = this.rectDim.current.offsetWidth
            heigth = this.rectDim.current.offsetHeight
        }
        ratio = width / heigth
        if (ratio < 0.7) {
            this.setState({ little: true })
        } else {
            this.setState({ little: false })
        }
        this.setState({ratio: ratio})
        window.addEventListener('resize', this.updateRatio.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateRatio.bind(this))
    }

    render() {
        if (!this.state.mobile) {
            return (
                <>
                {this.state.ratio}
                    <Rect ref={this.rectDim} />
                    <div className="mobile-container">
                        <div className="bio">
                            <div className="text-container">
                                <div className="text-line">
                                    <span>Hi! I&apos;m </span>
                                    <span className="big-text margin-left">Nicola</span>
                                    <span className="margin-left"> and i am </span>
                                </div>
                                <div className="text-line">
                                    <TypeIt
                                        className="big-text"
                                        options={{ loop: true, speed: 125 }}
                                        getBeforeInit={instance => {
                                            instance.type('a developer').pause(750).delete(9).pause(500).type('tech enthusiast').pause(750).delete(17).pause(500)
                                            return instance
                                        }}></TypeIt>
                                </div>
                                <div className="text-line">
                                    <span className="big-text">get in touch right now</span>
                                    <span className="margin-left"> or scroll and discover who i am!</span>
                                </div>
                                <div className="social-container">
                                    <a href="https://github.com/nicolapasqua99/" target="_blank" rel="noopener noreferrer">
                                        <ReactSVG className="social-icon github" src="../img/newportfolio/icons/github.svg" />
                                    </a>
                                    <a href='https://www.linkedin.com/in/nicola-pasqualini' target="_blank" rel="noopener noreferrer">
                                        <ReactSVG className="social-icon linkedin" src="../img/newportfolio/icons/linkedin.svg" />
                                    </a>
                                    <a href='https://www.instagram.com/nicolapasqua99/' target="_blank" rel="noopener noreferrer">
                                        <ReactSVG className="social-icon instagram" src="../img/newportfolio/icons/instagram.svg" />
                                    </a>
                                </div>
                            </div>
                            <div className="arrow-container">
                                <ReactSVG className="arrow" src="../img/newportfolio/icons/arrow.svg" />
                            </div>
                        </div>
                        <div className='skills'>
                            <h1>Who am I?</h1>
                            <div className='skill_list'>
                                {this.skills.map((item) => {
                                    return <span key="item.main" className='skill_container'>
                                        <h6>{item.main}</h6>
                                        <p>{item.subSkills}</p>
                                        {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            <path fill="var(--tertiary)" d="M21.6,-25C29.3,-19.3,37.7,-13.7,40,-6.2C42.3,1.2,38.4,10.6,33.2,18.6C27.9,26.6,21.2,33.2,13.3,35.7C5.3,38.3,-3.8,36.9,-11.8,33.5C-19.8,30.1,-26.7,24.7,-29.8,17.9C-33,11,-32.5,2.7,-32,-6.6C-31.4,-15.8,-30.9,-26,-25.5,-32.1C-20.2,-38.3,-10.1,-40.5,-1.6,-38.7C6.9,-36.8,13.9,-30.8,21.6,-25Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
                                        </svg> */}
                                    </span>
                                })}
                                
                              
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                {this.state.ratio}
                    <Rect ref={this.rectDim} />
                    <Header>
                        <Plx parallaxData={parallaxBackgroundNavbar}>
                            <div />
                        </Plx>
                    </Header>
                    <Navbar />
                    <Social />
                    <Section id="HOME" color={this.state.primary}>
                        <Title />
                    </Section>
                    <Section id="SKILLS" color={this.state.secondary}>
                        <Skills />
                    </Section>
                    <Section id="PROJECTS" color={this.state.secondary}>
                        <Projects />
                    </Section>
                    <Section id="CONTACT" color={this.state.tertiary}>
                        <Contacts />
                    </Section>
                </>
            )
        }
    }
}

export default function Portfolio() {
    return <Page></Page>
}
