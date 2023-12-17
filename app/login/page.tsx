'use client'

import './page.css'

import { FormEvent, useState } from 'react'
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/firebase'

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [key, setKey] = useState<string | null>('Need to login!')

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            if (formData.get('psw')) {
                const psw: string = formData.get('psw') as string
                signInWithEmailAndPassword(auth, 'daily@stbroom.it', psw).then((response: UserCredential) => {
                    localStorage.setItem('user', JSON.stringify(response.user.uid))
                    console.log(localStorage.getItem('user'))
                    setKey(response.user.email)
                })
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <main>
            <h2>Status: {key}</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={onSubmit}>
                <h1>Insert password to continue</h1>
                <div className="passwordinputcontainer">
                    <input className="passwordinput" type="password" name="psw" />
                </div>
                <div className="passwordbuttoncontainer">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Give me what i want!'}
                    </button>
                </div>
            </form>
        </main>
    )
}
