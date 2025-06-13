'use client'

import React from 'react'
import styled from 'styled-components'

const MainStyledComponent = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: var(--background);
    display: block;
`

const HeaderStyledComponent = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    & h1 {
        font-size: 3rem;
        font-weight: 600;
        color: var(--primary);
    }
    & div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }
`

export default function PokemonTradesPage() {
    return (
        <MainStyledComponent >
            <HeaderStyledComponent>
                <h1>Pokémon Trades</h1>
            </HeaderStyledComponent>
        </MainStyledComponent>
    )
}
