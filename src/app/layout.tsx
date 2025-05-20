import { Metadata } from 'next'
import { Oxanium, Quicksand } from 'next/font/google'
import StyledComponentsRegistry from '../lib/styled-components-registry'
import './globals.css'

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
            <body className={`${quicksand.className} ${oxanium.className}`}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
