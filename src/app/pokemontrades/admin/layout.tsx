import { checkIfUserAuthorizedOnVisiting } from '@/src/lib/authorization'
import { redirect } from 'next/navigation'

export default async function PokemonTradesAdmin({ children }: { children: React.ReactNode }) {
    try {
        await checkIfUserAuthorizedOnVisiting({role: 'admin', section: null})
    } catch (error) {
        redirect('/login')
    }

    return <>{children}</>
}
