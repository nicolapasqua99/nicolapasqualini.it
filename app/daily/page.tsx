'use client'

import './page.css'
import styled from 'styled-components'
import Person from './person'

const Title = styled.h1`
    position: fixed;
    top: 8px;
    left: 5vw;
    font-size: 24px;
    text-align: center;
`

const DownloadBtn = styled.button`
    position: fixed;
    margin-top: 24px;
    right: 5vw;
    font-size: 16px;
    text-align: center;
    padding: 4px 12px 4px 12px;
    background-color: white;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
    }
`

const PersonBox = styled.div`
    position: fixed;
    width: 90vw;
    height: 20vh;
    bottom: 5vh;
    left: 5vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`

const persons = ['AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA']

export default function Home() {
    return (
        <main>
            <div>
                <Title>Sprint nr: 68</Title>
            </div>
            <PersonBox>
                {persons.map((person, index) => (
                    <Person key={index} person={person} x={index} y={index} />
                    ))}
            </PersonBox>
        </main>
    )
}
