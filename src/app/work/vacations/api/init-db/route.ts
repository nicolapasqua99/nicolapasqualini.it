import { getServerFirestore } from '@/src/lib/firebase-server'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { VACATION_DATA } from './_data/vacation-data'
import { checkIfUserAuthorizedOnAPIRequest } from '@/src/lib/authorization'

export async function POST(request: NextRequest): Promise<NextResponse> {
    const initData2023 = VACATION_DATA.initData2023
    const initData2024 = VACATION_DATA.initData2024
    const initData2025 = VACATION_DATA.initData2025
    const initData2026 = VACATION_DATA.initData2026
    try {
        const authorization = (await headers()).get('Authorization')
        checkIfUserAuthorizedOnAPIRequest(authorization, { role: 'admin', section: null })
        let firestoreRef = getServerFirestore()
        await Promise.all(initData2023.map(month => firestoreRef.doc(`vacations/2023/months/${month.monthIndex}`).set(month.monthData)))
        await Promise.all(initData2024.map(month => firestoreRef.doc(`vacations/2024/months/${month.monthIndex}`).set(month.monthData)))
        await Promise.all(initData2025.map(month => firestoreRef.doc(`vacations/2025/months/${month.monthIndex}`).set(month.monthData)))
        await Promise.all(initData2026.map(month => firestoreRef.doc(`vacations/2026/months/${month.monthIndex}`).set(month.monthData)))
        return NextResponse.json({}, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
