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
`

const PersonContainerStyledComponents = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: 4rem;
    margin: 2rem;
    background-color: var(--surface);
    color: var(--on-surface-variant);
    transition: 0.4s ease all;
    &.talked {
        background-image: var(--primary);
        color: var(--on-primary);
        & span.dot {
            transition: 0.4s ease all 0s;
            background-color: var(--tertiary-low-opacity);
        }
        & span.tick {
            transition: 0.4s ease all 0.2s;
            background-color: var(--tertiary);
        }
        &::selection {
            color: var(--primary-low-opacity);
        }
    }

    & span.dot {
        transition: 0.4s ease all 0.2s;
        background-color: var(--tertiary);
    }
    & span.tick {
        transition: 0.4s ease all 0s;
        background-color: var(--tertiary-no-opacity);
    }
    &::selection {
        color: var(--tertiary);
    }
    & span.tick {
        position: absolute;
        width: 30px;
        height: 30px;
        clip-path: polygon(0% 70%, 30% 100%, 100% 30%, 85% 15%, 30% 70%, 15% 55%);
    }
    & span.dot {
        width: 40px;
        height: 4px;
        margin: 8px;
        border-radius: 3px;
        transition: 0.4s ease all;
    }
    & p {
        width: 100%;
        font-size: 16px;
        text-align: center;
        text-transform: capitalize;
    }
    ::selection {
        transition: 0.4s ease all;
    }
`

export default function Home() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [people, setPeople] = useState<RoomPerson[]>([])

    function changeTalkedStatus(people: string, newStatus: boolean) {
        const dbRef = ref(getClientRealtimeDatabase(), 'work/daily/people/' + people)
        set(dbRef, {
            talked: newStatus
        })
    }

    // useEffect(() => {
    //     const dbRefLevels = ref(getClientRealtimeDatabase(), 'work/daily/people')

    //     onValue(dbRefLevels, snapshot => {
    //         let data = snapshot.val()
    //         console.log(data)

    //         setPeople(
    //             Object.keys(data).map(personName => {
    //                 return {
    //                     name: personName,
    //                     desc: data[personName].desc,
    //                     talked: data[personName].desc
    //                 }
    //             })
    //         )
    //         if (!loaded) setLoaded(true)
    //     })
    // }, [])

    return (
        <MainStyledComponent>
            <HeaderStyledComponent>
                <h1>Sprint Daily</h1>
            </HeaderStyledComponent>
            <PeopleContainerStyledComponent>
                {loaded &&
                    people.length > 0 &&
                    people.map(person => (
                        <PersonContainerStyledComponents key={person.name} className={person.talked ? 'talked' : ''} onClick={() => changeTalkedStatus(person.name, !person.talked)}>
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
