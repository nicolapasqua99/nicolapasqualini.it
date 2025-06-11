'use client'

import { useEffect, useState } from 'react'

import { onValue, ref, set } from 'firebase/database'
import styled from 'styled-components'

import { getClientRealtimeDatabase } from '@/src/lib/firebase-client'

import { RoomPerson } from '@/src/app/work/daily/model'

const MainStyledComponent = styled.main`
    width: 100vw;
    height: 100vh;
    background: radial-gradient(var(--background) 0%, var(--background) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeaderStyledComponent = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    & h1 {
        font-size: 3rem;
        font-weight: 600;
    }
    & div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        & button {
            display: flex;
            align-items: center;
            height: 5rem;
            padding: 0rem 2rem;
            margin: 0rem 1rem;
            border: none;
            outline: none;
            box-shadow: none;
            font-size: 2rem;
            font-weight: 600;
            transition: all 0.4s ease;
            border-radius: 2rem;
            background-color: var(--surface-container);
            color: var(--on-surface-variant);
            &.selected {
                border-radius: 1rem;
                background-color: var(--primary);
                color: var(--on-primary);
            }
            &:disabled {
                opacity: 0.3;
            }
        }
    }
`

const PeopleContainerStyledComponent = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    align-content: center;
`

const PersonContainerStyledComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 16rem;
    border-radius: 4rem;
    margin: 2rem;
    transition: 0.4s ease all;
    background-color: var(--primary-container);
    & span.dot {
        position: absolute;
        width: 1rem;
        height: 1rem;
        margin-top: 4rem;
        border-radius: .5rem;
        transition: 0.4s ease all 0.2s;
        background-color: var(--on-primary-container);
    }
    & span.tick {
        opacity: 0;
        position: absolute;
        width: 30px;
        height: 30px;
        clip-path: polygon(0% 70%, 30% 100%, 100% 30%, 85% 15%, 30% 70%, 15% 55%);
        transition: 0.4s ease all 0s;
        background-color: var(--on-primary-container);
    }
    & p {
        width: 16rem;
        font-size: 16px;
        text-align: center;
        text-transform: capitalize;
        color: var(--on-primary-container);
        opacity: 1;
        &:first-of-type {
            margin-top: -2rem;
        }
    }
    &.talked {
        background-color: rgba(var(--primary-container), 0.2);
        & span.dot {
            margin-top: 0rem;
            opacity: .2;
            width: 16rem;
            height: 16rem;
            border-radius: 4rem;
            transition: 0.4s ease all 0s;
        }
        & span.tick {
            opacity: 1;
            transition: 0.4s ease all 0.2s;
            background-color: var(--primary);
        }
        & p {
            opacity: .2;    
        }
    }
    
`

export default function Home() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [people, setPeople] = useState<RoomPerson[]>([])

    function changeTalkedStatus(person: RoomPerson) {
        const dbRef = ref(getClientRealtimeDatabase(), 'work/daily/people/' + person.name)
        console.log(person)
        set(dbRef, {
            talked: !person.talked,
            desc: person.desc
        })
    }

    useEffect(() => {
        const dbRefLevels = ref(getClientRealtimeDatabase(), 'work/daily/people')

        onValue(dbRefLevels, snapshot => {
            let data = snapshot.val()
            console.log(data)

            setPeople(
                Object.keys(data).map(personName => {
                    return {
                        name: personName,
                        desc: data[personName].desc,
                        talked: data[personName].talked
                    }
                })
            )
            if (!loaded) setLoaded(true)
        })
    }, [])

    return (
        <MainStyledComponent>
            <HeaderStyledComponent>
                <h1>Sprint Daily</h1>
            </HeaderStyledComponent>
            <PeopleContainerStyledComponent>
                {loaded &&
                    people.length > 0 &&
                    people.map(person => (
                        <PersonContainerStyledComponents key={person.name} className={person.talked ? 'talked' : ''} onClick={() => changeTalkedStatus(person)}>
                            <span className="tick" />
                            <p>{person.name}</p>
                            <p>{person.desc}</p>
                            <span className="dot" />
                        </PersonContainerStyledComponents>
                    ))}
            </PeopleContainerStyledComponent>
        </MainStyledComponent>
    )
}
