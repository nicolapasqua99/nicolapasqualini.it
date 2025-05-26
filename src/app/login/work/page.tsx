'use client'

import { auth } from '@/src/lib/firebase'
import './page.css'

import { UserCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { FormEvent, useEffect, useState } from 'react'

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        checkIfIsLoggedIn()
    }, [])

    async function signOutUser() {
        setError(null)

        await signOut(auth)

        await fetch('api/logout')
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false)
                }
            })
            .catch(_ => {
                setError('An error occurred while logging you out.')
            })
    }

    async function checkIfIsLoggedIn() {
        setError(null)

        await fetch('api/get-token')
            .then(async response => {
                let response_data = await response.json()
                setIsLoggedIn(response_data.isLogged)
            })
            .catch(_ => {
                setIsLoggedIn(false)
                setError('An error occurred while checking login status. Please try again later.')
            })
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null)

        const formData = new FormData(event.currentTarget)
        if (formData.get('psw')) {
            const psw: string = formData.get('psw') as string
            signInWithEmailAndPassword(auth, 'daily@stbroom.it', psw)
                .then(async (userCredentialResponse: UserCredential) => {
                    console.log('User signed in:', userCredentialResponse.user)
                    if (!userCredentialResponse) {
                        return
                    }
                    let token = await userCredentialResponse.user.getIdToken()
                    fetch('api/set-token', {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(response => {
                        if (response.status === 200) {
                            setIsLoggedIn(true)
                        } else {
                            setError('An error occurred during login. Please try again later.')
                        }
                    }).catch(_ => {
                        setError('An error occurred during login. Please try again later.')
                    })
                })
                .catch(error => {
                    if (error.message.includes('auth/invalid-login-credentials')) {
                        setError('Invalid login credentials. Please try again.')
                    } else {
                        setError('An error occurred during login. Please try again later.')
                    }
                })
        }
    }

    return (
        <main>
            <form onSubmit={onSubmit}>
                {isLoggedIn === null && <h1>Loading...</h1>}
                {isLoggedIn !== null && <>
                    <h1>Insert password to login</h1>
                    {!isLoggedIn && (
                        <>
                            <input className="passwordinput" type="password" name="psw" />
                            <button type="submit">LOGIN</button>
                        </>
                    )}
                    {isLoggedIn && (
                        <button type="button" onClick={() => signOutUser()}>
                            LOGOUT
                        </button>
                    )}
                    <footer>{error && <p style={{ marginBottom: '1rem', color: 'var(--error)' }}>{error}</p>}</footer>
                </>}
            </form>
        </main>
    )
}
