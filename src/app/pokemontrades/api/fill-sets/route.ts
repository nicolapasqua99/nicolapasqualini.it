import { addSet, getSets } from '@/dataconnect/dataconnect-generated'
import { IGenericApiResponse } from '@/src/app/model'
import { getServerAuth } from '@/src/lib/firebase-server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { SETS_LIST } from './_data/sets'

// export async function POST(): Promise<NextResponse<IGenericApiResponse | null>> {
//     try {
//         const authorization = (await headers()).get('Authorization')
//         if (authorization?.startsWith('Bearer ')) {
//             const idToken = authorization.split('Bearer ')[1]
//             const decodedTokenClaims = await getServerAuth().verifyIdToken(idToken)
//             if (decodedTokenClaims) {
//                 if (decodedTokenClaims.locals?.role === 'admin') {
//                     let sets = await getSets()
//                     let setsToAdd
//                     if (!sets || sets.data.sets.length === 0) {
//                         setsToAdd = SETS_LIST
//                     } else {
//                         setsToAdd = SETS_LIST.filter(set => !sets.data.sets.some(existingSet => existingSet.code === set.code))
//                     }
//                     await Promise.all(setsToAdd.map(set => addSet(set)))
//                 }
//             }
//         }
//         return NextResponse.json({ errorMsg: null, data: null, code: 0 }, { status: 200 })
//     } catch (error: any) {
//         return NextResponse.json({ errorMsg: error.message, data: null, code: 999 }, { status: 200 })
//     }
// }

export async function GET(): Promise<NextResponse<IGenericApiResponse | null>> {
    return NextResponse.json({ errorMsg: 'NOT IMPLEMENTED', data: null, code: 999 }, { status: 200 })
}
