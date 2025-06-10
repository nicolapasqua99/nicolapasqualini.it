import { getServerAuth } from '@/src/lib/firebase-server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function WorkLayout({ children }: { children: React.ReactNode }) {
    try {
        const session = (await cookies()).get('__session')?.value || ''
        if (!session) {
            throw new Error()
        }
        let decodedClaims = await getServerAuth().verifySessionCookie(session, true)
        if (!decodedClaims) {
            throw new Error()
        }
    } catch (error) {
        redirect('/login/work')
    }

    return <>{children}</>
}
