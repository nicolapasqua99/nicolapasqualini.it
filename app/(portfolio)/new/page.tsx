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
                        <div className="body">
                            <div className="social-container">
                                <ReactSVG className="social-icon" src="../img/newportfolio/aureal_section.svg" />
                                <ReactSVG className="social-icon github" src="../img/newportfolio/icons/github.svg" />
                                <ReactSVG className="social-icon linkedin" src="../img/newportfolio/icons/linkedin.svg" />
                                <ReactSVG className="social-icon instagram" src="../img/newportfolio/icons/instagram.svg" />
                            </div>
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
                            </div>
                            <ReactSVG className="arrow" src="../img/newportfolio/icons/arrow.svg" />
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
