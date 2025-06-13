'use client'

import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { IMonthFullName, IMonthName, IVacationData, IYearName } from '@/src/app/work/vacations/model'
import { ButtonStyledComponent } from '../../_components/_styled/button'
import Link from 'next/link'

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

const HeaderStyledComponent = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 8rem 6rem;
    & h1 {
        margin-left: 1rem;
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
        /* &::before {
            content: attr(id);
            position: absolute;
            font-size: 8rem;
            transform: translate(-12.2rem, 1.8rem) rotate(-90deg);
            font-weight: 800;
            color: var(--primary);
        } */
        &::before {
            content: attr(id);
            position: absolute;
            font-size: 12rem;
            transform: translate(-5.5rem, -9.5rem);
            font-weight: 800;
            color: var(--primary);
            opacity: .2 !important;
        }
        &.past-year {
            &::before {
                opacity: 0.2;
            }
        }
        &.current-year,
        &.next-year {
            &::before {
                opacity: 0.8;
            }
        }
        & thead {
            & th {
                text-align: center;
                font-size: 2rem;
                padding: 1.5rem;
                color: var(--primary);
            }
            border-bottom: 2px solid var(--primary);
        }
        & tbody {
            & td {
                text-align: center;
                font-size: 16px;
                padding: 12px;
                width: 100px;
                font-weight: 600;
                white-space: nowrap;
                color: var(--primary);
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

    function toggleShowVacations() {
        if (!showPermits && showVacations) {
            alert('You must select at least one of the two options: Vacations or Permits.')
        } else {
            setShowVacations(!showVacations)
        }
    }

    function toggleShowPermits() {
        if (!showVacations && showPermits) {
            alert('You must select at least one of the two options: Vacations or Permits.')
        } else {
            setShowPermits(!showPermits)
        }
    }

    useEffect(() => {
        initVacationData()
    }, [])

    return (
        <MainStyledComponent>
            <TableContainerStyledComponent>
                <HeaderStyledComponent>
                    <div>
                        <h1>Vacations</h1>
                        <ButtonStyledComponent className={showVacations ? 'selected' : ''} onClick={toggleShowVacations}>
                            Ferie
                        </ButtonStyledComponent>
                        <ButtonStyledComponent className={showPermits ? 'selected' : ''} onClick={toggleShowPermits}>
                            Permessi
                        </ButtonStyledComponent>
                    </div>
                    <div>
                        <ButtonStyledComponent disabled={vacations === undefined && loaded} onClick={resetVacationData}>
                            Reset Vacations Data
                        </ButtonStyledComponent>
                        <ButtonStyledComponent>
                            <Link href="/login">Homepage</Link>
                        </ButtonStyledComponent>
                    </div>
                </HeaderStyledComponent>
                {vacations !== undefined &&
                    (['2026', '2025', '2024', '2023'] as IYearName[]).map(year => {
                        return (
                            <table key={year + '_table'} id={year} className={year === today.year ? 'current-year' : year < today.year ? 'past-year' : 'next-year'}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
                                            return <th key={year + '_' + month + '_header_' + getMonthName(monthIndex)}>{getMonthFullName(monthIndex)}</th>
                                        })}
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {showVacations && (
                                        <tr>
                                            <td>Ferie guadagnate</td>
                                            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
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
                                                        {vacations[year].monthsData[month as IMonthName].gainedVacationHours}
                                                    </td>
                                                )
                                            })}
                                            <td className={year === today.year ? 'current-month' : year < today.year ? 'past-month' : 'next-month'}>{vacations[year].totalGainedVacationHours}</td>
                                        </tr>
                                    )}
                                    {showPermits && (
                                        <tr>
                                            <td>Permessi guadagnati</td>
                                            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
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
                                                        {vacations[year].monthsData[month as IMonthName].gainedPermitHours}
                                                    </td>
                                                )
                                            })}
                                            <td className={year === today.year ? 'current-month' : year < today.year ? 'past-month' : 'next-month'}>{vacations[year].totalGainedPermitHours}</td>
                                        </tr>
                                    )}
                                    {showVacations && (
                                        <tr>
                                            <td>Ferie utilizzate</td>
                                            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
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
                                                        {vacations[year].monthsData[month as IMonthName].usedVacationHours}
                                                    </td>
                                                )
                                            })}
                                            <td className={year === today.year ? 'current-month' : year < today.year ? 'past-month' : 'next-month'}>{vacations[year].totalUsedVacationHours}</td>
                                        </tr>
                                    )}
                                    {showPermits && (
                                        <tr>
                                            <td>Permessi utilizzati</td>
                                            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
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
                                                        {vacations[year].monthsData[month as IMonthName].usedPermitHours}
                                                    </td>
                                                )
                                            })}
                                            <td className={year === today.year ? 'current-month' : year < today.year ? 'past-month' : 'next-month'}>{vacations[year].totalUsedPermitHours}</td>
                                        </tr>
                                    )}
                                    {showVacations && (
                                        <tr>
                                            <td>Ferie disponibili</td>
                                            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
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
                                                        {vacations[year].monthsData[month as IMonthName].remainingVacationHours}
                                                    </td>
                                                )
                                            })}
                                            <td className={year === today.year ? 'current-month' : year < today.year ? 'past-month' : 'next-month'}>---</td>
                                        </tr>
                                    )}
                                    {showPermits && (
                                        <tr>
                                            <td>Permessi disponibili</td>
                                            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
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
                                                        {vacations[year].monthsData[month as IMonthName].remainingPermitHours}
                                                    </td>
                                                )
                                            })}
                                            <td className={year === today.year ? 'current-month' : year < today.year ? 'past-month' : 'next-month'}>---</td>
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
