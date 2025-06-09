'use client'

import { IMonthFullName, IMonthName, IVacationData, IYearName } from '@/src/models/vacations.model'
import './page.css'
import { useEffect, useState } from 'react'

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

    useEffect(() => {
        initVacationData()
    }, [])

    return (
        <main>
            <header>
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
            </header>
            <div className="table-container">
                {vacations !== undefined &&
                    (['2023', '2024', '2025'] as IYearName[]).map(year => {
                        return (
                            <table key={year + '_table'}>
                                {/* <span className='year-title'>{year}</span> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        {Object.keys(vacations[year]).map(month => {
                                            return <th key={year + '_' + month + '_header'}>{getMonthFullName(getMonthIndex(month as IMonthName))}</th>
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
            </div>
        </main>
    )
}
