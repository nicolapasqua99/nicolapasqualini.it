'use client'

import './page.css'
import styled from 'styled-components'
import Person from './person'

const Title = styled.h1`
    font-size: 56px;
    text-align: center;
    width: 100%;
`

const TitleBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 20vh;
`

const PersonBox = styled.div`
    position: fixed;
    top: 20vh;
    left: 0;
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
`

const persons = ['AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA']

export default function Home() {
    return (
        <main>
            <TitleBox>
                <Title>Sprint nr: 68</Title>
            </TitleBox>
            <PersonBox>
                {persons.map((person, index) => (
                    <Person key={index} person={person} x={index} y={index} />
                    ))}
            </PersonBox>
        </main>
    )
}
