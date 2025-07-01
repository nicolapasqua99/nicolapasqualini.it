import { addPack, getPacks } from '@/dataconnect/dataconnect-generated'
import { IGenericApiResponse } from '@/src/app/model'
import { getServerAuth } from '@/src/lib/firebase-server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { PACKS_LIST } from './_data/packs'

export const dynamic = 'force-static';

// export async function POST(): Promise<NextResponse<IGenericApiResponse | null>> {
//     try {
//         const authorization = (await headers()).get('Authorization')
//         if (authorization?.startsWith('Bearer ')) {
//             const idToken = authorization.split('Bearer ')[1]
//             const decodedTokenClaims = await getServerAuth().verifyIdToken(idToken)
//             if (decodedTokenClaims) {
//                 if (decodedTokenClaims.locals?.role === 'admin') {
//                     let packs = await getPacks()
//                     let packsToAdd
//                     if (!packs || packs.data.packs.length === 0) {
//                         packsToAdd = PACKS_LIST
//                     } else {
//                         packsToAdd = PACKS_LIST.filter(pack => !packs.data.packs.some(existingPack => existingPack.displayName === pack.displayName))
//                     }
//                     await Promise.all(packsToAdd.map(pack => addPack(pack)))
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