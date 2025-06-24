'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { onIdTokenChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { getClientAuth } from '@/src/lib/firebase-client'
import { ButtonStyledComponent } from '@/src/app/_components/_styled/button'
import { INinoverseClaims } from '@/src/app/login/model'
import { addCard } from '@/dataconnect/dataconnect-generated'
import { init } from 'next/dist/compiled/webpack/webpack'

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
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [status, setStatus] = useState<'unloaded' | 'loaded'>('unloaded')
    const [hasAccess, setHasAccess] = useState<boolean>(false)
    const [claims, setClaims] = useState<INinoverseClaims | null>(null)

    useEffect(() => {
        onIdTokenChanged(getClientAuth(), async user => {
            if (user) {
                if (!currentUser || user.uid != currentUser.uid) {
                    const token = await user.getIdTokenResult()
                    const tokenClaims: INinoverseClaims = token.claims.locals as INinoverseClaims
                    if (tokenClaims.role) {
                        setCurrentUser(user)
                        setClaims({
                            role: tokenClaims.role,
                            section: tokenClaims.section || 'all',
                            token: token.token
                        })
                        setHasAccess(true)
                    }
                }
            } else {
                setHasAccess(false)
            }
            if (!hasAccess && currentUser) {
                setCurrentUser(null)
                setClaims(null)
            }
            if (status === 'unloaded') setStatus('loaded')
        })
    }, [currentUser, status])

    async function initDBRarities() {
        setError(null)

        await fetch('/pokemontrades/api/fill-rarities', {
            headers: [
                ['Authorization', `Bearer ${claims?.token}`]
            ]
        }).then(async response => {
            if (response.ok) {
                let responseData = await response.json()
                if (responseData.code !== 0) {
                    throw new Error(`${responseData.code} - ${responseData.errorMessage}.`)
                }
            } else {
                throw new Error(`Network error during fill rarities db: ${response.status}.`)
            }
        })
    }

    return (
        <MainStyledComponent>
            <ContainerStyledComponent>
                <>
                    {claims?.token}
                    {status === 'unloaded' && <h2>Loading...</h2>}
                    {status === 'loaded' && (
                        <>
                            {!hasAccess && <h2>You are logged in as {currentUser?.email}, you don&apos;t have access to this page.</h2>}
                            {hasAccess && (
                                <>
                                    <h2>You are logged in as: {currentUser?.email}</h2>
                                    <>
                                        <ButtonStyledComponent type="button" onClick={initDBRarities}>
                                            Initialize Card Rarities in DB
                                        </ButtonStyledComponent>
                                        {/* <ButtonStyledComponent onClick={initDBSets()}></ButtonStyledComponent> */}
                                        {/* <ButtonStyledComponent onClick={initDBPacks()}></ButtonStyledComponent> */}
                                    </>
                                </>
                            )}
                            <ButtonStyledComponent>
                                <Link href="/login">Back to login page</Link>
                            </ButtonStyledComponent>
                        </>
                    )}
                    {error && <ErrorStyledComponent>{error}</ErrorStyledComponent>}
                </>
            </ContainerStyledComponent>
        </MainStyledComponent>
    )
}
