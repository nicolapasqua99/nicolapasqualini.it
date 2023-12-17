'use client'

import './page.css'

import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/firebase'

const PasswordInputContainer = styled.div`
    width: 20vw;
    height: 34px;
    padding: 10px 10px 10px 10px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
`

const PasswordInput = styled.input`
    width: 20vw;
    height: 34px;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    text-align: center;
    font-size: 24px;
`

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            if (formData.get('psw')) {
                const psw: string = formData.get('psw') as string
                signInWithEmailAndPassword(auth, 'daily@stbroom.it', psw).then((response: any) => {
                    localStorage.setItem('user', JSON.stringify(response.user.uid))
                    console.log(localStorage.getItem('user'))
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
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={onSubmit}>
                <h1>Insert password to continue</h1>
                <PasswordInputContainer>
                    <PasswordInput type="password" name="psw" />
                </PasswordInputContainer>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </main>
    )
}
