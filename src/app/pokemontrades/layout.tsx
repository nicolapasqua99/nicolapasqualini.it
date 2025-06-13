import { getServerAuth } from '@/src/lib/firebase-server'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function PokemonTradesLayout({ children }: { children: React.ReactNode }) {
    try {
        const headerList = await headers()
        const currentPath = headerList.get('x-current-path')
        if (currentPath === '/login') {
            return <>{children}</>
        }
        const session = (await cookies()).get('__session')?.value || ''
        if (!session) {
            throw new Error('Missing session cookie')
        }
        let decodedClaims = await getServerAuth().verifySessionCookie(session, true)
        if (!decodedClaims) {
            throw new Error('Missing or invalid claims')
        }
        if (decodedClaims.locals?.role === 'user' && decodedClaims.locals?.section !== 'pokemontrades') {
            throw new Error('Unauthorized access to pokemontrades section')
        }
    } catch (error) {
        redirect('/login')
    }

    return <>{children}</>
}
