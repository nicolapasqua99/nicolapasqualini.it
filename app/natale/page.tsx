'use client'

import { useState } from 'react'
import './page.css'
import styled from 'styled-components'

const Title = styled.div<any>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.showsection || '0vh'};
    transition: top 1s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    & div {
        cursor: pointer;
        background-color: #b42d1a;
        width: 90%;
        height: 20%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
    }
    & h1 {
        color: #000;
        width: 100%;
        text-align: center;
        font-size: 64px;
    }
    & p {
        color: #000;
        width: 100%;
        text-align: center;
        font-size: 24px;
        margin-top: 16px;
    }
`

const FirstSlide = styled.div<any>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.showsection || '0vh'};
    transition: top 1s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    & div {
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    & h1 {
        color: #b42d1a;
        width: 100%;
        text-align: center;
        font-size: 64px;
    }
    & p {
        color: #000;
        width: 100%;
        text-align: center;
        font-size: 24px;
        margin-top: 16px;
    }
`

const SecondSlide = styled.div<any>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.showsection || '0vh'};
    transition: top 1s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    & div {
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    & h1 {
        color: #b42d1a;
        width: 100%;
        text-align: center;
        font-size: 64px;
    }
    & p {
        color: #000;
        width: 40%;
        padding: 5%;
        text-align: center;
        font-size: 24px;
        margin-top: 16px;
        height: 20%;
    }
    & span {
        color: #000;
        width: 40%;
        padding: 0 5% 0 5%;
        height: 5%;
        text-align: center;
        font-size: 24px;
        margin-top: 16px;
    }
`

const ThirdSlide = styled.div<any>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.showsection || '0vh'};
    transition: top 1s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    & div {
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    & h1 {
        color: #b42d1a;
        width: 100%;
        text-align: center;
        font-size: 64px;
    }
    & p {
        color: #000;
        width: 100%;
        text-align: center;
        font-size: 24px;
        margin-top: 16px;
    }
`

const FourthSlide = styled.div<any>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.showsection || '0vh'};
    transition: top 1s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    & div {
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    & h1 {
        color: #b42d1a;
        width: 100%;
        text-align: center;
        font-size: 64px;
    }
    & img {
        position: absolute;
        left: 20vw;
        top: 12vw;
        width: 60vw;
        height: auto;
    }
`

const MySelfImg = styled.img`
    position: absolute;
    right: 12vw;
    top: 12vw;
    width: 30vw;
    height: auto;
`

const NextSlide = styled.div<any>`
    position: fixed;
    bottom: 16px;
    left: 48vw;
    background-color: #b42d1a;
    width: 4vw;
    height: 4vw;
    cursor: pointer;
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
    transform: rotate(90deg);
`

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(1)

    const [showTitle, setShowTitle] = useState('0vh')
    const [showFirstSlide, setShowFirstSlide] = useState('100vh')
    const [showSecondSlide, setShowSecondSlide] = useState('100vh')
    const [showThirdSlide, setShowThirdSlide] = useState('100vh')
    const [showFourthSlide, setShowFourthSlide] = useState('100vh')

    function animation(): undefined {
        switch (currentSlide) {
            case 1: {
                setShowTitle('-100vh')
                setShowFirstSlide('0vh')
                setCurrentSlide(2)
                break
            }
            case 2: {
                setShowFirstSlide('-100vh')
                setShowSecondSlide('0vh')
                setCurrentSlide(3)
                break
            }
            case 3: {
                setShowSecondSlide('-100vh')
                setShowThirdSlide('0vh')
                setCurrentSlide(4)
                break
            }
            case 4: {
                setShowThirdSlide('-100vh')
                setShowFourthSlide('0vh')
                setCurrentSlide(5)
                break
            }
        }
    }

    return (
        <main>
            <Title showsection={showTitle.toString()} onClick={() => animation()}>
                <div>
                    <h1>NATALE 2023, IL GIORNO IN CUI CAMBIO TUTTO</h1>
                    <p>Clicca per svelare il tuo regalo</p>
                </div>
            </Title>
            <FirstSlide showsection={showFirstSlide.toString()}>
                <div>
                    <h1>Introduzione</h1>
                    <p>Lo so... vorresti sapere subito quale super ragalo ti ha preparato il nino... ma mi dispiace, dovrai sorbirti un po di spiegazioni.</p>
                </div>
            </FirstSlide>
            <SecondSlide showsection={showSecondSlide.toString()}>
                <div>
                    <h1>La nascita di una grandissima idea</h1>
                    <p>
                        L'idea per questo regalo ha delle radici molto profonde nella storia dei pinguini e del loro non poter volare, nella storia di Groot e del suo faticare a farsi capire. Ci sono voluti mesi, anni, decenni di ricerche per capire
                        quale fosse la soluzione più adatta per renderti felice in questo 2023.
                    </p>
                    <MySelfImg src="../img/ninochestudia.jpeg" />
                </div>
            </SecondSlide>
            <ThirdSlide showsection={showThirdSlide.toString()}>
                <div>
                    <h1>Conclusioni</h1>
                    <p>Dai che ci siamo... Non saprei che altro aggiungere senza scrivere troppe cose a caso, la prossima slide contiene il tuo regalo, buon natale ninetta, ti amo.</p>
                </div>
            </ThirdSlide>
            <FourthSlide showsection={showFourthSlide.toString()}>
                <div>
                    <h1>Regalooooooo</h1>
                    <img src="" />
                </div>
            </FourthSlide>
            <NextSlide onClick={() => animation()} />
        </main>
    )
}
