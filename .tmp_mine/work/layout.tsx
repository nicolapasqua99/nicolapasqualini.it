import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { adminAuth } from '@/src/lib/firebase-admin'

export default async function WorkLayout({ children }: { children: React.ReactNode }) {
    const session = (await cookies()).get('__session')?.value || ''

    if (!session) {
        redirect('/login/work')
    }

    const decodedClaims = await adminAuth().verifySessionCookie(session, true)

    if (!decodedClaims) {
        redirect('/login/work')
    }

    return <>{children}</>
}
