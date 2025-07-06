import { User } from "firebase/auth"
import { cookies, headers } from "next/headers"
import { getServerAuth } from "./firebase-server"

export interface INinoverseClaims {
    role: 'admin' | 'user'
    section: 'work' | 'pokemontrades' | 'nini' | 'dnd'
}

export interface IAuthorizationContext {
    token: string | null
    user: User | null
    claims: INinoverseClaims | null
}

type INeededAuthorization = {
    role: 'user', section: INinoverseClaims['section']
} | {
    role: 'admin', section: null
}

export async function checkIfUserAuthorized(neededAuthorization: INeededAuthorization) {
    const headerList = await headers()
    const currentPath = headerList.get('x-current-path')
    if (currentPath !== '/login') {
        const session = (await cookies()).get('__session')?.value || ''
        if (!session) {
            throw new Error('Missing session cookie')
        }
        let decodedClaims = await getServerAuth().verifySessionCookie(session, true)
        if (!decodedClaims) {
            throw new Error('Missing or invalid claims')
        }
        if (decodedClaims.locals?.role !== 'admin') {
            if (neededAuthorization.role === 'admin') {
                throw new Error('Unauthorized access to admin only page')
            }
        } else if (neededAuthorization.section !== decodedClaims.locals?.section) {
            throw new Error(`Unauthorized access to ${neededAuthorization.section} page`)
        }
    }
}