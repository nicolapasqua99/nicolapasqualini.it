import './page.css'
import Person from './person'

const persons = [
    {
        name: 'Leonardo',
        role: 'Mobile'
    },
    {
        name: 'Sofia',
        role: 'Frontend'
    },
    {
        name: 'Nicola',
        role: 'Frontend'
    },
    {
        name: 'Massimo M.',
        role: 'Scada'
    },
    {
        name: 'Massimo P.',
        role: 'Backend'
    },
    {
        name: 'NOONE',
        role: 'PLACEHOLDER'
    },
    {
        name: 'Biagio',
        role: 'DH'
    },
    {
        name: 'Mara',
        role: 'Application Server'
    },
    {
        name: 'Marco',
        role: 'Application Server'
    },
    {
        name: 'Emiliano',
        role: 'KPI'
    },
    {
        name: 'Federico',
        role: 'Backend'
    }
]

export default function Home() {
    return (
        <main>
            <div className="scrollable">
                <header className="lateraltitlebox">
                    <h1 className="lateraltitle">sprint daily</h1>
                </header>
                <div className="personcontainer">
                    {persons.map((person, index) => (
                        <Person key={index} person={person} />
                    ))}
                </div>
            </div>
        </main>
    )
}
