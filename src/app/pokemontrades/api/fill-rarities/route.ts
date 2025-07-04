import { addRarity, connectorConfig, getRarities, getRaritiesRef } from '@/dataconnect/dataconnect-generated'
import { IGenericApiResponse } from '@/src/app/model'
import { getServerAuth } from '@/src/lib/firebase-server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { RARITIES_LIST } from './_data/rarities'
import { executeQuery, getDataConnect } from 'firebase/data-connect'
import { initializeApp } from 'firebase/app'

async function isAuthorized(role: 'admin' | 'user', section?: string) {
    const authorization = (await headers()).get('Authorization')
    if (authorization?.startsWith('Bearer ')) {
        const idToken = authorization.split('Bearer ')[1]
        const decodedTokenClaims = await getServerAuth().verifyIdToken(idToken)
        return decodedTokenClaims && decodedTokenClaims.locals?.role === role
    } else return false
}

async function getRaritiesArray() {
    const ref = getRaritiesRef()
    const { data } = await executeQuery(ref)
    return data
}

export async function GET(): Promise<NextResponse<IGenericApiResponse | null>> {
    try {
        if (await isAuthorized('admin')) {
            let rarities = await getRaritiesArray()
            let raritiesToAdd
            if (!rarities || rarities.rarities.length === 0) {
                raritiesToAdd = RARITIES_LIST
            } else {
                raritiesToAdd = RARITIES_LIST.filter(rarity => !rarities.rarities.some(existingRarity => existingRarity.code === rarity.code))
            }
            await Promise.all(raritiesToAdd.map(rarity => addRarity(rarity)))
            return NextResponse.json({ errorMsg: null, data: null, code: 0 }, { status: 200 })
        } else {
            return NextResponse.json({ errorMsg: 'UNATHORIZED', data: null, code: 101 }, { status: 200 })
        }
    } catch (error: any) {
        return NextResponse.json({ errorMsg: error.message, data: null, code: 999 }, { status: 200 })
    }
}
