'use client'

import './page.css'

import { UserCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState<any>({})

    async function signOutUser() {
        //Sign out with the Firebase client
        await signOut(auth)

        //Clear the cookies in the server
        const response = await fetch('/api/logout', {
            method: 'POST'
        })

        if (response.status === 200) {
            router.push('/login')
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
                            console.log('logged in')
                            setUser(response)
                            router.push('/work/daily')
                        } else {
                            console.log('not logged in')
                            setError('not logged in')
                        }
                    })
                })
            }
        } catch (error: any) {
            setError(error.message)
        }
    }

    return (
        <main>
            <h2>Status: {user ? 'logged in' : 'need to login'}</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={onSubmit}>
                <h1>Insert password to continue</h1>
                <div className="passwordinputcontainer">
                    <input className="passwordinput" type="password" name="psw" />
                </div>
                <div className="passwordbuttoncontainer">
                    <button type="submit">LOGIN</button>
                </div>
                <button type="button" onClick={() => signOutUser()}>
                    LOGOUT
                </button>
                <p>{JSON.stringify(user, null, 2)}</p>
            </form>
        </main>
    )
}
