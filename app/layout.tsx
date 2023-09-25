import './globals.css'
import {Quicksand} from 'next/font/google'

const quicksand = Quicksand({subsets: ['latin'], weight: 'variable'})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='icon'
                    href='/name.png'
                    sizes='any'
                /> 
    <title>Nicola Pasqualini</title>
    <meta name="description" content="I am a developer! ">

            </head>
            <body className={quicksand.className}>{children}</body>
        </html>
    )
}
