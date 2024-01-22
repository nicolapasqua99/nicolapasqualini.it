'use client'

import { useState } from 'react'
import styled from 'styled-components'

const PersonContainer = styled.div<{ talks: boolean }>`
    margin: 16px;
    border: 2px solid white;
    cursor: pointer;
    transition: .4s ease all;
    background-color: ${props => (props.talks ? 'rgb(0, 0, 0, .6)' : 'rgb(0, 0, 0, .2)')};
    color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    &.low {
        border-radius: 0%;
    }
    &.normal {
        border-radius: 50%;
    }
    &.margin-left-half {
        margin-left: calc(7.5vw + 16px);
    }
    &.margin-right-half {
        margin-right: calc(7.5vw + 16px);
    }
    & span.tick {
        position: absolute;
        width: 50px;
        height: 50px;
        transition: .4s ease all;
        clip-path: polygon(0% 70%, 30% 100%, 100% 30%, 85% 15%, 30% 70%, 15% 55%);
        opacity: ${props => (props.talks ? '1' : '0')};
        background-color: rgb(255, 255, 255);
    }
    & span.dot {
        width: 40px;
        height: 6px;
        margin: 8px;
        border-radius: 3px;
        transition: .4s ease all;
        background-color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    }
    & p {
        width: 100%;
        font-size: 24px;
        text-align: center;
    }
    ::selection {
        transition: .4s ease all;
        color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    }
    
    @media only screen and (min-width: 1250px) {
        & {
            width: calc(15vw - 4px);
            height: calc(15vw - 4px);
        }
    }

    @media only screen and (max-width: 1250px) {
        & {
            width: 25vw;
            height: 25vw;
        }
    }

    @media only screen and (max-width: 700px) {
        & {
            width: 75vw;
            height: 75vw;
        }
    }
`

export default function Person(props: any) {
    const [talked, setTalked] = useState(false)

    let className: string = props.person.priority;

    if (props.index == 5) className += ' margin-left-half' 
    else if (props.index == 8) className += ' margin-right-half'

    return (
        <PersonContainer className={className} talks={talked} onClick={() => setTalked(!talked)}>
            <span className="tick" />
            <p>{props.person.name}</p>
            <span className="dot" />
            <p>{props.person.role}</p>
        </PersonContainer>
    )
}
