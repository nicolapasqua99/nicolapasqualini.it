import React from 'react'
import styled from 'styled-components'
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
    & div {
        font-size: 4rem;
        color: ${props => props.color || 'white'};
        display: flex;
        align-items: center;
        text-indent: 4rem;
        justify-content: center;
        &:nth-child(1) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            width: calc(33.3%);
            height: calc(33.3%);
            text-indent: 0rem;
            font-weight: 600;
            font-size: 6rem;
            background: transparent;
        }
        &:nth-child(2) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0px;
            width: calc(33.3% - 4px);
            height: calc(33.3% - 2px);
            border-left: 2px solid ${props => props.color || 'white'};
            border-right: 2px solid ${props => props.color || 'white'};
            border-top: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(3) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            width: calc(33.3% - 2px);
            height: calc(33.3% - 2px);
            border-right: 2px solid ${props => props.color || 'white'};
            border-top: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(4) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            width: calc(33.3% - 2px);
            height: calc(33.3% - 4px);
            border-left: 2px solid ${props => props.color || 'white'};
            border-top: 2px solid ${props => props.color || 'white'};
            border-bottom: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(5) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0px;
            width: calc(33.3% - 4px);
            height: calc(33.3% - 4px);
            border: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(6) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            width: calc(33.3% - 2px);
            height: calc(33.3% - 4px);
            border-right: 2px solid ${props => props.color || 'white'};
            border-top: 2px solid ${props => props.color || 'white'};
            border-bottom: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(7) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            width: calc(33.3% - 2px);
            height: calc(33.3% - 2px);
            border-left: 2px solid ${props => props.color || 'white'};
            border-bottom: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(8) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0px;
            width: calc(33.3% - 4px);
            height: calc(33.3% - 2px);
            border-left: 2px solid ${props => props.color || 'white'};
            border-right: 2px solid ${props => props.color || 'white'};
            border-bottom: 2px solid ${props => props.color || 'white'};
            background: transparent;
        }
        &:nth-child(9) {
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            width: calc(33.3% - 2px);
            height: calc(33.3% - 2px);
            border-right: 2px solid ${props => props.color || 'white'};
            border-bottom: 2px solid ${props => props.color || 'white'};
            background: transparent;
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
                <StyledSkillsContainer color={this.state.tertiary}>
                    <div>My Skills</div>
                    <div>Web Developer</div>
                    <div>Basic 3D Modeling</div>
                    <div>image</div>
                    <div>Creativity</div>
                    <div>Curiosity</div>
                    <div>image</div>
                    <div>image</div>
                    <div>A Tech Enthusiast</div>
                </StyledSkillsContainer>
            </>
        )
    }
}

export default Skills

// {
//     main: 'A Tech Enthusiast',
//     subSkills: 'I love tech and other mancraft, and I love to understand how they works'
// },
// {
//    main: 'A Developer',
//    subSkills: 'Through the years I learned to code in various language, the ones I know better are Typescript, Python and a little of Rust'
// },
// {
//     main: 'A Web Developer',
//     subSkills: 'My best field is web development, I can use Angular, React and NextJS framework'
// },
// {
//     main: 'A 3D Printing Enthusiast',
//     subSkills: 'I love to create things that are tailored to my needs, to make my life easier'
// },
// {
//     main: 'A Learner',
//     subSkills: 'I just love to read books and forum to learn new things'
// }
