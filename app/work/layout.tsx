import { auth } from 'firebase-admin'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { initFirebaseApp } from '../lib/firebase-admin'

initFirebaseApp()

export default async function WorkLayout({ children }: { children: React.ReactNode }) {
    const session = cookies().get('session')?.value || ''

    //Validate if the cookie exist in the request
    if (!session) {
        return NextResponse.redirect(new URL('/login/'))
    }

    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true)

    if (!decodedClaims) {
        return NextResponse.redirect(new URL('/login'))
    }

    return <>{ children }</>
}
