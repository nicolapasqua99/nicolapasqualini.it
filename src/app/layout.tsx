import { Metadata } from 'next'
import { Oxanium, Pixelify_Sans, Press_Start_2P, Quicksand, Rubik_Glitch } from 'next/font/google'
import StyledComponentsRegistry from '../lib/styled-components-registry'
import './globals.css'
import { AuthorizationContext, AuthorizationProvider } from './_context/authorization.context'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: 'variable',
    variable: '--font-quicksand'
})

const oxanium = Oxanium({
    subsets: ['latin'],
    weight: 'variable',
    variable: '--font-oxanium'
})

const rubikGlitch = Rubik_Glitch({
    subsets: ['latin'],
    weight: '400',
    variable: '--rubik-glitch'
})

const pressStart2P = Press_Start_2P({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-press-start-2p'
})

const pixelifySans = Pixelify_Sans({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-pixelify-sans'
})

export const metadata: Metadata = {
    title: 'Nicola Pasqualini',
    description: "Hi! I'm Nicola Pasqualini and I love to develop software or design interfaces and think about how they will help people. My biggest passion is to get myself and my work every day better.",
    icons: {
        icon: '/name.png',
        shortcut: '/name.png',
        apple: '/name.png'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${quicksand.className} ${oxanium.className} ${rubikGlitch.variable} ${pressStart2P.variable} ${pixelifySans.variable}`}>
                <StyledComponentsRegistry>
                    <AuthorizationProvider>
                        {children}
                    </AuthorizationProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
