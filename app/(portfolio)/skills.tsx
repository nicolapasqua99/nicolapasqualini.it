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
        background-color: var(--secondary);
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
        transform: rotate(45deg);
        background-color: var(--secondary);
        background-color: var(--primary);
        border: 1rem solid var(--primary);
        border-radius: 1rem;
    }
    & span.lancet {
        position: absolute;
        height: 46rem;
        width: 1rem;
        border-radius: 1rem;
        background-color: var(--primary);
    }
    & span.angled-lancet {
        position: absolute;
        height: 1rem;
        width: 45.2rem;
        border-radius: 1rem;
        background-color: var(--primary);
    }
    & div.body {
        position: absolute;
        height: 32rem;
        width: 32rem;
        background-color: var(--primary-low-opacity);
        display: flex;
        flex-direction: column;
        &.developer {
            align-items: flex-end;
            justify-content: flex-start;
            transform: translate(-23rem, -23rem) rotate(45deg);
        }
        &.designer {
            align-items: flex-start;
            justify-content: flex-end;
            transform: translate(23rem, -23rem) rotate(-45deg);
        }
        &.soft-skills {
            align-items: flex-start;
            justify-content: flex-end;
            transform: translate(23rem, 23rem) rotate(45deg);
        }
        &.modeling {
            align-items: flex-end;
            justify-content: flex-start;
            transform: translate(-23rem, 23rem) rotate(-45deg);
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
                    <span className="lancet"></span>
                    <span className="angled-lancet"></span>
                    <span className="center-wider"></span>
                    <span className="center-wide right">
                        <h6 className="designer-title">UX Designer</h6>
                        <h6 className="modeling-title">3D Modeling</h6>
                    </span>
                    <span className="center-wide left">
                        <h6 className="developer-title">Developer</h6>
                        <h6 className="soft-skills-title">Other Skills</h6>
                    </span>
                    <span className="center"></span>
                </StyledSkillsContainer>
            </>
        )
    }
}

export default Skills
