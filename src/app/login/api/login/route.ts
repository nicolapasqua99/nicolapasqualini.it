import { auth } from '@/src/lib/firebase-server'
import { signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse<{}>> {
    let body = await request.json()
    if (!body || !body.password) {
        return NextResponse.json({ error: 'Password is required' }, { status: 400 })
    } else {
        await signInWithEmailAndPassword(auth, 'daily@stbroom.it', body.password)
            .then(async (userCredentialResponse: UserCredential) => {
                if (!userCredentialResponse) {
                    return NextResponse.json({}, { status: 500 })
                }
                let token = await userCredentialResponse.user.getIdToken()
                await fetch('api/set-token', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(response => {
                        return response
                    })
                    .catch(_ => {
                        return NextResponse.json({}, { status: 500 })
                    })
            })
            .catch(error => {
                if (error.message.includes('auth/invalid-login-credentials')) {
                    return NextResponse.json({ error: 'Invalid login credentials. Please try again.' }, { status: 401 })
                } else {
                    return NextResponse.json({}, { status: 500 })
                }
            })
        return NextResponse.json({}, { status: 500 })
    }
}
