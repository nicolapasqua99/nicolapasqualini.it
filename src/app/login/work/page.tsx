'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { onIdTokenChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { getClientAuth } from '@/src/lib/firebase-client'

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
    a,
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6rem;
        width: calc(100% - 2rem);
        padding: 0rem 2rem;
        margin: 1rem 1rem;
        border: 2px solid var(--primary);
        outline: none;
        box-shadow: none;
        font-size: 2rem;
        font-weight: 600;
        transition: all 0.4s ease;
        border-radius: 2rem;
        background-color: var(--primary-container);
        color: var(--on-primary-container);
        cursor: pointer;
        &:hover {
            border-radius: 1rem;
            background-color: var(--primary);
            color: var(--on-primary);
        }
        &:disabled {
            opacity: 0.3;
        }
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

    useEffect(() => {
        onIdTokenChanged(getClientAuth(), async user => {
            if (user) {
                if (!currentUser || user.uid == currentUser.uid) {
                    const idToken = await user.getIdToken()
                    await setToken(idToken)
                    setCurrentUser(user)
                }
            } else {
                if (currentUser) {
                    await deleteToken()
                    setCurrentUser(null)
                }
            }
            if (status === 'unloaded') setStatus('loaded')
        })
    }, [currentUser, status])

    async function setToken(token: string) {
        setError(null)

        await fetch('api/login', {
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
        await fetch('api/logout', {
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
        if (formData.get('psw')) {
            try {
                const password: string = formData.get('psw') as string
                let userCredentialResponse = await signInWithEmailAndPassword(getClientAuth(), 'daily@stbroom.it', password)
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
        } catch (error: any) {
            if (error.message) {
                setError(error.message)
            } else {
                setError('An error occurred during login. Please try again later.')
            }
        }
    }

    return (
        <MainStyledComponent>
            <ContainerStyledComponent>
                <>
                    {status === 'unloaded' && <h1>Loading...</h1>}
                    {status === 'loaded' && (
                        <>
                            {!currentUser && (
                                <FormStyledComponent onSubmit={login}>
                                    <label htmlFor="psw">Insert password to login.</label>
                                    <input className="passwordinput" type="password" name="psw" placeholder="" />
                                    <span></span>
                                    <button type="submit">LOGIN</button>
                                </FormStyledComponent>
                            )}
                            {currentUser && (
                                <>
                                    <h2>Credenziali valide.</h2>
                                    <Link href="/work/daily">Daily tracker</Link>
                                    <Link href="/work/vacations">Vacation tracker</Link>
                                    <button type="button" onClick={() => logout()}>
                                        Logout
                                    </button>
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
