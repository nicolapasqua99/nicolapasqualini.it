import React from 'react'
import styled from 'styled-components'
import TypeIt from 'typeit-react'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import { ColorProp } from '../(utils)/(models)/styled.props.models'
import { ReactSVG } from 'react-svg'
import Plx, { PlxItem } from 'react-plx'

const StyledSkillsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & .sectionContainer {
        width: 80vw;
        height: calc(84vh - 8rem);
        margin: calc(8vh + 8rem) 10vw;
        transform: translate(10px, 10px);
        position: fixed;
        top: 0;
        left: 0;
    }
    & .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
    }
    & .title {
        font-size: 4rem;
        border-radius: 1rem;
        padding: 1rem;
        text-align: center;
        width: 22rem;
    }
    & .center-wider {
        position: absolute;
        font-size: 4rem;
        color: transparent;
        text-align: center;
        border: 1rem solid var(--tertiary);
        border-radius: 1rem;
        background-color: var(--secondary);
        transform: rotate(45deg);
        &.dots {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 15rem;
            width: 15rem;
            padding: 0.5rem;
            & .dot {
                display: block;
                width: 4%;
                height: 4%;
                margin: 1.13%;
                background-color: var(--primary);
                border-radius: 50%;
            }
        }
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
            color: var(--primary);
            transform: translate(-5rem, -6rem);
            &.modeling-title,
            &.soft-skills-title {
                transform: translate(-5rem, 19rem);
            }
        }
        &.right {
            border-color: transparent;
        }
        &.dots {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 15rem;
            width: 15rem;
            padding: 0.5rem;
            & .dot {
                display: block;
                width: 10%;
                height: 10%;
                margin: 1.25%;
                background-color: var(--primary);
                border-radius: 50%;
            }
        }
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
        display: flex;
        flex-direction: column;
        & .cpu-text {
            position: absolute;
            z-index: 2;
            & > div {
                display: contents;
            }
            & svg {
                height: 100%;
            }
            & rect.primary-fill,
            & circle.primary-fill,
            & path.primary-fill,
            & line.primary-fill {
                fill: var(--primary);
            }
            & rect.primary-stroke,
            & circle.primary-stroke,
            & path.primary-stroke,
            & line.primary-stroke {
                stroke: var(--primary);
            }
            & rect.transparent-fill,
            & circle.transparent-fill,
            & path.transparent-fill,
            & line.transparent-fill {
                fill: transparent;
            }
            & rect.transparent-stroke,
            & circle.transparent-stroke,
            & path.transparent-stroke,
            & line.transparent-stroke {
                stroke: transparent;
            }
        }
        & .mask {
            mask-repeat: no-repeat;
            position: absolute;
            z-index: 1;
            width: 700px;
            height: 400px;
        }
        & .bg {
            background: radial-gradient(circle, rgba(252, 176, 126, 0.16) 0%, rgba(252, 176, 126, 0.16) 12%, rgba(252, 176, 126, 1) 12%, rgba(252, 176, 126, 1) 22%, rgba(8, 76, 97, 1) 26%);
            width: 100%;
            height: 100%;
        }
        &.designer {
            & .mask {
                mask-image: url(../img/newportfolio/skills-svg/TOP-LEFT.svg);
            }
            align-items: flex-end;
            justify-content: flex-start;
            justify-content: center;
            transform: translate(-0rem, -25rem);
        }
        &.developer {
            & .mask {
                mask-image: url(../img/newportfolio/skills-svg/TOP-RIGHT.svg);
            }
            align-items: flex-start;
            justify-content: flex-end;
            justify-content: center;
            transform: translate(0rem, -25rem);
        }
        &.soft-skills {
            & .mask {
                mask-image: url(../img/newportfolio/skills-svg/BOTTOM-RIGHT.svg);
            }
            align-items: flex-start;
            justify-content: flex-end;
            justify-content: center;
            transform: translate(0rem, 25rem);
        }
        &.modeling {
            & .mask {
                mask-image: url(../img/newportfolio/skills-svg/BOTTOM-LEFT.svg);
            }
            align-items: flex-end;
            justify-content: flex-start;
            justify-content: center;
            transform: translate(-0rem, 25rem);
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

    sectionParallax = [
        {
            start: '0vh',
            duration: '100vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    unit: 'vh',
                    property: 'translateY'
                }
            ]
        },
        {
            start: '100vh',
            duration: '200vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 200,
                    unit: 'vh',
                    property: 'translateY'
                }
            ]
        }
    ]

    titleParallax: PlxItem[] = [
        {
            start: '0vh',
            end: '100vh',
            properties: [
                {
                    startValue: 1,
                    endValue: 1,
                    property: 'scale'
                },
                {
                    startValue: 'rgba(255, 255, 255, 0)',
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'backgroundColor'
                },
                {
                    startValue: tertiary,
                    endValue: tertiary,
                    property: 'color'
                }
            ]
        },
        {
            start: '100vh',
            end: '110vh',
            properties: [
                {
                    startValue: 1,
                    endValue: 0.5,
                    property: 'scale'
                },
                {
                    startValue: 'rgba(255, 255, 255, 0)',
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'backgroundColor'
                },
                {
                    startValue: tertiary,
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'color'
                }
            ]
        },
        {
            start: '110vh',
            end: '120vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 0.5,
                    property: 'scale'
                },
                {
                    startValue: 'rgba(255, 255, 255, 0)',
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'backgroundColor'
                },
                {
                    startValue: 'rgba(255, 255, 255, 0)',
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'color'
                }
            ]
        },
        {
            start: '120vh',
            end: '150vh',
            properties: [
                {
                    startValue: 0.5,
                    endValue: 0.5,
                    property: 'scale'
                },
                {
                    startValue: 'rgba(255, 255, 255, 0)',
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'backgroundColor'
                },
                {
                    startValue: 'rgba(255, 255, 255, 0)',
                    endValue: 'rgba(255, 255, 255, 0)',
                    property: 'color'
                }
            ]
        }
    ]

    centerWiderParallax = [
        {
            start: '0vh',
            duration: '100vh',
            properties: [
                {
                    startValue: 30,
                    endValue: 30,
                    unit: 'rem',
                    property: 'width'
                },
                {
                    startValue: 12,
                    endValue: 12,
                    unit: 'rem',
                    property: 'height'
                },
                {
                    startValue: 0,
                    endValue: 0,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        },
        {
            start: '100vh',
            duration: '30vh',
            properties: [
                {
                    startValue: 30,
                    endValue: 34,
                    unit: 'rem',
                    property: 'width'
                },
                {
                    startValue: 12,
                    endValue: 34,
                    unit: 'rem',
                    property: 'height'
                },
                {
                    startValue: 0,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        }
    ]

    lancetParallax = [
        {
            start: '0vh',
            duration: '100vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                }
            ]
        },
        {
            start: '150vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'scale'
                }
            ]
        }
    ]

    lancetHorizontalParallax = [...this.lancetParallax]
    lancetVerticalParallax = [...this.lancetParallax]

    centerWideParallax = [
        {
            start: '0vh',
            duration: '100vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                }
            ]
        },
        {
            start: '110vh',
            duration: '10vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0.5,
                    property: 'scale'
                }
            ]
        },
        {
            start: '120vh',
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

    centerWideDotsParallax = [
        {
            start: '0vh',
            duration: '110vh',
            properties: [
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                },
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'opacity'
                }
            ]
        },
        {
            start: '110vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                },
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'opacity'
                }
            ]
        },
        {
            start: '150vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 45,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                },
                {
                    startValue: 0,
                    endValue: 0.8,
                    property: 'opacity'
                }
            ]
        }
    ]

    centerWideRightParallax = [
        {
            start: '0vh',
            duration: '110vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                },
                {
                    startValue: 0,
                    endValue: 0,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        },
        {
            start: '110vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'scale'
                },
                {
                    startValue: 0,
                    endValue: 45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        }
    ]

    centerWideLeftParallax = [
        {
            start: '0vh',
            duration: '110vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                },
                {
                    startValue: 0,
                    endValue: 0,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        },
        {
            start: '110vh',
            duration: '20vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'scale'
                },
                {
                    startValue: 0,
                    endValue: -45,
                    unit: 'deg',
                    property: 'rotate'
                }
            ]
        }
    ]

    maskParallaxTopLeft: PlxItem[] = [
        {
            start: '0vh',
            end: '130vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                },
                {
                    startValue: 200,
                    endValue: 200,
                    property: 'translateY'
                },
                {
                    startValue: 350,
                    endValue: 350,
                    property: 'translateX'
                }
            ]
        },
        {
            start: '130vh',
            end: '170vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 10,
                    property: 'scale'
                },
                {
                    startValue: 200,
                    endValue: 200,
                    property: 'translateY'
                },
                {
                    startValue: 350,
                    endValue: 350,
                    property: 'translateX'
                }
            ]
        }
    ]

    maskParallaxTopRight: PlxItem[] = [
        {
            start: '0vh',
            end: '130vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                },
                {
                    startValue: 200,
                    endValue: 200,
                    property: 'translateY'
                },
                {
                    startValue: -350,
                    endValue: -350,
                    property: 'translateX'
                }
            ]
        },
        {
            start: '130vh',
            end: '170vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 10,
                    property: 'scale'
                },
                {
                    startValue: 200,
                    endValue: 200,
                    property: 'translateY'
                },
                {
                    startValue: -350,
                    endValue: -350,
                    property: 'translateX'
                }
            ]
        }
    ]

    maskParallaxBottomRight: PlxItem[] = [
        {
            start: '0vh',
            end: '130vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                },
                {
                    startValue: -200,
                    endValue: -200,
                    property: 'translateY'
                },
                {
                    startValue: -350,
                    endValue: -350,
                    property: 'translateX'
                }
            ]
        },
        {
            start: '130vh',
            end: '170vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 10,
                    property: 'scale'
                },
                {
                    startValue: -200,
                    endValue: -200,
                    property: 'translateY'
                },
                {
                    startValue: -350,
                    endValue: -350,
                    property: 'translateX'
                }
            ]
        }
    ]

    maskParallaxBottomLeft: PlxItem[] = [
        {
            start: '0vh',
            end: '130vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'scale'
                },
                {
                    startValue: -200,
                    endValue: -200,
                    property: 'translateY'
                },
                {
                    startValue: 350,
                    endValue: 350,
                    property: 'translateX'
                }
            ]
        },
        {
            start: '130vh',
            end: '170vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 10,
                    property: 'scale'
                },
                {
                    startValue: -200,
                    endValue: -200,
                    property: 'translateY'
                },
                {
                    startValue: 350,
                    endValue: 350,
                    property: 'translateX'
                }
            ]
        }
    ]

    svgParallax: PlxItem[] = [
        {
            start: '0vh',
            end: '140vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 0,
                    property: 'opacity'
                }
            ]
        },
        {
            start: '145vh',
            end: '150vh',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity'
                }
            ]
        }
    ]

    render() {
        return (
            <>
                <StyledSkillsContainer>
                    {/* <Plx parallaxData={this.sectionParallax} className="sectionContainer"> */}
                    <div className="sectionContainer">
                        {/* <Plx animateWhenNotInViewport={true} parallaxData={this.lancetHorizontalParallax} className="lancet horizontal" /> */}
                        {/* <Plx animateWhenNotInViewport={true} parallaxData={this.lancetVerticalParallax} className="lancet vertical" /> */}
                        <div className="content">
                            <div className="designer body">
                                <div className="mask">
                                    <Plx animateWhenNotInViewport={true} parallaxData={this.maskParallaxTopLeft} className="bg" />
                                </div>
                                <Plx animateWhenNotInViewport={true} parallaxData={this.svgParallax} className="cpu-text">
                                    <ReactSVG src="../img/newportfolio/skills-svg/TOP-LEFT.svg" />
                                </Plx>
                            </div>
                            <div className="developer body">
                                <div className="mask">
                                    <Plx animateWhenNotInViewport={true} parallaxData={this.maskParallaxTopRight} className="bg" />
                                </div>
                                <Plx animateWhenNotInViewport={true} parallaxData={this.svgParallax} className="cpu-text">
                                    <ReactSVG src="../img/newportfolio/skills-svg/TOP-RIGHT.svg" />
                                </Plx>
                            </div>
                            <div className="soft-skills body">
                                <div className="mask">
                                    <Plx animateWhenNotInViewport={true} parallaxData={this.maskParallaxBottomRight} className="bg" />
                                </div>
                                <Plx animateWhenNotInViewport={true} parallaxData={this.svgParallax} className="cpu-text">
                                    <ReactSVG src="../img/newportfolio/skills-svg/BOTTOM-RIGHT.svg" />
                                </Plx>
                            </div>
                            <div className="modeling body">
                                <div className="mask">
                                    <Plx animateWhenNotInViewport={true} parallaxData={this.maskParallaxBottomLeft} className="bg" />
                                </div>
                                <Plx animateWhenNotInViewport={true} parallaxData={this.svgParallax} className="cpu-text">
                                    <ReactSVG src="../img/newportfolio/skills-svg/BOTTOM-LEFT.svg" />
                                </Plx>
                            </div>
                            <Plx animateWhenNotInViewport={true} parallaxData={this.centerWiderParallax} className="center-wider dots">
                                SKILLS
                                {/* {Array.from(Array(256).keys()).map((dot: number) => {
                                    return <span className="dot"></span>
                                })} */}
                            </Plx>
                            <Plx animateWhenNotInViewport={true} parallaxData={this.centerWideRightParallax} className="center-wide right">
                                <h6 className="developer-title">Developer</h6>
                                <h6 className="modeling-title">3D Modeling</h6>
                            </Plx>
                            <Plx animateWhenNotInViewport={true} parallaxData={this.centerWideLeftParallax} className="center-wide left">
                                <h6 className="designer-title">UX/UI Designer</h6>
                                <h6 className="soft-skills-title">Other Skills</h6>
                            </Plx>
                            <Plx className="title" parallaxData={this.titleParallax}>
                                SKILLS
                            </Plx>
                            <Plx animateWhenNotInViewport={true} parallaxData={this.centerWideDotsParallax} className="center-wide dots">
                                {Array.from(Array(64).keys()).map((dot: number) => {
                                    return <span className="dot" key={dot}></span>
                                })}
                            </Plx>
                        </div>
                    </div>
                    {/* </Plx> */}
                </StyledSkillsContainer>
            </>
        )
    }
}

export default Skills
