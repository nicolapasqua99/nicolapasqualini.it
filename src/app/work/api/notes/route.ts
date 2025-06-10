import { getServerFirestore } from '@/src/lib/firebase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const firestoreRef = getServerFirestore()
        const snapshot = await firestoreRef.collection(`notes`).get()

        if (snapshot) {
            let data: any = []
            snapshot.forEach((collectionElement: any) => {
                data.push(collectionElement.data())
            })
            return NextResponse.json({ result: data }, { status: 200 })
        } else {
            return NextResponse.json({ result: 'Data requested not found' }, { status: 500 })
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
