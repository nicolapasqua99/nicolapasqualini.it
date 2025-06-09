'use client'

import './page.css'

import { FormEvent, useEffect, useState } from 'react'

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        checkIfIsLoggedIn()
    }, [])

    async function logout() {
        setError(null)

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

    async function login(formEvent: FormEvent<HTMLFormElement>) {
        setError(null)

        const formData = new FormData(formEvent.currentTarget)
        if (formData.get('psw')) {
            const psw: string = formData.get('psw') as string
            await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: psw })
            })
                .then(async response => {
                    setIsLoggedIn(true)
                })
                .catch(error => {
                    if (error.status === 401) {
                        setError('Invalid login credentials. Please try again.')
                    } else {
                        setError('An error occurred during login. Please try again later.')
                    }
                })
        }
    }

    return (
        <main>
            <form onSubmit={login}>
                {isLoggedIn === null && <h1>Loading...</h1>}
                {isLoggedIn !== null && (
                    <>
                        {!isLoggedIn && (
                            <>
                                <h1>Insert password to login</h1>
                                <input className="passwordinput" type="password" name="psw" />
                                <button type="submit">LOGIN</button>
                            </>
                        )}
                        {isLoggedIn && (
                            <button type="button" onClick={() => logout()}>
                                LOGOUT
                            </button>
                        )}
                        <footer>{error && <p style={{ marginBottom: '1rem', color: 'var(--error)' }}>{error}</p>}</footer>
                    </>
                )}
            </form>
        </main>
    )
}
