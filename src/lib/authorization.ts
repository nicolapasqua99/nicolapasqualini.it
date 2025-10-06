import { User } from 'firebase/auth'
import { cookies, headers } from 'next/headers'
import { getServerAuth } from './firebase-server'

export interface INinoverseClaims {
    role: 'admin' | 'user'
    section: 'work' | 'pokemontrades' | 'nini' | 'dnd'
}

export interface IAuthorizationContext {
    token: string | null
    user: User | null
    claims: INinoverseClaims | null
}

type INeededAuthorization =
    | {
          role: 'user'
          section: INinoverseClaims['section']
      }
    | {
          role: 'admin'
          section: null
      }

export async function checkIfUserAuthorizedOnVisiting(neededAuthorization: INeededAuthorization) {
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
            } else if (neededAuthorization.section !== decodedClaims.locals?.section) {
                throw new Error(`Unauthorized access to ${neededAuthorization.section} page`)
            }
        }
    }
}

/**
 * This method checks if the user is authorized to access a certain API route.
 * If the user is not authorized, an error is thrown.
 * @param authorizationHeader 
 * @param neededAuthorization 
 */
export async function checkIfUserAuthorizedOnAPIRequest(authorizationHeader: string | null, neededAuthorization: INeededAuthorization){
    if (authorizationHeader?.startsWith('Bearer ')) {
        const idToken = authorizationHeader.split('Bearer ')[1]
        const decodedTokenClaims = await getServerAuth().verifyIdToken(idToken)
        if (!process.env.PORTFOLIO_ADMIN_UID || !process.env.PORTFOLIO_WORK_UID || !process.env.PORTFOLIO_POKEMON_TRADES_UID || !process.env.PORTFOLIO_NINI_UID || !process.env.PORTFOLIO_DND_UID) {
            throw new Error('Missing needed secrets')
        }
        if (decodedTokenClaims) {
            if (decodedTokenClaims.locals?.role !== 'admin') {
                throw new Error('Unauthorized access to Admin API')
            }
        } else {
            throw new Error('Unauthorized access to Admin API')
        }
    } else {
        throw new Error('Unauthorized access to Admin API')
    }
}
