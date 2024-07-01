import NoteList from './list'
import './page.css'

interface Note {
    title: string
    content: string
    category: string
}

async function getNotes() {
    try {
        const res = await fetch(`https://us-central1-nicolapasqualini-portfolio.cloudfunctions.net/getNotes`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

export default async function Home() {

    const response: { result: Note[] } = await getNotes()

    return (
        <main>
            <NoteList notes={response.result} />
        </main>
    )
}
