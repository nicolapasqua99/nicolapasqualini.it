import { IGenericApiResponse } from '@/src/app/model'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(): Promise<NextResponse<IGenericApiResponse>> {
    try {
        const options = {
            name: '__session',
            value: '',
            maxAge: -1
        }

        ;(await cookies()).set(options)
        return NextResponse.json({ errorMsg: null, data: null, code: 0 }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ errorMsg: error.message, data: null, code: 100 }, { status: 200 })
    }
}
