import React from 'react'
import styled from 'styled-components'
import TypeIt from 'typeit-react'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import { ColorProp } from '../(utils)/(models)/styled.props.models'
import Plx from 'react-plx'

const StyledSkillsContainer = styled.div`
    position: absolute;
    top: calc(8vh + 8rem);
    width: 80vw;
    height: calc(84vh - 8rem);
    margin: 0 10vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    & .center-wider {
        position: absolute;
        font-size: 4rem;
        height: 32rem;
        width: 32rem;
        border: 1rem solid var(--tertiary);
        border-radius: 1rem;
        background-color: var(--secondary);
        transform: rotate(45deg);
    }
    & .center-wide {
        position: absolute;
        font-size: 4rem;
        height: 16rem;
        width: 16rem;
        border: 1rem solid var(--tertiary);
        border-radius: 1rem;
        & h6 {
            position: absolute;
            width: 26rem;
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            color: var(--tertiary);
            transform: translate(-4rem, -6rem);
            &.modeling-title,
            &.soft-skills-title {
                transform: translate(-4rem, 19rem);
            }
        }
    }
    & .center {
        position: absolute;
        font-size: 4rem;
        height: 4rem;
        width: 4rem;
        transform: translateY(0rem) rotate(45deg);
        background-color: var(--secondary);
        background-color: var(--tertiary);
        border: 1rem solid var(--tertiary);
        border-radius: 1rem;
        // border-top-left-radius: 6rem;
        // border-top-right-radius: 2rem;
        // border-bottom-right-radius: 6rem;
        // border-bottom-left-radius: 2rem;
    }
    & .lancet {
        position: absolute;
        border-radius: 1rem;
        background-color: var(--tertiary);
        &.horizontal {
            height: 1rem;
            width: 60rem;
            transform: translate(-30rem, -4px);
        }
        &.vertical {
            height: 60rem;
            width: 1rem;
            transform: translate(-4px, -30rem);
        }
    }
    & .body {
        position: absolute;
        height: 32rem;
        width: 32rem;
        // background-color: var(--tertiary-low-opacity);
        display: flex;
        flex-direction: column;
        &.developer {
            align-items: flex-end;
            justify-content: flex-start;
            justify-content: center;
            transform: translate(-23rem, -23rem) rotate(45deg);
            & p:nth-of-type(1) {
                transform: rotate(12deg);
            }
            & p:nth-of-type(3) {
                transform: rotate(-12deg);
            }
        }
        &.designer {
            align-items: flex-start;
            justify-content: flex-end;
            justify-content: center;
            transform: translate(23rem, -23rem) rotate(-45deg);
            & p:nth-of-type(1) {
                transform: rotate(-12deg);
            }
            & p:nth-of-type(3) {
                transform: rotate(12deg);
            }
        }
        &.soft-skills {
            align-items: flex-start;
            justify-content: flex-end;
            justify-content: center;
            transform: translate(23rem, 23rem) rotate(45deg);
            & p:nth-of-type(1) {
                transform: rotate(-12deg);
            }
            & p:nth-of-type(3) {
                transform: rotate(12deg);
            }
        }
        &.modeling {
            align-items: flex-end;
            justify-content: flex-start;
            justify-content: center;
            transform: translate(-23rem, 23rem) rotate(-45deg);
            & p:nth-of-type(1) {
                transform: rotate(12deg);
            }
            & p:nth-of-type(3) {
                transform: rotate(-12deg);
            }
        }
        & p {
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            color: var(--primary);
            margin: 1rem 2rem;
        }
    }
`
class Skills extends React.Component {
    state: ColorProp

    constructor(props: any) {
        super(props)
        this.state = {
            primary: primary,
            secondary: secondary,
            tertiary: tertiary
        }
    }

    lancetParallax = [
        {
            start: '50vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                }
            ]
        },
        {
            start: '70vh',
            duration: '10vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 1,
                    property: 'scale'
                }
            ]
        }
    ]

    lancetHorizontalParallax = [...this.lancetParallax]
    lancetVerticalParallax = [...this.lancetParallax]

    centerParallax = [
        {
            start: '50vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                }
            ]
        },
        {
            start: '70vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 1,
                    property: 'scale'
                }
            ]
        }
    ]

    centerWideParallax = [
        {
            start: '50vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                }
            ]
        },
        {
            start: '70vh',
            duration: '30vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 1,
                    property: 'scale'
                }
            ]
        }
    ]

    centerWideRightParallax = [
        {
            start: '50vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                },
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        },
        {
            start: '70vh',
            duration: '30vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 1,
                    property: 'scale'
                },
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        }
    ]

    centerWideLeftParallax = [
        {
            start: '50vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                },
                {
                    startValue: -45,
                    endValue: -45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        },
        {
            start: '70vh',
            duration: '30vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 1,
                    property: 'scale'
                },
                {
                    startValue: -45,
                    endValue: -45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        }
    ]

    centerWiderParallax = [
        {
            start: '50vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                },
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        },
        {
            start: '70vh',
            duration: '40vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 1,
                    property: 'scale'
                },
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        }
    ]

    render() {
        return (
            <>
                <StyledSkillsContainer data-primary={this.state.primary} data-secondary={this.state.secondary} data-tertiary={this.state.tertiary}>
                    {/* <div className="developer body">
                        <p>Angular</p>
                        <p>React</p>
                        <p>NextJS</p>
                    </div>
                    <div className="designer body">
                        <p>Figma</p>
                        <p>Sketch</p>
                        <p>NextJS</p>
                    </div>
                    <div className="modeling body">
                        <p>Angular</p>
                        <p>React</p>
                        <p>NextJS</p>
                    </div>
                    <div className="soft-skills body">
                        <p>Angular</p>
                        <p>React</p>
                        <p>NextJS</p>
                    </div> */}
                    <Plx parallaxData={this.lancetHorizontalParallax} className="lancet horizontal" />
                    <Plx parallaxData={this.lancetVerticalParallax} className="lancet vertical" />
                    <Plx parallaxData={this.centerWiderParallax} className="center-wider"/>
                    <Plx parallaxData={this.centerWideRightParallax} className="center-wide right">
                        <h6 className="designer-title">UX/UI Designer</h6>
                        <h6 className="modeling-title">3D Modeling</h6>
                    </Plx>
                    <Plx parallaxData={this.centerWideLeftParallax} className="center-wide left">
                        <h6 className="developer-title">Developer</h6>
                        <h6 className="soft-skills-title">Other Skills</h6>
                    </Plx>
                    <Plx parallaxData={this.centerParallax} className="center" />
                </StyledSkillsContainer>
            </>
        )
    }
}

export default Skills
