import Person from './person'

import { RoomPerson } from '../../(utils)/(models)/room.person.model'

import './page.css'

export default function Home() {
    const persons: RoomPerson[] = [
        {
            name: 'Leonardo',
            role: 'Mobile',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Fabio',
            role: 'Frontend',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Nicola',
            role: 'Frontend',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Massimo M.',
            role: 'Scada',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Massimo P.',
            role: 'Backend',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Biagio',
            role: 'DH',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Mara',
            role: 'Application Server',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Marco',
            role: 'Application Server',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Emiliano',
            role: 'KPI',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Federico',
            role: 'Backend',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Stefania',
            role: 'Scrum Master',
            show: true,
            priority: 'low'
        },
        {
            name: 'Cristian',
            role: 'Project Owner',
            show: true,
            priority: 'low'
        },
        {
            name: 'Mattia',
            role: 'Test',
            show: true,
            priority: 'normal'
        },
        {
            name: 'Luca',
            role: 'Test',
            show: false,
            priority: 'normal'
        }
    ]

    return (
        <main>
            <div className="scrollable">
                <header className="titlebox">
                    <h1 className="title">sprint daily</h1>
                </header>
                <div className="personcontainer">
                    {persons.map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
            </div>
        </main>
    )
}
