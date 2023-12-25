import Person from './person'

import { RoomPerson } from '../models/room.person.model'

import './page.css'

export default function Home() {
    const persons: RoomPerson[] = [
        {
            name: 'Leonardo',
            role: 'Mobile',
            show: true
        },
        {
            name: 'Sofia',
            role: 'Frontend',
            show: true
        },
        {
            name: 'Nicola',
            role: 'Frontend',
            show: true
        },
        {
            name: 'Massimo M.',
            role: 'Scada',
            show: true
        },
        {
            name: 'Massimo P.',
            role: 'Backend',
            show: true
        },
        {
            name: 'Biagio',
            role: 'DH',
            show: true
        },
        {
            name: 'Mara',
            role: 'Application Server',
            show: true
        },
        {
            name: 'Marco',
            role: 'Application Server',
            show: true
        },
        {
            name: 'Emiliano',
            role: 'KPI',
            show: true
        },
        {
            name: 'Federico',
            role: 'Backend',
            show: true
        },
        {
            name: 'Ilaria',
            role: 'Scrum Master',
            show: true
        },
        {
            name: 'Cristian',
            role: 'Project Owner',
            show: true
        },
        {
            name: 'Mattia',
            role: 'Test',
            show: true
        },
        {
            name: 'Luca',
            role: 'Test',
            show: false
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
