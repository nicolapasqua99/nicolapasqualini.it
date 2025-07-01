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

function getEmptyYearObject(years: IYearName[]) {
    let yearObject: IVacationData = {} as IVacationData
    years.forEach(year => {
        yearObject[year] = {
            totalGainedVacationHours: 0,
            totalGainedPermitHours: 0,
            totalUsedVacationHours: 0,
            totalUsedPermitHours: 0,
            monthsData: {} as Record<IMonthName, IMonthInfo>
        }
    })
    return yearObject
}

async function handleYearData(year: IYearName, vacationData: IVacationData, remainingVacationHours: number, remainingPermitHours: number) {
    ;(await getSortedDocs(year)).forEach(doc => {
        remainingVacationHours += doc.documentData.gained_vacations
        remainingVacationHours -= doc.documentData.used_vacations
        remainingPermitHours += doc.documentData.gained_permits
        remainingPermitHours -= doc.documentData.used_permits
        vacationData[year].monthsData[doc.documentId] = {
            month: doc.documentId,
            year: year,
            gainedVacationHours: doc.documentData.gained_vacations,
            gainedPermitHours: doc.documentData.gained_permits,
            usedVacationHours: doc.documentData.used_vacations,
            usedPermitHours: doc.documentData.used_permits,
            remainingVacationHours: Number(remainingVacationHours.toFixed(2)),
            remainingPermitHours: Number(remainingPermitHours.toFixed(2))
        }
        vacationData[year].totalGainedVacationHours = Number((vacationData[year].totalGainedVacationHours + doc.documentData.gained_vacations).toFixed(2))
        vacationData[year].totalUsedVacationHours = Number((vacationData[year].totalUsedVacationHours + doc.documentData.used_vacations).toFixed(2))
        vacationData[year].totalGainedPermitHours = Number((vacationData[year].totalGainedPermitHours + doc.documentData.gained_permits).toFixed(2))
        vacationData[year].totalUsedPermitHours = Number((vacationData[year].totalUsedPermitHours + doc.documentData.used_permits).toFixed(2))
    })
    return [remainingVacationHours, remainingPermitHours]
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    // TODO: Implement password check
    // let password: string | null = null
    let vacationData = getEmptyYearObject(['2023', '2024', '2025', '2026'])

    let remainingVacationHours: number = 0
    let remainingPermitHours: number = 0

    ;[remainingVacationHours, remainingPermitHours] = await handleYearData('2023', vacationData, remainingVacationHours, remainingPermitHours)
    ;[remainingVacationHours, remainingPermitHours] = await handleYearData('2024', vacationData, remainingVacationHours, remainingPermitHours)
    ;[remainingVacationHours, remainingPermitHours] = await handleYearData('2025', vacationData, remainingVacationHours, remainingPermitHours)
    ;[remainingVacationHours, remainingPermitHours] = await handleYearData('2026', vacationData, remainingVacationHours, remainingPermitHours)
    
    return NextResponse.json({ ...vacationData }, { status: 200 })
}
