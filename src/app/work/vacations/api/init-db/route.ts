import { firestore } from '@/src/lib/firebase-server'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse> {
    // TODO: Implement password check
    // let password: string | null = null
    const initData2023 = [
        {
            monthIndex: 'jan',
            monthData: {
                gained_permits: 0,
                gained_vacations: 0,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'feb',
            monthData: {
                gained_permits: 0,
                gained_vacations: 0,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'mar',
            monthData: {
                gained_permits: 0,
                gained_vacations: 0,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'apr',
            monthData: {
                gained_permits: 0,
                gained_vacations: 0,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'may',
            monthData: {
                gained_permits: 0,
                gained_vacations: 0,
                used_permits: 1,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'jun',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'jul',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'aug',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 32
            }
        },
        {
            monthIndex: 'sep',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'oct',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 24,
                used_vacations: 16
            }
        },
        {
            monthIndex: 'nov',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'dec',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 24
            }
        }
    ]
    const initData2024 = [
        {
            monthIndex: 'jan',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 16,
                used_vacations: 16
            }
        },
        {
            monthIndex: 'feb',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 16
            }
        },
        {
            monthIndex: 'mar',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'apr',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 24
            }
        },
        {
            monthIndex: 'may',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 1,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'jun',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 2,
                used_vacations: 32
            }
        },
        {
            monthIndex: 'jul',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'aug',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 2,
                used_vacations: 48
            }
        },
        {
            monthIndex: 'sep',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'oct',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 32,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'nov',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'dec',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 40
            }
        }
    ]
    const initData2025 = [
        {
            monthIndex: 'jan',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 16
            }
        },
        {
            monthIndex: 'feb',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 1,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'mar',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 5.5,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'apr',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 4,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'may',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 64
            }
        },
        {
            monthIndex: 'jun',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 24
            }
        },
        {
            monthIndex: 'jul',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'aug',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'sep',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'oct',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'nov',
            monthData: {
                gained_permits: 8.8,
                gained_vacations: 13.6,
                used_permits: 0,
                used_vacations: 0
            }
        },
        {
            monthIndex: 'dec',
            monthData: {
                gained_permits: 8.4,
                gained_vacations: 13.2,
                used_permits: 0,
                used_vacations: 0
            }
        }
    ]

    await Promise.all(initData2023.map(month => setDoc(doc(firestore, `vacations/2023/months/${month.monthIndex}`), month.monthData))).catch(error => {
        return NextResponse.json({ error }, { status: 500 })
    })
    await Promise.all(initData2024.map(month => setDoc(doc(firestore, `vacations/2024/months/${month.monthIndex}`), month.monthData))).catch(error => {
        return NextResponse.json({ error }, { status: 500 })
    })
    await Promise.all(initData2025.map(month => setDoc(doc(firestore, `vacations/2025/months/${month.monthIndex}`), month.monthData))).catch(error => {
        return NextResponse.json({ error }, { status: 500 })
    })
    return NextResponse.json({}, { status: 200 })
}
