import { checkIfUserAuthorized } from '@/src/lib/authorization'
import { redirect } from 'next/navigation'

export default async function PokemonTradesLayout({ children }: { children: React.ReactNode }) {
    try {
        await checkIfUserAuthorized({role: 'user', section: 'pokemontrades'})
    } catch (error) {
        redirect('/login')
    }

    return <>{children}</>
}
