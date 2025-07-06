import { checkIfUserAuthorized } from '@/src/lib/authorization'
import { redirect } from 'next/navigation'

export default async function DnDLayout({ children }: { children: React.ReactNode }) {
    try {
        await checkIfUserAuthorized({ role: 'user', section: 'dnd' })
    } catch (error) {
        redirect('/login')
    }

    return <>{children}</>
}
