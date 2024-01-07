'use client'
import React from 'react'
import TypeIt from 'typeit-react'
import styled from 'styled-components'
import Plx from 'react-plx'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import Title from './title'
import Navbar from './navbar'
import Social from './social'
import MySelf from './myself'
import { ReactSVG } from 'react-svg'
import Projects from './projects'
import Contacts from './contacts'
import { parallaxBackgroundNavbar } from './(portfolio_configs)/parallaxData'
import { ColorProp } from '../../(utils)/(models)/styled.props.models'
import { PageState } from '../../(utils)/(models)/page.state.model'

const Section = styled.div<ColorProp>`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color || 'white'};
    scroll-snap-align: start;
    &#PROJECTS {
        height: 150vh;
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

const MobileContainer = styled.div<ColorProp>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: 'white';
`

const MobileBody = styled.div<ColorProp>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 0rem);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    & div.text-container {
        width: 100%;
        height: fit-content;
    }
    & div.text-line {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
    & span {
        text-align: center;
        color: ${props => props.secondary || 'black'};
        font-size: 3rem;
        vertical-align: middle;
        &.big-text {
            font-size: 4rem;
            font-weight: bold;
        }
        &.margin-left {
            margin-left: 4px;
        }
    }
    & .arrow {
        position: absolute;
        bottom: 24px;
        height: 32px;
        width: 32px;
        transform: rotate(-90deg);
        transform-origin: center center;
        & > div > svg > path {
            fill: ${props => props.secondary || 'black'};
        }
    }
`

const MobileHeader = styled.div<ColorProp>`
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 100vw;
    height: 10rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    & h1 {
        width: 100%;
        text-align: center;
        font-size: 5rem;
        line-height: 4rem;
        font-weight: bold;
        color: ${props => props.secondary || 'white'};
        &.stroked-text {
            color: black;
            -webkit-text-fill-color: ${props => props.primary || 'white'}; /* Will override color (regardless of order) */
            -webkit-text-stroke: 1px black;
        }
    }
`

class Page extends React.Component {
    public rectDim: React.RefObject<HTMLDivElement>
    public state: PageState

    constructor(props: any) {
        super(props)
        this.rectDim = React.createRef()
        this.state = {
            primary: primary,
            secondary: secondary,
            tertiary: tertiary,
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
                    <Section id="BIO" color={this.state.secondary}>
                        <MySelf />
                    </Section>
                    <Section id="PROJECTS" color={this.state.secondary}>
                        <Projects />
                    </Section>
                    <Section id="CONTACT" color={this.state.tertiary}>
                        <Contacts />
                    </Section>
                </>
            )
        } else {
            return (
                <>
                    <Rect ref={this.rectDim} />
                    <MobileContainer primary={this.state.primary}>
                        <MobileBody secondary={this.state.tertiary}>
                            <div className="text-container">
                                <div className="text-line">
                                    <span>Hi! I&apos;m </span>
                                    <span className="big-text margin-left">Nicola</span>
                                    <span className="margin-left"> and i am </span>
                                </div>
                                <div className="text-line">
                                    <TypeIt
                                        className="big-text"
                                        options={{ loop: true }}
                                        getBeforeInit={instance => {
                                            instance.type('a developer').pause(750).delete(9).pause(500).type('tech enthusiast').pause(750).delete(17).pause(500)
                                            return instance
                                        }}></TypeIt>
                                </div>
                                <div className="text-line">
                                    <span className="big-text">get in touch right now</span>
                                    <span className="margin-left"> or scroll and discover who i am!</span>
                                </div>
                            </div>
                            <ReactSVG className="arrow" src="../img/newportfolio/icons/arrow.svg" />
                        </MobileBody>
                        {/* <MobileHeader primary={this.state.primary} secondary={this.state.tertiary}>
                            <h1>NICOLA</h1>
                            <h1>PASQUALINI</h1>
                        </MobileHeader> */}
                    </MobileContainer>
                </>
            )
        }
    }
}

export default function Portfolio() {
    return <Page></Page>
}
