import { firestore } from "@/app/(lib)/firebase"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const collectionData = await firestore().collection('people').get()
        if (collectionData) {
            let data: any = []
            collectionData.forEach((collectionElement: any) => {
                data.push(collectionElement.data())
            })
            return NextResponse.json({ result: data }, { status: 200 })
        } else {
            return NextResponse.json({ result: 'Data requested not found'}, { status: 500 })
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}