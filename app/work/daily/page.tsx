'use client'

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
    people.forEach((person: RoomPerson) => {
        roomPeople[person.field] = roomPeople[person.field] || []
        roomPeople[person.field].push(person)
    })
    return roomPeople
}

export default async function Home() {
    const response: { result: RoomPerson[] } = await getPeopleData()

    const people: Record<string, RoomPerson[]> = getRoomPeopleObject(response.result)

    return (
        <main>
            <div className="scrollable">
                <header className="titlebox">
                    <h1 className="title">sprint daily</h1>
                </header>
                {Object.keys(people).map((field: string) => 
                    <div className='personcontainer'>
                        {people[field].map((person: RoomPerson, index: number) => <Person key={index} index={index} person={person} />)}
                        <h2 className="field">{field}</h2>
                    </div>
                
                )}
            </div>
        </main>
    )
}
