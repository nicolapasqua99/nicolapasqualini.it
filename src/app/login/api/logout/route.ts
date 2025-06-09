import { auth } from '@/src/lib/firebase-server';
import { signOut } from 'firebase/auth';
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse<{}>> {
    //Remove the value and expire the cookie
    const options = {
        name: '__session',
        value: '',
        maxAge: -1
    }

    ;(await cookies()).set(options)

    await signOut(auth)
    

    return NextResponse.json({}, { status: 200 })
}
