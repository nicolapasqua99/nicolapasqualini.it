'use client'

import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { IMonthFullName, IMonthName, IVacationData, IYearName } from '@/src/app/work/vacations/model'

function getMonthName(monthIndex: number): IMonthName {
    let monthNames: IMonthName[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    return monthNames[monthIndex]
}

function getMonthFullName(monthIndex: number): IMonthFullName {
    let monthNames: IMonthFullName[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return monthNames[monthIndex]
}

function getMonthIndex(monthName: IMonthName): number {
    return (
        {
            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            may: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            oct: 9,
            nov: 10,
            dec: 11
        }[monthName] || -1
    )
}

const MainStyledComponent = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: var(--background);
    display: block;
`

const HeaderStyledComponent = styled.main`
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

const TableContainerStyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 4rem;
    table {
        transform: translate(0, 0);
        padding: 6rem;
        margin: 2rem auto;
        background-color: var(--surface-container);
        border-radius: 2rem;
        width: fit-content;
        /* .year-title {
        display: block;
        position: absolute;
        font-size: 54px;
        width: 156px;
        text-align: center;
        padding: 0 12px;
        transform: translateY(-48px);
        font-family: 'Oxanium', sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
    } */
        & thead {
            & th {
                text-align: center;
                font-size: 2rem;
                padding: 1.5rem;
            }
            border-bottom: 2px solid var(--on-surface-variant);
        }
        & tbody {
            & td {
                text-align: center;
                font-size: 16px;
                padding: 12px;
                width: 100px;
                font-weight: 600;
                white-space: nowrap;
                &.past-month {
                    opacity: 0.2;
                }
                &:first-of-type {
                    width: 22rem;
                    display: block;
                    font-weight: 100;
                    text-align: right;
                }
                &:nth-child(even) {
                    background-color: var(--surface-bright);
                }
            }
        }
    }
`

export default function Vacations() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [vacations, setVacations] = useState<IVacationData | undefined>(undefined)
    const [today, setToday] = useState<{ month: IMonthName; year: IYearName; startWorkMonth: IMonthName; startWorkYear: IYearName }>({
        startWorkMonth: getMonthName(5),
        startWorkYear: '2023' as IYearName,
        month: getMonthName(new Date().getMonth()),
        year: new Date().getFullYear().toString() as IYearName
    })
    const [showPermits, setShowPermits] = useState<boolean>(true)
    const [showVacations, setShowVacations] = useState<boolean>(true)

    async function resetVacationData() {
        await fetch('/work/vacations/api/init-db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async response => {
                if (response.ok) {
                    console.log('Initialized vacation data:', await response.json())
                } else {
                    console.error('Failed to reset vacation data:', response.statusText)
                }
            })
            .catch(error => {
                console.error('Error resetting vacation data:', error)
            })
    }

    async function initVacationData() {
        await fetch('/work/vacations/api/get')
            .then(async response => {
                if (response.ok) {
                    const data: IVacationData = await response.json()
                    if (data) {
                        setVacations(data)
                        console.log(data[2025])
                    } else {
                        console.error('No vacation data found.')
                    }
                } else {
                    console.error('Failed to fetch vacation data:', response.statusText)
                }
                setLoaded(true)
            })
            .catch(error => {
                console.error('Error fetching vacation data:', error)
            })
    }

    useEffect(() => {
        initVacationData()
    }, [])

    return (
        <MainStyledComponent>
            <HeaderStyledComponent>
                <h1>Vacations</h1>
                <div>
                    <button className={showVacations ? 'selected' : ''} onClick={() => setShowVacations(!showVacations)}>
                        Ferie
                    </button>
                    <button className={showPermits ? 'selected' : ''} onClick={() => setShowPermits(!showPermits)}>
                        Permessi
                    </button>
                    <button disabled={vacations !== undefined && loaded} onClick={resetVacationData}>
                        Reset Vacations Data
                    </button>
                </div>
            </HeaderStyledComponent>
            <TableContainerStyledComponent>
                {vacations !== undefined &&
                    (['2023', '2024', '2025'] as IYearName[]).map(year => {
                        return (
                            <table key={year + '_table'}>
                                {/* <span className='year-title'>{year}</span> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                            return <th key={year + '_' + month + '_header_' + getMonthName(monthIndex)}>{getMonthFullName(monthIndex)}</th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {showVacations && (
                                        <tr>
                                            <td>Ferie guadagnate</td>
                                            {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                                return (
                                                    <td
                                                        className={
                                                            year === today.year && monthIndex === getMonthIndex(today.month)
                                                                ? 'current-month'
                                                                : year < today.year || (year == today.year && monthIndex < getMonthIndex(today.month))
                                                                ? 'past-month'
                                                                : 'next-month'
                                                        }
                                                        key={year + '_' + month + '_gainedVacationHours'}>
                                                        {vacations[year][month as IMonthName].gainedVacationHours}
                                                    </td>
                                                )
                                                // return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {showPermits && (
                                        <tr>
                                            <td>Permessi guadagnati</td>
                                            {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                                return (
                                                    <td
                                                        className={
                                                            year === today.year && monthIndex === getMonthIndex(today.month)
                                                                ? 'current-month'
                                                                : year < today.year || (year == today.year && monthIndex < getMonthIndex(today.month))
                                                                ? 'past-month'
                                                                : 'next-month'
                                                        }
                                                        key={year + '_' + month + '_gainedPermitHours'}>
                                                        {vacations[year][month as IMonthName].gainedPermitHours}
                                                    </td>
                                                )
                                                // return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {showVacations && (
                                        <tr>
                                            <td>Ferie utilizzate</td>
                                            {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                                return (
                                                    <td
                                                        className={
                                                            year === today.year && monthIndex === getMonthIndex(today.month)
                                                                ? 'current-month'
                                                                : year < today.year || (year == today.year && monthIndex < getMonthIndex(today.month))
                                                                ? 'past-month'
                                                                : 'next-month'
                                                        }
                                                        key={year + '_' + month + '_usedVacationHours'}>
                                                        {vacations[year][month as IMonthName].usedVacationHours}
                                                    </td>
                                                )
                                                // return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {showPermits && (
                                        <tr>
                                            <td>Permessi utilizzati</td>
                                            {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                                return (
                                                    <td
                                                        className={
                                                            year === today.year && monthIndex === getMonthIndex(today.month)
                                                                ? 'current-month'
                                                                : year < today.year || (year == today.year && monthIndex < getMonthIndex(today.month))
                                                                ? 'past-month'
                                                                : 'next-month'
                                                        }
                                                        key={year + '_' + month + '_usedPermitHours'}>
                                                        {vacations[year][month as IMonthName].usedPermitHours}
                                                    </td>
                                                )
                                                // return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {showVacations && (
                                        <tr>
                                            <td>Ferie disponibili</td>
                                            {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                                return (
                                                    <td
                                                        className={
                                                            year === today.year && monthIndex === getMonthIndex(today.month)
                                                                ? 'current-month'
                                                                : year < today.year || (year == today.year && monthIndex < getMonthIndex(today.month))
                                                                ? 'past-month'
                                                                : 'next-month'
                                                        }
                                                        key={year + '_' + month + '_remainingVacationHours'}>
                                                        {vacations[year][month as IMonthName].remainingVacationHours}
                                                    </td>
                                                )
                                                // return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {showPermits && (
                                        <tr>
                                            <td>Permessi disponibili</td>
                                            {Object.keys(vacations[year]).map((month: string, monthIndex: number) => {
                                                return (
                                                    <td
                                                        className={
                                                            year === today.year && monthIndex === getMonthIndex(today.month)
                                                                ? 'current-month'
                                                                : year < today.year || (year == today.year && monthIndex < getMonthIndex(today.month))
                                                                ? 'past-month'
                                                                : 'next-month'
                                                        }
                                                        key={year + '_' + month + '_ramainingPermitHours'}>
                                                        {vacations[year][month as IMonthName].remainingPermitHours}
                                                    </td>
                                                )
                                                // return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )
                    })}
            </TableContainerStyledComponent>
        </MainStyledComponent>
    )
}
