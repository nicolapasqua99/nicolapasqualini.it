'use client'

import './page.css'
import { useState } from 'react'

const csvData: string = `Data;Attività;Segnalazione;Ore;Luogo;Commento
28/05/2024;Development;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;8,00;Uffici Arcoda;Aggiornamento STB ad Angular 18
27/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;2,00;Uffici Arcoda;Refinement
27/05/2024;Test;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;6,00;Uffici Arcoda;Aggiornamento STB ad Angular 17
24/05/2024;Development;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;8,00;Smartworking;Aggiornamento STB ad Angular 17
23/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;1,00;Uffici Arcoda;Allineamento room
23/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;0,50;Uffici Arcoda;Footlose
23/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;0,50;Uffici Arcoda;Allineamento
23/05/2024;Development;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;6,00;Uffici Arcoda;Aggiornamento STB ad Angular 17
22/05/2024;Development;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;6,50;Uffici Arcoda;Aggiornamento STB ad Angular 17
22/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;0,50;Uffici Arcoda;Footlose
22/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;1,00;Uffici Arcoda;Allineamento
21/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;6,00;Uffici Arcoda;Analisi storie sprint 87
21/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;2,00;Uffici Arcoda;Planning
20/05/2024;Meeting;Attività ufficio / Generali #29032: Riunioni o Eventi o Fiere;1,00;Uffici Arcoda;Colloquio di valutazione
20/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;7,00;Uffici Arcoda;Preparazione alla rieview, review, retrospective
17/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;4,00;Smartworking;Supporto a Fabio per soluzione problema ricaricamento postgres cp milano
17/05/2024;Test;Phases #57499: Conversione pannelli in Angular 16;4,00;Smartworking;CONVERSIONE PANNELLI IN ANGULAR 16 - Collaudi utente
16/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;1,00;Uffici Arcoda;Tech Corner
16/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;1,00;Uffici Arcoda;Allineamento
16/05/2024;Test;Phases #57499: Conversione pannelli in Angular 16;6,00;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Collaudi utente
15/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;8,00;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello LISTA RTU
14/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;8,00;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello LISTA RTU
13/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;2,00;Uffici Arcoda;Refinement
13/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;6,00;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello LISTA RTU
10/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;4,00;Smartworking;Supporto a Fabio per risoluzione problemi DB Postgres CP-MILANO container 
10/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;4,00;Smartworking;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello EVENTI
09/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;0,50;Uffici Arcoda;Footlose
09/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;1,00;Uffici Arcoda;Allineamento
09/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;6,50;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello EVENTI
08/05/2024;Development;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;4,00;Uffici Arcoda;Fix reset gasp da pannello utente e rilascio su cp-milano
08/05/2024;Release;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;4,00;Uffici Arcoda;Merge storie
07/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;2,00;Uffici Arcoda;Sprint Grooming
07/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;6,00;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello ALLARMI DA ACQUISIRE
06/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;2,00;Uffici Arcoda;Refinement
06/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;6,00;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello ALLARMI DA ACQUISIRE
03/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;8,00;Smartworking;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello ALLARMI DA ACQUISIRE
02/05/2024;Development;Phases #57499: Conversione pannelli in Angular 16;6,75;Uffici Arcoda;CONVERSIONE PANNELLI IN ANGULAR 16 - Pannello ALLARMI DA ACQUISIRE
02/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;0,25;Uffici Arcoda;Allineamento
02/05/2024;Meeting;Agile #57267: EVSTB42_ROOM_OPERATION_STB_Q2_2024;1,00;Uffici Arcoda;Tech Corner`

type ActivityType = 'develop' | 'test' | 'release' | 'meeting' | 'other'

type Location = 'smart' | 'home' | 'external' | 'none'

interface HourInfo {
    day: number
    month: number
    year: number
    hours: number
    type: ActivityType
    issueCode: string
    location: Location
    comment: string
}

function getDay(date: string): number {
    return Number(date.split('/')[0]) || 0
}

function getMonth(date: string): number {
    return Number(date.split('/')[1]) || 0
}

function getYear(date: string): number {
    return Number(date.split('/')[2]) || 0
}

function getActivity(activity: string): ActivityType {
    switch (activity) {
        case 'Development':
            return 'develop'
        case 'Test':
            return 'test'
        case 'Release':
            return 'release'
        case 'Meeting':
            return 'meeting'
        default:
            return 'other'
    }
}

