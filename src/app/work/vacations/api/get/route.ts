import { getServerFirestore } from '@/src/lib/firebase-server'
import { IMonthInfo, IMonthName, IVacationData, IYearName } from '@/src/app/work/vacations/model'
import { DocumentData, QuerySnapshot } from 'firebase-admin/firestore'
import { collection, documentId, getDocs } from 'firebase/firestore'
import { NextRequest, NextResponse } from 'next/server'

function getMonthIndex(monthName: IMonthName): number {
    return (
        {
            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            may: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            oct: 9,
            nov: 10,
            dec: 11
        }[monthName] || -1
    )
}

async function getSortedDocs(year: IYearName) {
    const firestoreRef = getServerFirestore()
    const snapshot = await firestoreRef.collection(`vacations/${year}/months`).get()
    const mappedDocs = snapshot.docs.map(doc => {
        return {
            documentId: doc.id as IMonthName,
            documentData: doc.data()
        }
    })
    return mappedDocs.sort((a, b) => {
        return getMonthIndex(a.documentId) - getMonthIndex(b.documentId)
    })
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    // TODO: Implement password check
    // let password: string | null = null
    let vacationData: IVacationData = {
        '2023': {} as Record<IMonthName, IMonthInfo>,
        '2024': {} as Record<IMonthName, IMonthInfo>,
        '2025': {} as Record<IMonthName, IMonthInfo>
    } as IVacationData
    let remainingVacationHours: number = 0
    let remainingPermitHours: number = 0
    ;(await getSortedDocs('2023')).forEach(doc => {
        remainingVacationHours += doc.documentData.gained_vacations
        remainingVacationHours -= doc.documentData.used_vacations
        remainingPermitHours += doc.documentData.gained_permits
        remainingPermitHours -= doc.documentData.used_permits
        vacationData['2023'][doc.documentId] = {
            month: doc.documentId,
            year: '2023',
            gainedVacationHours: doc.documentData.gained_vacations,
            gainedPermitHours: doc.documentData.gained_permits,
            usedVacationHours: doc.documentData.used_vacations,
            usedPermitHours: doc.documentData.used_permits,
            remainingVacationHours: Number(remainingVacationHours.toFixed(2)),
            remainingPermitHours: Number(remainingPermitHours.toFixed(2))
        }
    })
    ;(await getSortedDocs('2024')).forEach(doc => {
        remainingVacationHours += doc.documentData.gained_vacations
        remainingVacationHours -= doc.documentData.used_vacations
        remainingPermitHours += doc.documentData.gained_permits
        remainingPermitHours -= doc.documentData.used_permits
        vacationData['2024'][doc.documentId] = {
            month: doc.documentId,
            year: '2024',
            gainedVacationHours: doc.documentData.gained_vacations,
            gainedPermitHours: doc.documentData.gained_permits,
            usedVacationHours: doc.documentData.used_vacations,
            usedPermitHours: doc.documentData.used_permits,
            remainingVacationHours: Number(remainingVacationHours.toFixed(2)),
            remainingPermitHours: Number(remainingPermitHours.toFixed(2))
        }
    })
    ;(await getSortedDocs('2025')).forEach(doc => {
        remainingVacationHours += doc.documentData.gained_vacations
        remainingVacationHours -= doc.documentData.used_vacations
        remainingPermitHours += doc.documentData.gained_permits
        remainingPermitHours -= doc.documentData.used_permits
        vacationData['2025'][doc.documentId] = {
            month: doc.documentId,
            year: '2025',
            gainedVacationHours: doc.documentData.gained_vacations,
            gainedPermitHours: doc.documentData.gained_permits,
            usedVacationHours: doc.documentData.used_vacations,
            usedPermitHours: doc.documentData.used_permits,
            remainingVacationHours: Number(remainingVacationHours.toFixed(2)),
            remainingPermitHours: Number(remainingPermitHours.toFixed(2))
        }
    })
    return NextResponse.json({ ...vacationData }, { status: 200 })
}
