import { checkIfUserAuthorizedOnAPIRequest } from '@/src/lib/authorization'
import { getServerAuth, getServerFirestore } from '@/src/lib/firebase-server'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const authorization = (await headers()).get('Authorization')
        checkIfUserAuthorizedOnAPIRequest(authorization, { role: 'admin', section: null })
        const firestoreRef = getServerFirestore()
        const {
            year,
            month,
            dataKey,
            newValue
        }: {
            year: string
            month: string
            dataKey: string
            newValue: number
        } = await req.json()

        if (!year || !month || !dataKey || newValue === undefined) {
            throw new Error('Missing parameters')
        }

        const newValueNumeric = Number(newValue)

        if (isNaN(newValueNumeric)) {
            throw new Error('Invalid newValue, must be a number')
        }
        switch (dataKey) {
            case 'gainedVacationHours':
                await firestoreRef.doc(`vacations/${year}/months/${month}`).update({ gained_vacations: newValueNumeric })
                break
            case 'gainedPermitHours':
                await firestoreRef.doc(`vacations/${year}/months/${month}`).update({ gained_permits: newValueNumeric })
                break
            case 'usedVacationHours':
                await firestoreRef.doc(`vacations/${year}/months/${month}`).update({ used_vacations: newValueNumeric })
                break
            case 'usedPermitHours':
                await firestoreRef.doc(`vacations/${year}/months/${month}`).update({ used_permits: newValueNumeric })
                break
            default:
                throw new Error('Invalid dataKey')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 })
    }
}
