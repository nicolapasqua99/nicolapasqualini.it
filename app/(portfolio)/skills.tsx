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
        border: 1rem solid ${props => props.theme.primary || 'black'};
        border-radius: 1rem;
        background-color: ${props => props.theme.secondary || 'black'};
        transform: rotate(45deg);
    }
    & span.center-wide {
        position: absolute;
        font-size: 4rem;
        height: 16rem;
        width: 16rem;
        border: 1rem solid ${props => props.theme.primary || 'black'};
        background-color: ${props => props.theme.secondary || 'black'};
        border-radius: 1rem;
        & h6 {
            position: absolute;
            width: 20rem;
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            color: ${props => props.theme.primary || 'black'};
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
        background-color: ${props => props.theme.secondary || 'black'};
        background-color: ${props => props.theme.primary || 'black'};
        border: 1rem solid ${props => props.theme.primary || 'black'};
        border-radius: 1rem;
    }
    & span.lancet {
        position: absolute;
        height: 46rem;
        width: 1rem;
        border-radius: 1rem;
        background-color: ${props => props.theme.primary || 'black'};
    }
    & span.angled-lancet {
        position: absolute;
        height: 1rem;
        width: 45.2rem;
        border-radius: 1rem;
        background-color: ${props => props.theme.primary || 'black'};
    }
    & div.body {
        position: absolute;
        height: calc(50% - 2rem);
        width: calc(50% - 2rem);
        background-color: ${props => props.theme.primary || 'black'};
        opacity: 0.2;
        &.developer {
            right: 0;
            top: 0;
        }
        &.designer {
            left: 0;
            top: 0;
        }
        &.modeling {
            left: 0;
            bottom: 0;
        }
        &.soft-skills {
            right: 0;
            bottom: 0;
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
                <StyledSkillsContainer data-theme={this.state}>
                    <div className="developer body">
                        <h6 className="developer-title">Developer</h6>
                    </div>
                    <div className="designer body">
                        <h6 className="developer-title">UX Designer</h6>
                    </div>
                    <div className="modeling body">
                        <h6 className="developer-title">3D Modeling</h6>
                    </div>
                    <div className="soft-skills body">
                        <h6 className="developer-title">Other Skills</h6>
                    </div>
                    <span className="lancet"></span>
                    <span className="angled-lancet"></span>
                    <span className="center-wider"></span>
                    <span className="center-wide right">
                        <h6 className="developer-title">Developer</h6>
                        <h6 className="modeling-title">3D Modeling</h6>
                    </span>
                    <span className="center-wide left">
                        <h6 className="designer-title">UX Designer</h6>
                        <h6 className="soft-skills-title">Other Skills</h6>
                    </span>
                    <span className="center"></span>
                </StyledSkillsContainer>
            </>
        )
    }
}

export default Skills