function getHours(hours: string): number {
    return Number(hours.replace(',', '.')) || 0
}

function getLocation(location: string): Location {
    switch (location) {
        case 'Smartworking':
            return 'smart'
        case 'Uffici Arcoda':
            return 'home'
        case 'Sede Cliente':
            return 'external'
        default:
            return 'none'
    }
}

function getValidForPremiality(validForPremiality: string): boolean {
    return validForPremiality === ''
}

export default function Home() {
    let todayDay: number = new Date().getDate()
    let todayMonth: number = new Date().getMonth()
    let todayYear: string = new Date().getFullYear().toString()
    let csvDataObject: Record<string, HourInfo> = {}
    csvData.split('\n').forEach((row: string, rowIndex: number) => {
        if (rowIndex > 0) {
            let [date, activity, issue, hours, location, comment] = row.split(';')
            csvDataObject[date + rowIndex] = {
                day: getDay(date),
                month: getMonth(date),
                year: getYear(date),
                type: getActivity(activity),
                issueCode: issue,
                hours: getHours(hours),
                location: getLocation(location),
                comment: comment
            }
        }
    })

    let head: string[] = csvData.split('\n')[0].split(';')
    head.shift()
    head.unshift('Anno')
    head.unshift('Mese')
    head.unshift('Giorno')
    head.unshift(' ')

    const [selectedLocation, setSelectedLocation] = useState('')
    const [selectedIssue, setSelectedIssue] = useState('')
    const [selectedActivity, setSelectedActivity] = useState('')
    const [selectedDay, setSelectedDay] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)
    const [selectedYear, setSelectedYear] = useState(0)

    return (
        <main>
            <header>
                <div>
                    <i></i>
                    <h2>Worked Hours</h2>
                </div>
            </header>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {head.map(header => (
                                <th key={header + '_head'}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(csvDataObject).map(key => {
                            return (
                                <tr key={key + '_row'}>
                                    <td>{key.substring(0, 10)}</td>
                                    {csvDataObject[key].day === selectedDay && <td className="interactive selected" onClick={() => setSelectedDay(0)}>{csvDataObject[key].day}</td>}
                                    {csvDataObject[key].day !== selectedDay && <td className="interactive" onClick={() => setSelectedDay(csvDataObject[key].day)}>{csvDataObject[key].day}</td>}
                                    {csvDataObject[key].month === selectedMonth && <td className="interactive selected" onClick={() => setSelectedMonth(0)}>{csvDataObject[key].month}</td>}
                                    {csvDataObject[key].month !== selectedMonth && <td className="interactive" onClick={() => setSelectedMonth(csvDataObject[key].month)}>{csvDataObject[key].month}</td>}
                                    {csvDataObject[key].year === selectedYear && <td className="interactive selected" onClick={() => setSelectedYear(0)}>{csvDataObject[key].year}</td>}
                                    {csvDataObject[key].year !== selectedYear && <td className="interactive" onClick={() => setSelectedYear(csvDataObject[key].year)}>{csvDataObject[key].year}</td>}
                                    {csvDataObject[key].type === selectedActivity && <td className="interactive selected" onClick={() => setSelectedActivity('')}>{csvDataObject[key].type}</td>}
                                    {csvDataObject[key].type !== selectedActivity && <td className="interactive" onClick={() => setSelectedActivity(csvDataObject[key].type)}>{csvDataObject[key].type}</td>}
                                    {csvDataObject[key].issueCode === selectedIssue && <td className="interactive selected" onClick={() => setSelectedIssue('')}>{csvDataObject[key].issueCode}</td>}
                                    {csvDataObject[key].issueCode !== selectedIssue && <td className="interactive" onClick={() => setSelectedIssue(csvDataObject[key].issueCode)}>{csvDataObject[key].issueCode}</td>}
                                    <td>{csvDataObject[key].hours}</td>
                                    {csvDataObject[key].location === selectedLocation && <td className="interactive selected" onClick={() => setSelectedLocation('')}>{csvDataObject[key].location}</td>}
                                    {csvDataObject[key].location !== selectedLocation && <td className="interactive" onClick={() => setSelectedLocation(csvDataObject[key].location)}>{csvDataObject[key].location}</td>}
                                    <td><span>{csvDataObject[key].comment}</span></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
