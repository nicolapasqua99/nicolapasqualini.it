import { IGenericApiResponse } from '@/src/app/model'
import { getServerAuth } from '@/src/lib/firebase-server'
import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(): Promise<NextResponse<IGenericApiResponse | null>> {
    try {
        const authorization = (await headers()).get('Authorization')
        if (authorization?.startsWith('Bearer ')) {
            const idToken = authorization.split('Bearer ')[1]
            const decodedToken = await getServerAuth().verifyIdToken(idToken)
            if (decodedToken) {
                const expiresIn = 60 * 60 * 24 * 5 * 1000
                const sessionCookie = await getServerAuth().createSessionCookie(idToken, {
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
        return NextResponse.json({ errorMsg: null, data: null, code: 0 }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ errorMsg: error.message, data: null, code: 100 }, { status: 200 })
    }
}
