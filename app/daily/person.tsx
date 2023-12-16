'use client'

import { useState } from 'react'
import styled from 'styled-components'

const PersonContainer = styled.div<{ talks: boolean, x: number, y: number }>`
    width: calc(15vw - 4px);
    height: calc(15vw - 4px);
    margin: 16px;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    transition: .4s ease all;
    background-color: ${props => (props.talks ? 'rgb(0, 0, 0, .6)' : 'rgb(0, 0, 0, .2)')};
    color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    & span  {
        position: absolute;
        width: 50px;
        height: 50px;
        transition: opacity .4s ease;
        clip-path: polygon(0% 70%, 30% 100%, 100% 30%, 85% 15%, 30% 70%, 15% 55%);
        opacity: ${props => (props.talks ? '1' : '0')};
        background-color: rgb(255, 255, 255);
    }
    & p {
        position: absolute;
        width: calc(15% - 4px);
        height: calc(20% - 4px);
        font-size: 24px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        word-wrap: wrap;
        text-align: center;
    }
    ::selection {
        color: ${props => (props.talks ? 'rgb(255, 255, 255, .2)' : 'rgb(255, 255, 255, 1)')};
    }
`

export default function Person(props: any) {
    const [talked, setTalked] = useState(false)
    return (
        <PersonContainer x={props.x} y={props.y} talks={talked} onClick={() => setTalked(!talked)}>
            <span></span>
            <p>{props.person}</p>
        </PersonContainer>
    )
}
