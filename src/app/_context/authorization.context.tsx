'use client'

import { getClientAuth } from "@/src/lib/firebase-client";
import { onIdTokenChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export interface INinoverseClaims {
    role: 'admin' | 'user'
    section: 'work' | 'pokemontrades'
}

export interface IAuthorizationContext {
    token: string | null
    user: User | null
    claims: INinoverseClaims | null
}

export const AuthorizationContext = createContext<IAuthorizationContext>({
    token: null,
    user: null,
    claims: null
})

export function AuthorizationProvider({ children }: { children: React.ReactNode }) {
    const [currentAuthorization, setCurrentAuthorization] = useState<IAuthorizationContext>({
        token: null,
        user: null,
        claims: null
    })

    useEffect(() => {
        onIdTokenChanged(getClientAuth(), async user => {
            try {
                if (user) {
                    if (!currentAuthorization.user || user.uid != currentAuthorization.user.uid) {
                        const token = await user.getIdTokenResult()
                        const tokenClaims: INinoverseClaims = token.claims.locals as INinoverseClaims
                        if (tokenClaims.role) {
                            await setToken(token.token)
                            setCurrentAuthorization({
                                token: token.token,
                                user: user,
                                claims: tokenClaims
                            })
                        }
                    }
                } else if (currentAuthorization.user) {
                    await deleteToken()
                    setCurrentAuthorization({
                        token: null,
                        user: null,
                        claims: null
                    })
                }
            } catch (error: any) {
                console.error(error)
            }
        })
    }, [currentAuthorization])

    return (
        <AuthorizationContext value={{ ...currentAuthorization }}>{children}</AuthorizationContext>
    )
}

async function setToken(token: string) {
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
