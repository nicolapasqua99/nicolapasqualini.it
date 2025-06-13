'use client'

import { useEffect, useState } from 'react'

import { onValue, ref, set } from 'firebase/database'
import styled from 'styled-components'

import { getClientRealtimeDatabase } from '@/src/lib/firebase-client'

import { RoomPerson } from '@/src/app/work/daily/model'
import { ButtonStyledComponent } from '../../_components/_styled/button'
import Link from 'next/link'

const MainStyledComponent = styled.main`
    width: 100vw;
    height: 100vh;
    background: radial-gradient(var(--surface) 0%, var(--surface) 100%);
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
        color: var(--primary);
    }
    & div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }
`

const PeopleContainerStyledComponent = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 120rem;
    align-content: center;
`

const PersonContainerStyledComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 16rem;
    border-radius: 6rem;
    margin: 2rem;
    transition: 0.6s ease all 0s;
    border: 2px solid var(--primary);
    background-color: var(--primary-container);
    cursor: pointer;
    & span.dot {
        position: absolute;
        width: 4rem;
        height: 0.5rem;
        margin-top: 6.5rem;
        border-radius: 0.5rem;
        transition: 0.4s ease all 0.2s;
        background-color: var(--on-primary-container);
        opacity: 1;
    }
    & span.tick {
        opacity: 0;
        position: absolute;
        margin-top: 0rem;
        width: 30px;
        height: 30px;
        clip-path: polygon(0% 70%, 30% 100%, 100% 30%, 85% 15%, 30% 70%, 15% 55%);
        transition: 0.4s ease all 0s;
        background-color: var(--primary);
    }
    & p {
        width: 16rem;
        font-size: 16px;
        text-align: center;
        text-transform: capitalize;
        color: var(--on-primary-container);
        opacity: 1;
        transition: 0.4s ease all 0.2s;
        position: relative;
        &:first-of-type {
            margin-top: 0rem;
        }
    }
    &:hover,
    &.talked {
        border-radius: 2rem;
        transition: 0.4s ease all 0s;

        & span.dot {
            margin-top: 0rem;
            width: 16rem;
            height: 16rem;
            border-radius: 2rem;
            transition: 0.4s ease all 0s;
        }
        & p {
            transition: 0.4s ease all 0s;
        }
    }
    &:not(.talked):hover {
        & span.dot {
            background-color: var(--primary);
        }
        & p {
            color: var(--on-primary);
        }
    }
    &.talked {
        & span.dot {
            background-color: var(--surface);
            opacity: 0.8;
        }
        & span.tick {
            opacity: 1;
            transition: 0.4s ease all 0.2s;
        }
        & p {
            opacity: 0.2;
        }
    }
`

export default function Home() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [people, setPeople] = useState<RoomPerson[]>([])
    const [canReset, setCanReset] = useState<boolean>(false)

    function toggleTalkedStatus(person: RoomPerson) {
        changeTalkedStatus(person, !person.talked)
    }

    function changeTalkedStatus(person: RoomPerson, newStatus: boolean) {
        const dbRef = ref(getClientRealtimeDatabase(), 'work/daily/people/' + person.name)
        set(dbRef, {
            talked: newStatus,
            desc: person.desc
        })
    }

    function resetPeopleTalked() {
        people.forEach(person => {
            if (person.talked) {
                changeTalkedStatus(person, false)
            }
        })
    }

    useEffect(() => {
        const dbRefLevels = ref(getClientRealtimeDatabase(), 'work/daily/people')

        onValue(dbRefLevels, snapshot => {
            let data: Record<string, { desc: string; talked: boolean }> = snapshot.val()

            setPeople(
                Object.keys(data).map(personName => {
                    return {
                        name: personName,
                        desc: data[personName].desc,
                        talked: data[personName].talked
                    }
                })
            )

            if (Object.values(data).some(person => person.talked)) {
                setCanReset(true)
            } else {
                setCanReset(false)
            }
            if (!loaded) setLoaded(true)
        })
    }, [])

    return (
        <MainStyledComponent>
            <HeaderStyledComponent>
                <h1>Daily</h1>
                <div>
                    <ButtonStyledComponent>
                        <Link href="/login">Homepage</Link>
                    </ButtonStyledComponent>
                </div>
            </HeaderStyledComponent>
            <PeopleContainerStyledComponent>
                {loaded &&
                    people.length > 0 &&
                    people.map(person => (
                        <PersonContainerStyledComponents key={person.name} className={person.talked ? 'talked' : ''} onClick={() => toggleTalkedStatus(person)}>
                            <span className="dot" />
                            <p>{person.name}</p>
                            <p>{person.desc}</p>
                            <span className="tick" />
                        </PersonContainerStyledComponents>
                    ))}
            </PeopleContainerStyledComponent>
            <ButtonStyledComponent disabled={!canReset} onClick={resetPeopleTalked}>
                Reset talked
            </ButtonStyledComponent>
        </MainStyledComponent>
    )
}
