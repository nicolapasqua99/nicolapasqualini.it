import { auth } from 'firebase-admin'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { initFirebaseApp } from '../(lib)/firebase-admin'
import { redirect } from 'next/navigation'

initFirebaseApp()

export default async function WorkLayout({ children }: { children: React.ReactNode }) {
    const session = cookies().get('__session')?.value || ''

    //Validate if the cookie exist in the request
    if (!session) {
        redirect("/login");
    }

    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true)

    if (!decodedClaims) {
        redirect("/login");
    }

    return <>{ children }</>
}
