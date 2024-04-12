'use client'
import React from 'react'
import TypeIt from 'typeit-react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { PageState } from '../../(utils)/(models)/page.state.model'
import './page.css'

const Rect = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

class Page extends React.Component {
    public rectDim: React.RefObject<HTMLDivElement>
    public state: PageState

    constructor(props: any) {
        super(props)
        this.rectDim = React.createRef()
        this.state = {
            little: true
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
        if (ratio > 1.78) {
            this.setState({ little: true })
        } else {
            this.setState({ little: false })
        }
        console.log(this.state.little, ratio)
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
        if (ratio > 1.78) {
            this.setState({ little: true })
        } else {
            this.setState({ little: false })
        }
        window.addEventListener('resize', this.updateRatio.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateRatio.bind(this))
    }

    render() {
        if (this.state.little) {
            return (
                <>
                    <Rect ref={this.rectDim} />
                </>
            )
        } else {
            return (
                <>
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
                            <h1>Skills</h1>
                            <div className='skill_list'>
                                <span className='skill_container'>
                                    <p>Skill 1</p>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <path fill="var(--tertiary)" d="M21.6,-25C29.3,-19.3,37.7,-13.7,40,-6.2C42.3,1.2,38.4,10.6,33.2,18.6C27.9,26.6,21.2,33.2,13.3,35.7C5.3,38.3,-3.8,36.9,-11.8,33.5C-19.8,30.1,-26.7,24.7,-29.8,17.9C-33,11,-32.5,2.7,-32,-6.6C-31.4,-15.8,-30.9,-26,-25.5,-32.1C-20.2,-38.3,-10.1,-40.5,-1.6,-38.7C6.9,-36.8,13.9,-30.8,21.6,-25Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
                                    </svg>
                                </span>
                                <span className='skill_container'>
                                    <p>Skill 2</p>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <path fill="var(--tertiary)" d="M21.6,-25C29.3,-19.3,37.7,-13.7,40,-6.2C42.3,1.2,38.4,10.6,33.2,18.6C27.9,26.6,21.2,33.2,13.3,35.7C5.3,38.3,-3.8,36.9,-11.8,33.5C-19.8,30.1,-26.7,24.7,-29.8,17.9C-33,11,-32.5,2.7,-32,-6.6C-31.4,-15.8,-30.9,-26,-25.5,-32.1C-20.2,-38.3,-10.1,-40.5,-1.6,-38.7C6.9,-36.8,13.9,-30.8,21.6,-25Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
                                    </svg>
                                </span>
                                <span className='skill_container'>
                                    <p>Skill 3</p>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <path fill="var(--tertiary)" d="M21.6,-25C29.3,-19.3,37.7,-13.7,40,-6.2C42.3,1.2,38.4,10.6,33.2,18.6C27.9,26.6,21.2,33.2,13.3,35.7C5.3,38.3,-3.8,36.9,-11.8,33.5C-19.8,30.1,-26.7,24.7,-29.8,17.9C-33,11,-32.5,2.7,-32,-6.6C-31.4,-15.8,-30.9,-26,-25.5,-32.1C-20.2,-38.3,-10.1,-40.5,-1.6,-38.7C6.9,-36.8,13.9,-30.8,21.6,-25Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
                                    </svg>
                                </span>
                                <span className='skill_container'>
                                    <p>Skill 4</p>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <path fill="var(--tertiary)" d="M21.6,-25C29.3,-19.3,37.7,-13.7,40,-6.2C42.3,1.2,38.4,10.6,33.2,18.6C27.9,26.6,21.2,33.2,13.3,35.7C5.3,38.3,-3.8,36.9,-11.8,33.5C-19.8,30.1,-26.7,24.7,-29.8,17.9C-33,11,-32.5,2.7,-32,-6.6C-31.4,-15.8,-30.9,-26,-25.5,-32.1C-20.2,-38.3,-10.1,-40.5,-1.6,-38.7C6.9,-36.8,13.9,-30.8,21.6,-25Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
                                    </svg>
                                </span>
                                <span className='skill_container'>
                                    <p>Skill 5</p>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <path fill="var(--tertiary)" d="M21.6,-25C29.3,-19.3,37.7,-13.7,40,-6.2C42.3,1.2,38.4,10.6,33.2,18.6C27.9,26.6,21.2,33.2,13.3,35.7C5.3,38.3,-3.8,36.9,-11.8,33.5C-19.8,30.1,-26.7,24.7,-29.8,17.9C-33,11,-32.5,2.7,-32,-6.6C-31.4,-15.8,-30.9,-26,-25.5,-32.1C-20.2,-38.3,-10.1,-40.5,-1.6,-38.7C6.9,-36.8,13.9,-30.8,21.6,-25Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default function Portfolio() {
    return <Page></Page>
}
