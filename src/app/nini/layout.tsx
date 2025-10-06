import { checkIfUserAuthorizedOnVisiting } from '@/src/lib/authorization'
import { redirect } from 'next/navigation'

export default async function NiniLayout({ children }: { children: React.ReactNode }) {
    try {
        await checkIfUserAuthorizedOnVisiting({ role: 'user', section: 'nini' })
    } catch (error) {
        redirect('/login')
    }

    return <>{children}</>
}
