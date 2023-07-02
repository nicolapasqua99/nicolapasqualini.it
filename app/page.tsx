'use client'
import React from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'
import {primary, secondary, tertiary} from './configs/colors'
import Title from './title'
import Navbar from './navbar'
import Social from './social'
import MySelf from './myself'
import Projects from './projects'
import Contacts from './contacts'
import {parallaxBackgroundNavbar} from './configs/parallaxData'

const Section = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.color || 'white'};
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

const RectErrorResponsiveness = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.color || 'white'};
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
    public state: {
        primaryColor: string
        secondaryColor: string
        tertiaryColor: string
        little: boolean
    }

    constructor(props: any) {
        super(props)
        this.rectDim = React.createRef()
        this.state = {
            primaryColor: primary,
            secondaryColor: secondary,
            tertiaryColor: tertiary,
            little: true,
        }
    }

    updateRatio(): void {
        let ratio
        let width
        let heigth
        width = this.rectDim.current.offsetWidth
        heigth = this.rectDim.current.offsetHeight
        ratio = width / heigth
        if (ratio > 1.78) {
            this.setState({little: true})
        } else {
            this.setState({little: false})
        }
        console.log(this.state.little, ratio)
    }

    componentDidMount() {
        let ratio
        let width
        let height
        width = this.rectDim.current.offsetWidth
        height = this.rectDim.current.offsetHeight
        ratio = width / height
        if (ratio > 1.78) {
            this.setState({little: true})
        } else {
            this.setState({little: false})
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
                    <Section
                        id='HOME'
                        color={this.state.primaryColor}>
                        <Title />
                    </Section>
                    <Section
                        id='BIO'
                        color={this.state.secondaryColor}>
                        <MySelf />
                    </Section>
                    <Section
                        id='PROJECTS'
                        color={this.state.secondaryColor}>
                        <Projects />
                    </Section>
                    <Section
                        id='CONTACT'
                        color={this.state.tertiaryColor}>
                        <Contacts />
                    </Section>
                </>
            )
        } else {
            return (
                <>
                    <Rect ref={this.rectDim} />
                    <RectErrorResponsiveness color={this.state.primaryColor}>
                        <h1>
                            I know is bad news, but i miss responsiveness on
                            this version of the website, if you see this the
                            aspect ratio of your screen is too much vertical
                            oriented, you can resize your window if you are on
                            pc or try to rotate you device.
                        </h1>
                    </RectErrorResponsiveness>
                </>
            )
        }
    }
}

export default function Portfolio() {
    return <Page></Page>
}
