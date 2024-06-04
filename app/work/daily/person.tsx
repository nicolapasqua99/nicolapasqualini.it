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
    &.lower {
        border-radius: 10%;
    }
    &.normal {
        border-radius: 10%;
    }
    & span.tick {
        position: absolute;
        width: 30px;
        height: 30px;
        transition: .4s ease all;
        clip-path: polygon(0% 70%, 30% 100%, 100% 30%, 85% 15%, 30% 70%, 15% 55%);
        opacity: ${props => (props.talks ? '1' : '0')};
        background-color: rgb(255, 255, 255);
    }
    & span.dot {
        width: 40px;
        height: 4px;
        margin: 8px;
        border-radius: 3px;
        transition: .4s ease all;
        background-color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    }
    & p {
        width: 100%;
        font-size: 16px;
        text-align: center;
    }
    ::selection {
        transition: .4s ease all;
        color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    }
    @media only screen and (min-width: 1250px) {
        & {
            width: 6vw;
            height: 6vw;
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

    return (
        <PersonContainer className={className} talks={talked} onClick={() => setTalked(!talked)}>
            <span className="tick" />
            <p>{props.person.name}</p>
            <span className="dot" />
            <p>{props.person.field}</p>
        </PersonContainer>
    )
}
