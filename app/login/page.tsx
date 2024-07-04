'use client'

import './page.css'

import { UserCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { FormEvent, useState } from 'react'

export default function Home() {
    const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState<any>(null)

    async function signOutUser() {
        //Sign out with the Firebase client
        await signOut(auth)

        //Clear the cookies in the server
        const response = await fetch('/api/logout', {
            method: 'POST'
        })

        if (response.status === 200) {
            setUser(null)
        }
    }

    async function isLoggedIn() {
        const response = await fetch('/api/login')

        if (response.status === 200) {
            setUser(response)
        } else {
            setUser(null)
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            if (formData.get('psw')) {
                const psw: string = formData.get('psw') as string
                signInWithEmailAndPassword(auth, 'daily@stbroom.it', psw).then(async (response: UserCredential) => {
                    if (!response) {
                        return
                    }
                    fetch('/api/login', {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${await response.user.getIdToken()}`
                        }
                    }).then(response => {
                        if (response.status === 200) {
                            setUser(response)
                        } else if (response.status === 400) {
                            setError(response.status.toString() + 'wrong password')
                        } else {
                            setError(response.status.toString() + JSON.stringify(response))
                        }
                    }).catch(error => {
                        setError('generic error')
                    })
                })
            }
        } catch (error: any) {
            setError(error)
        }
    }

    return (
        <main>
            <form onSubmit={onSubmit}>
                {/* <h1>Insert password to continue</h1> */}
                {!user && <>
                    <input className="passwordinput" type="password" name="psw" />
                    <button type="submit">LOGIN</button></>}
                {user && <button type="button" onClick={() => signOutUser()}>
                    LOGOUT
                </button>}
                <footer>
                    {error && <p style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{error}</p>}
                    <b onClick={() => isLoggedIn()}>refresh status</b>
                </footer>
            </form>
        </main>
    )
}
