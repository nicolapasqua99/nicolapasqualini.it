import { getAdminAuth } from '@/src/lib/firebase-client'
import { cookies, headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse<{} | { error: string }>> {
    const authorization = (await headers()).get('Authorization')
    try {
        if (authorization?.startsWith('Bearer ')) {
            const idToken = authorization.split('Bearer ')[1]
            const decodedToken = await getAdminAuth().verifyIdToken(idToken)
            if (decodedToken) {
                //Generate session cookie
                const expiresIn = 60 * 60 * 24 * 5 * 1000
                const sessionCookie = await getAdminAuth().createSessionCookie(idToken, {
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
                ;(await cookies()).set(options)
            }
        }
        return NextResponse.json({}, { status: 200 })
    } catch (error: any) {
        let message = 'An error occurred while setting the session cookie.'
        return NextResponse.json({ error: message }, { status: 500 })
    }
}
