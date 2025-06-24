'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { onIdTokenChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { getClientAuth } from '@/src/lib/firebase-client'
import { ButtonStyledComponent } from '../_components/_styled/button'
import { INinoverseClaims } from './model'

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

const FormStyledComponent = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    & input {
        border: none;
        outline: none;
        background-color: var(--surface-variant);
        text-align: center;
        font-size: 2rem;
        padding: 2rem;
        margin: 1rem;
        color: var(--tertiary);
        transition: all 0.4s ease;
        border-radius: 2rem;
        &:focus,
        &:not(:placeholder-shown) {
            color: var(--primary);
            border-radius: 1rem;
        }
    }
    & label {
        width: 100%;
        text-align: center;
        color: var(--primary);
        font-size: 2rem;
        line-height: 2rem;
        transition: all 0.4s ease;
        transform: translateY(5rem);
        pointer-events: none;
        user-select: none;
    }
    & span {
        content: '';
        transition: all 0.4s ease;
        display: block;
        height: 0.5rem;
        background-color: var(--primary);
        width: 10%;
        margin-left: 45%;
        transform: translateY(-2rem);
        border-radius: 2px;
    }
    label:has(+ input:focus),
    label:has(+ input:not(:placeholder-shown)) {
        transform: translateY(0rem);
    }
    & input:focus,
    input:not(:placeholder-shown) {
        & + span {
            width: 88%;
            margin-left: 6%;
        }
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
                        await setToken(token.token)
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
                await deleteToken()
                setCurrentUser(null)
                setClaims(null)
            }
            if (status === 'unloaded') setStatus('loaded')
        })
    }, [currentUser, status])

    async function setToken(token: string) {
        setError(null)

        await fetch('/login/api/login', {
            method: 'POST',
            headers: [
                ['Content-Type', 'application/json'],
                ['Authorization', `Bearer ${token}`]
            ]
        }).then(async response => {
            if (response.ok) {
                let responseData = await response.json()
                if (responseData.code !== 0) {
                    throw new Error(`Login error: ${responseData.code} - ${responseData.errorMessage}.`)
                }
            } else {
                throw new Error(`Network error during login: ${response.status}.`)
            }
        })
    }

    async function deleteToken() {
        await fetch('/login/api/logout', {
            method: 'GET'
        }).then(async response => {
            if (response.ok) {
                let responseData = await response.json()
                if (responseData.code !== 0) {
                    throw new Error(`Logout occurred: ${responseData.code} - ${responseData.errorMessage}.`)
                }
            } else {
                throw new Error(`Network error during logout: ${response.status}.`)
            }
        })
    }

    async function login(formEvent: FormEvent<HTMLFormElement>) {
        setError(null)
        formEvent.preventDefault()

        const formData = new FormData(formEvent.currentTarget)
        const password: string = formData.get('psw') as string
        const username: string = formData.get('username') as string
        if (password && username) {
            try {
                let userCredentialResponse = await signInWithEmailAndPassword(getClientAuth(), username, password)
                let token = await userCredentialResponse.user.getIdToken()
                setToken(token)
                setCurrentUser(userCredentialResponse.user)
            } catch (error: any) {
                if (error.message) {
                    setError(error.message)
                } else {
                    setError('An error occurred during login. Please try again later.')
                }
            }
        }
    }

    async function logout() {
        setError(null)

        try {
            await signOut(getClientAuth())
            deleteToken()
            setCurrentUser(null)
            setHasAccess(false)
        } catch (error: any) {
            if (error.message) {
                setError(error.message)
            } else {
                setError('An error occurred during login. Please try again later.')
            }
        }
    }

    async function initUsers() {
        await fetch('/login/api/init-users', {
            method: 'POST',
            headers: [
                ['Content-Type', 'application/json'],
                ['Authorization', `Bearer ${await getClientAuth().currentUser?.getIdToken()}`]
            ]
        }).then(async response => {
            if (response.ok) {
                let responseData = await response.json()
                if (responseData.code !== 0) {
                    throw new Error(`Initialization error: ${responseData.code} - ${responseData.errorMsg}.`)
                }
            } else {
                throw new Error(`Network error during initialization: ${response.status}.`)
            }
        })
    }

    return (
        <MainStyledComponent>
            <ContainerStyledComponent>
                <>
                    {status === 'unloaded' && <h1>Loading...</h1>}
                    {status === 'loaded' && (
                        <>
                            {!hasAccess && (
                                <FormStyledComponent onSubmit={login}>
                                    <label htmlFor="username">Insert username.</label>
                                    <input type="username" name="username" />
                                    <span></span>
                                    <label htmlFor="psw">Insert password.</label>
                                    <input type="password" name="psw" />
                                    <span></span>
                                    <ButtonStyledComponent type="submit">LOGIN</ButtonStyledComponent>
                                </FormStyledComponent>
                            )}
                            {hasAccess && (
                                <>
                                    <h2>Autenticato come: {currentUser?.email}</h2>
                                    {(claims?.section === 'work' || claims?.role === 'admin') && (
                                        <>
                                            <ButtonStyledComponent>
                                                <Link href="/work/daily">Daily tracker</Link>
                                            </ButtonStyledComponent>
                                            <ButtonStyledComponent>
                                                <Link href="/work/vacations">Vacation tracker</Link>
                                            </ButtonStyledComponent>
                                        </>
                                    )}
                                    {(claims?.section === 'pokemontrades' || claims?.role === 'admin') && (
                                        <>
                                            <ButtonStyledComponent>
                                                <Link href="/pokemontrades">Pokemon Trades</Link>
                                            </ButtonStyledComponent>
                                        </>
                                    )}
                                    {claims?.role === 'admin' && (
                                        <>
                                            <ButtonStyledComponent>
                                                <Link href="/pokemontrades/admin">Pokemon Trades Admin</Link>
                                            </ButtonStyledComponent>
                                            <ButtonStyledComponent type="button" onClick={() => initUsers()}>
                                                Initialize Users
                                            </ButtonStyledComponent>
                                        </>
                                    )}
                                    <ButtonStyledComponent type="button" onClick={() => logout()}>
                                        Logout
                                    </ButtonStyledComponent>
                                </>
                            )}
                            {error && <ErrorStyledComponent>{error}</ErrorStyledComponent>}
                        </>
                    )}
                </>
            </ContainerStyledComponent>
        </MainStyledComponent>
    )
}
