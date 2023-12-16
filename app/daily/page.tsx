'use client'

import './page.css'
import styled from 'styled-components'
import Person from './person'

const Scrollable = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll; 
`

const Title = styled.h1`
    font-size: 56px;
    text-align: center;
    width: auto;
    text-transform: uppercase;
    padding: 8px;
`

const TitleBox = styled.div`
    position: fixed;
    top: calc(50vh - 28px);
    left: 0;
    width: 100vw;
    height: 56px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const LateralTitleBox = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 56px;
    z-index: 2
`

const LateralTitle = styled.h1`
    font-size: 56px;
    text-align: center;
    width: 100vh;
    height: 56px;
    text-transform: uppercase;
    transform: rotate(90deg) translateX(-56px);
    transform-origin: left bottom;
`

const PersonBox = styled.div`
    position: relative;
    top: 0vh;
    left: 56px;
    width: calc(100vw - 56px);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    z-index: 1;
`

const persons = [
    'AAAAA', 
    'BBBBB', 
    'AAAAAAAAAAAA AAAAAAAAAAAAAAAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA']

export default function Home() {
    return (
        <main>
            <Scrollable>
                {/* <TitleBox>
                    <Title>sprint daily</Title>
                </TitleBox> */}
                <LateralTitleBox>
                    <LateralTitle>sprint daily</LateralTitle>
                </LateralTitleBox>
                <PersonBox>
                    {persons.map((person, index) => (
                        <Person key={index} person={person} x={index} y={index} />
                        ))}
                </PersonBox>
                <PersonBox>
                    {persons.map((person, index) => (
                        <Person key={index} person={person} x={index} y={index} />
                        ))}
                </PersonBox>
            </Scrollable>
        </main>
    )
}
