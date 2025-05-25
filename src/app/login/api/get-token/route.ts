import { adminAuth } from '@/src/lib/firebase-admin'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const session = (await cookies()).get('__session')?.value || ''
    if (!session) {
        return NextResponse.json({ isLogged: false }, { status: 200 })
    }
    let response
    await adminAuth()
        .verifySessionCookie(session, true)
        .then(decodedClaims => {
            response = NextResponse.json({ isLogged: true }, { status: 200 })
        })
        .catch(error => {
            response = NextResponse.json({ isLogged: false }, { status: 200 })
        })
    return response

}
