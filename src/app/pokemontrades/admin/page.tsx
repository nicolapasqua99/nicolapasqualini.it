'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { ButtonStyledComponent } from '@/src/app/_components/_styled/button'
import { AuthorizationContext } from '../../_context/authorization.context'

const MainStyledComponent = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: var(--surface);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const ContainerStyledComponent = styled.div`
    padding: 2rem 1rem;
    border-radius: 2rem;
    width: 24vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,
    h2 {
        width: 100%;
        text-align: center;
        padding: 1rem 2rem;
        color: var(--primary);
    }

    h1 {
        font-size: 3rem;
        line-height: 3.5rem;
    }

    h2 {
        font-size: 2.5rem;
        line-height: 3rem;
    }
    & ${ButtonStyledComponent} {
        width: calc(100% - 2rem);
    }
`

const ErrorStyledComponent = styled.p`
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: var(--error);
    width: max-content;
    margin-top: 1rem;
    max-width: 70vw;
`

export default function Home() {
    const [error, setError] = useState<string | null>(null)

    let authorizationContextValue = useContext(AuthorizationContext)

    async function initDBRarities() {
        try {
            let response = await fetch('/pokemontrades/api/fill-rarities', {
                headers: [
                    ['Authorization', `Bearer ${authorizationContextValue?.token}`]
                ]
            })
            if (response.ok) {
                let responseData = await response.json()
                if (responseData.code !== 0) {
                    throw new Error(`${responseData.code} - ${responseData.errorMessage}.`)
                }
            } else {
                throw new Error(`Network error during fill rarities db: ${response.status}.`)
            }
        } catch (error: any) {
            if (error.message) {
                setError(error.message)
            } else {
                setError('An error occurred during initialization of card rarities. Please try again later.')
            }
        }
    }

    return (
        <MainStyledComponent>
            <ContainerStyledComponent>
                <h2>You are logged in as: {authorizationContextValue.user!.email}</h2>
                {authorizationContextValue.claims!.role !== 'admin' && (
                    <h2>You are not an admin.</h2>
                )}
                {authorizationContextValue.claims!.role === 'admin' && (
                    <>
                        <ButtonStyledComponent type="button" onClick={initDBRarities}>
                            Initialize Card Rarities in DB
                        </ButtonStyledComponent>
                        {/* <ButtonStyledComponent onClick={initDBSets()}></ButtonStyledComponent> */}
                        {/* <ButtonStyledComponent onClick={initDBPacks()}></ButtonStyledComponent> */}
                    </>
                )}
                <ButtonStyledComponent>
                    <Link href="/login">Back to login page</Link>
                </ButtonStyledComponent>
                {error && <ErrorStyledComponent>{error}</ErrorStyledComponent>}
            </ContainerStyledComponent >
        </MainStyledComponent >
    )
}
