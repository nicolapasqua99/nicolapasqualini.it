import { adminAuth } from '@/src/lib/firebase-admin'
import { cookies, headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: NextResponse) {
    const authorization = headers().get('Authorization')
    try {
        if (authorization?.startsWith('Bearer ')) {
            const idToken = authorization.split('Bearer ')[1]
            const decodedToken = await adminAuth().verifyIdToken(idToken)
            if (decodedToken) {
                //Generate session cookie
                const expiresIn = 60 * 60 * 24 * 5 * 1000
                const sessionCookie = await adminAuth().createSessionCookie(idToken, {
                    expiresIn
                })
                const options = {
                    name: '__session',
                    value: sessionCookie,
                    maxAge: expiresIn,
                    httpOnly: true,
                    secure: true,
                    expires: new Date(Date.now() + expiresIn),
                    path: '/'
                }
                cookies().set(options)
            }
        }
        return NextResponse.json({}, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    const session = cookies().get('__session')?.value || ''
    if (!session) {
        return NextResponse.json({ isLogged: false }, { status: 401 })
    }
    
    const decodedClaims = await adminAuth().verifySessionCookie(session, true)
    if (!decodedClaims) {
        return NextResponse.json({ isLogged: false }, { status: 401 })
    }

    return NextResponse.json({ isLogged: true }, { status: 200 })
}