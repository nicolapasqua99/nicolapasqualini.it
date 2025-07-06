import { IGenericApiResponse } from '@/src/app/model'
import { getServerAuth } from '@/src/lib/firebase-server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(): Promise<NextResponse<IGenericApiResponse | null>> {
    try {
        const authorization = (await headers()).get('Authorization')
        if (authorization?.startsWith('Bearer ')) {
            const idToken = authorization.split('Bearer ')[1]
            const decodedTokenClaims = await getServerAuth().verifyIdToken(idToken)
            if (!process.env.PORTFOLIO_ADMIN_UID || 
                !process.env.PORTFOLIO_WORK_UID || 
                !process.env.PORTFOLIO_POKEMON_TRADES_UID || 
                !process.env.PORTFOLIO_NINI_UID || 
                !process.env.PORTFOLIO_DND_UID) {
                throw new Error('Missing needed secrets')
            }
            if (decodedTokenClaims) {
                if (decodedTokenClaims.uid === process.env.PORTFOLIO_ADMIN_UID) {
                    // Set admin role
                    await getServerAuth().setCustomUserClaims(decodedTokenClaims.uid, {
                        locals: {
                            role: 'admin'
                        }
                    })
                    // Set user role and section for work user
                    await getServerAuth().setCustomUserClaims(process.env.PORTFOLIO_WORK_UID, {
                        locals: {
                            role: 'user',
                            section: 'work'
                        }
                    })
                    // Set user role and section for pokemon trades user
                    await getServerAuth().setCustomUserClaims(process.env.PORTFOLIO_POKEMON_TRADES_UID, {
                        locals: {
                            role: 'user',
                            section: 'pokemontrades'
                        }
                    })
                    // Set user role and section for nini user
                    await getServerAuth().setCustomUserClaims(process.env.PORTFOLIO_NINI_UID, {
                        locals: {
                            role: 'user',
                            section: 'nini'
                        }
                    })
                    // Set user role and section for dnd user
                    await getServerAuth().setCustomUserClaims(process.env.PORTFOLIO_DND_UID, {
                        locals: {
                            role: 'user',
                            section: 'dnd'
                        }
                    })
                }
            }
        }
        return NextResponse.json({ errorMsg: null, data: null, code: 0 }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ errorMsg: error.message, data: null, code: 999 }, { status: 200 })
    }
}
