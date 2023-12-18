import './page.css'
import Person from './person'

const persons = [
    {
        name: 'Leonardo',
        context: 'Mobile'
    },
    {
        name: 'Sofia',
        context: 'Frontend'
    },
    {
        name: 'Nicola',
        context: 'Frontend'
    },
    {
        name: 'Massimo M.',
        context: 'Scada'
    },
    {
        name: 'Massimo P.',
        context: 'Backend'
    },
    {
        name: 'Biagio',
        context: 'DH'
    },
    {
        name: 'Mara',
        context: 'Application Server'
    },
    {
        name: 'Marco',
        context: 'Application Server'
    },
    {
        name: 'Emiliano',
        context: 'KPI'
    }
]

const persons_second = [
    {
        name: 'Federico',
        context: 'Backend'
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
                        <Person key={index} person={person} x={index} y={index} />
                    ))}
                </div>
                <div className="personcontainer">
                    {persons_second.map((person, index) => (
                        <Person key={index} person={person} x={index} y={index} />
                    ))}
                </div>
            </div>
        </main>
    )
}
