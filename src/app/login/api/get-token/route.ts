import { getAdminAuth } from '@/src/lib/firebase-client'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse<{ isLogged: boolean}>> {
    const session = (await cookies()).get('__session')?.value || ''
    if (!session) {
        return NextResponse.json({ isLogged: false }, { status: 200 })
    }
    return (await getAdminAuth()
        .verifySessionCookie(session, true)
        .then(decodedClaims => {
            return NextResponse.json({ isLogged: true }, { status: 200 })
        })
        .catch(error => {
            return NextResponse.json({ isLogged: false }, { status: 200 })
        }))
}
