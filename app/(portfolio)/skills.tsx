import React from 'react'
import styled from 'styled-components'
import TypeIt from 'typeit-react'
import { primary, secondary, tertiary } from './(portfolio_configs)/colors'
import { ColorProp } from '../(utils)/(models)/styled.props.models'

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
    & span.center-wider {
        position: absolute;
        font-size: 4rem;
        height: 32rem;
        width: 32rem;
        border: 1rem solid var(--primary);
        border-radius: 1rem;
        background-color: var(--secondary);
        transform: rotate(45deg);
    }
    & span.center-wide {
        position: absolute;
        font-size: 4rem;
        height: 16rem;
        width: 16rem;
        border: 1rem solid var(--primary);
        border-radius: 1rem;
        & h6 {
            position: absolute;
            width: 20rem;
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            color: var(--primary);
            transform: translate(-2rem, -6rem);
            &.modeling-title,
            &.soft-skills-title {
                transform: translate(-2rem, 19rem);
            }
        }
        &.right {
            transform: rotate(45deg);
        }
        &.left {
            transform: rotate(-45deg);
        }
    }
    & span.center {
        position: absolute;
        font-size: 4rem;
        height: 4rem;
        width: 4rem;
        transform: translateY(0rem) rotate(45deg);
        background-color: var(--secondary);
        background-color: var(--primary);
        border: 1rem solid var(--primary);
        border-radius: 1rem;
        // border-top-left-radius: 6rem;
        // border-top-right-radius: 2rem;
        // border-bottom-right-radius: 6rem;
        // border-bottom-left-radius: 2rem;
    }
    & span.lancet {
        position: absolute;
        border-radius: 1rem;
        background-color: var(--primary);
        &.horizontal {
            height: 1rem;
            width: 60rem;
        }
        &.vertical {
            height: 60rem;
            width: 1rem;
        }
    }
    & div.body {
        position: absolute;
        height: 32rem;
        width: 32rem;
        // background-color: var(--primary-low-opacity);
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

    render() {
        return (
            <>
                <StyledSkillsContainer data-primary={this.state.primary} data-secondary={this.state.secondary} data-tertiary={this.state.tertiary}>
                    <div className="developer body">
                        <p>Angular</p>
                        <p>React</p>
                        <p>NextJS</p>
                    </div>
                    <div className="designer body">
                        <p>Angular</p>
                        <p>React</p>
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
                    </div>
                    <span className="lancet horizontal"></span>
                    <span className="lancet vertical"></span>
                    <span className="center-wider"></span>
                    <span className="center"></span>
                    <span className="center-wide right">
                        <h6 className="designer-title">UX Designer</h6>
                        <h6 className="modeling-title">3D Modeling</h6>
                    </span>
                    <span className="center-wide left">
                        <h6 className="developer-title">Developer</h6>
                        <h6 className="soft-skills-title">Other Skills</h6>
                    </span>
                </StyledSkillsContainer>
            </>
        )
    }
}

export default Skills
