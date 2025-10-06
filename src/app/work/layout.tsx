import { checkIfUserAuthorizedOnVisiting } from '@/src/lib/authorization'
import { redirect } from 'next/navigation'

export default async function WorkLayout({ children }: { children: React.ReactNode }) {
    try {
        await checkIfUserAuthorizedOnVisiting({role: 'user', section: 'work'})
    } catch (error) {
        redirect('/login')
    }

    return <>{children}</>
}
