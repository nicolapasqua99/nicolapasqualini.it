import Person from './person'

import { RoomPerson, RoomPersonsObject } from '../../(utils)/(models)/room.person.model'

import './page.css'

export default function Home() {
    const persons: RoomPersonsObject = {
        mobile: [
            {
                name: 'Leonardo B.',
                show: true,
                priority: 'normal'
            }
        ],
        frontend: [
            {
                name: 'Fabio P.',
                show: true,
                priority: 'normal'
            },
            {
                name: 'Nicola P.',
                show: true,
                priority: 'normal'
            }
        ],
        scada: [
            {
                name: 'Massimo M.',
                show: true,
                priority: 'normal'
            },
            {
                name: 'Alberto C.',
                show: true,
                priority: 'normal'
            }
        ],
        dh: [
            {
                name: 'Biagio',
                show: true,
                priority: 'normal'
            }
        ],
        applicationServer: [

            {
                name: 'Mara R.',
                show: true,
                priority: 'normal'
            },
            {
                name: 'Marco R.',
                show: true,
                priority: 'normal'
            },
            {
                name: 'Massimo P.',
                show: true,
                priority: 'normal'
            }
        ],
        kpi: [
            {
                name: 'Emiliano',
                show: true,
                priority: 'normal'
            }
        ],
        test: [
            {
                name: 'Mattia',
                show: true,
                priority: 'normal'
            },
            {
                name: 'Luca',
                show: false,
                priority: 'normal'
            }
        ],
        scrumMaster: [
            {
                name: 'Stefania',
                show: true,
                priority: 'low'
            }

        ],
        projectOwner: [
            {
                name: 'Cristian',
                show: true,
                priority: 'low'
            }
        ]
    }


    return (
        <main>
            <div className="scrollable">
                <header className="titlebox">
                    <h1 className="title">sprint daily</h1>
                </header>
                <div className="personcontainer">
                    <h2>Organization</h2>
                    <h3>projectOwner</h3>
                    {persons['projectOwner'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                    <h3>scrumMaster</h3>
                    {persons['scrumMaster'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
                <div className="personcontainer">
                    <h2>Arcoda</h2>
                    <h3>frontend</h3>
                    {persons['frontend'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                    <h3>mobile</h3>
                    {persons['mobile'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
                <div className="personcontainer">
                    <h2>Technology</h2>
                    <h3>kpi</h3>
                    {persons['kpi'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                    <h3>dh</h3>
                    {persons['dh'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
                <div className="personcontainer">
                    <h2>Special tech</h2>
                    <h3>test</h3>
                    {persons['test'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
                <div className="personcontainer">
                    <h2>Backend</h2>
                    <h3>applicationServer</h3>
                    {persons['applicationServer'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
                <div className="personcontainer">
                    <h2>Network actualization</h2>
                    <h3>scada</h3>
                    {persons['scada'].map((person: RoomPerson, index: number) => (
                        <Person key={index} index={index} person={person} />
                    ))}
                </div>
            </div>
        </main>
    )
}
