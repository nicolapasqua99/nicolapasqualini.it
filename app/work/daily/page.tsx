import Person from './person'

import { RoomPerson, RoomPersonsObject } from '../../(utils)/(models)/room.person.model'

import './page.css'

async function getPeopleData() {
    try {
        const res = await fetch(`https://us-central1-nicolapasqualini-portfolio.cloudfunctions.net/getPeopleData`)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

function getRoomPeopleObject(people: RoomPerson[]): Record<string, RoomPerson[]> {
    let roomPeople: Record<string, RoomPerson[]> = {}
    let orderedRoomPeople: Record<string, RoomPerson[]> = {}
    people.forEach((person: RoomPerson) => {
        roomPeople[person.field] = roomPeople[person.field] || []
        roomPeople[person.field].push(person)
    })
    return roomPeople
    // Object.keys(roomPeople)
    //     .sort((a: string, b:string) => roomPeople[a].length < roomPeople[b].length ? 1 : -1)
    //     .forEach((field: string) => orderedRoomPeople[field] = roomPeople[field])
    // return orderedRoomPeople
}

export default async function Home() {
    const response: { result: RoomPerson[] } = await getPeopleData()

    const people: Record<string, RoomPerson[]> = getRoomPeopleObject(response.result)

    return (
        <main>
            <header className="titlebox">
                <h1 className="title">sprint daily</h1>
            </header>
            <div className="scrollable">
                {Object.keys(people).map((field: string) => (
                    <div className="people-container" key={field}>
                        {people[field].map((person: RoomPerson, index: number) => (
                            <Person key={index} index={index} person={person} />
                        ))}
                        <h2 className="field">{field}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}
