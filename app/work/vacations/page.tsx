'use client'

import './page.css'
import { useState } from 'react'

const csvData: string = `Anno;2023;;;;;;;;;;;;2024;;;;;;;;;;;;2025;;;;;;;;;;;
Mese;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;
Ferie maturate;0,00;0,00;0,00;0,00;0,00;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;
Permessi maturati;0,00;0,00;0,00;0,00;0,00;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;
Ferie godute;0,00;0,00;0,00;0,00;0,00;0,00;0,00;32,00;0,00;16,00;0,00;24,00;16,00;16,00;0,00;24,00;0,00;32,00;0,00;32,00;0,00;24,00;0,00;32,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;
Permessi goduti;0,00;0,00;0,00;0,00;1,00;0,00;0,00;0,00;0,00;24,00;0,00;0,00;16,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;8,00;16,00;8,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;`

interface MonthInfo {
    monthName: string
    month: string
    year: string
    gainedVacationHours: number
    gainedPermitHours: number
    usedVacationHours: number
    usedPermitHours: number
}

let csvDataObject: Record<string, Record<string, MonthInfo>> = {}

function getTotalVacations(month: number, year: string) {
    let vacations: number = 0
    let yearsArray: string[] = ['2023', '2024', '2025']
    let yearIndexInArray: number = yearsArray.findIndex((yearString: string) => (yearString = year)) + 1
    yearsArray.forEach((yearStringFromArray: string, yearIndex: number) => {
        Object.keys(csvDataObject[yearStringFromArray]).forEach((monthStringFromArray: string, monthIndex: number) => {
            if ((yearIndex == yearIndexInArray && monthIndex <= month) || yearIndex < yearIndexInArray) {
                vacations += csvDataObject[yearStringFromArray][monthStringFromArray].gainedVacationHours
                vacations -= csvDataObject[yearStringFromArray][monthStringFromArray].usedVacationHours
            }
        })
    })
    return vacations.toFixed(2)
}

function getTotalPermits(month: number, year: string) {
    let permits: number = 0
    let yearsArray: string[] = ['2023', '2024', '2025']
    let yearIndexInArray: number = yearsArray.findIndex((yearString: string) => (yearString = year)) + 1
    yearsArray.forEach((yearStringFromArray: string, yearIndex: number) => {
        Object.keys(csvDataObject[yearStringFromArray]).forEach((monthStringFromArray: string, monthIndex: number) => {
            if ((yearIndex == yearIndexInArray && monthIndex <= month) || yearIndex < yearIndexInArray) {
                permits += csvDataObject[yearStringFromArray][monthStringFromArray].gainedPermitHours
                permits -= csvDataObject[yearStringFromArray][monthStringFromArray].usedPermitHours
            }
        })
    })
    return permits.toFixed(2)
}

export default function Home() {
    let csvDataArray: string[][] = []
    csvData.split('\n').forEach((line: string) => csvDataArray.push(line.split(';')))
    let currentYear: string = ''
    let currentMonth: string = ''
    csvDataArray[0].forEach((yearCell: string, indexYearCell: number) => {
        if (indexYearCell === 0) return
        if (yearCell !== '') {
            currentYear = yearCell
        }
        currentMonth = (indexYearCell - 1).toString()
        if (!csvDataObject[currentYear]) csvDataObject[currentYear] = {}
        csvDataObject[currentYear][csvDataArray[1][indexYearCell]] = {
            monthName: csvDataArray[1][indexYearCell],
            month: currentMonth,
            year: currentYear,
            gainedVacationHours: Number(csvDataArray[2][indexYearCell].replace(',', '.')),
            gainedPermitHours: Number(csvDataArray[3][indexYearCell].replace(',', '.')),
            usedVacationHours: Number(csvDataArray[4][indexYearCell].replace(',', '.')),
            usedPermitHours: Number(csvDataArray[5][indexYearCell].replace(',', '.'))
        }
    })

    let todayMonth: number = new Date().getMonth()
    let todayYear: string = new Date().getFullYear().toString()

    const [showPermits, setShowPermits] = useState(true)
    const [showVacations, setShowVacations] = useState(true)

    return (
        <main>
            <header>
                <div>
                    <i></i>
                    <h2>Vacations</h2>
                </div>
                <div>
                    {showVacations && (
                        <span className="active" onClick={() => setShowVacations(false)}>
                            Ferie
                        </span>
                    )}
                    {!showVacations && <span onClick={() => setShowVacations(true)}>Ferie</span>}
                    {showPermits && (
                        <span className="active" onClick={() => setShowPermits(false)}>
                            Permessi
                        </span>
                    )}
                    {!showPermits && <span onClick={() => setShowPermits(true)}>Permessi</span>}
                </div>
            </header>
            <div className="table-container">
                {['2023', '2024', '2025'].map((year: string) => {
                    return (
                        <table key={year + '_table'}>
                            <thead>
                                <tr>
                                    <th></th>
                                    {Object.keys(csvDataObject[year]).map((month: string) => {
                                        return <th key={year + '_' + month + '_header'}>{month}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody id={year}>
                                {showVacations && (
                                    <tr>
                                        <td>Ferie guadagnate</td>
                                        {Object.keys(csvDataObject[year]).map((month: string, monthIndex: number) => {
                                            if (year < todayYear)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                        {csvDataObject[year][month].gainedVacationHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex < todayMonth)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                        {csvDataObject[year][month].gainedVacationHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex >= todayMonth) return <td key={year + '_' + month + '_gainedVacationHours'}>{csvDataObject[year][month].gainedVacationHours}</td>
                                            else if (year > todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{csvDataObject[year][month].gainedVacationHours}</td>
                                            return <td key={year + '_' + month + '_empty_cell'}></td>
                                        })}
                                    </tr>
                                )}
                                {showPermits && (
                                    <tr>
                                        <td>Permessi guadagnati</td>
                                        {Object.keys(csvDataObject[year]).map((month: string, monthIndex: number) => {
                                            if (year < todayYear)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedPermitHours'}>
                                                        {csvDataObject[year][month].gainedPermitHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex < todayMonth)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedPermitHours'}>
                                                        {csvDataObject[year][month].gainedPermitHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex >= todayMonth) return <td key={year + '_' + month + '_gainedPermitHours'}>{csvDataObject[year][month].gainedPermitHours}</td>
                                            else if (year > todayYear) return <td key={year + '_' + month + '_gainedPermitHours'}>{csvDataObject[year][month].gainedPermitHours}</td>
                                            return <td key={year + '_' + month + '_empty_cell'}></td>
                                        })}
                                    </tr>
                                )}
                                {showVacations && (
                                    <tr>
                                        <td>Ferie godute</td>
                                        {Object.keys(csvDataObject[year]).map((month: string, monthIndex: number) => {
                                            if (year < todayYear)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_usedVacationHours'}>
                                                        {csvDataObject[year][month].usedVacationHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex < todayMonth)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_usedVacationHours'}>
                                                        {csvDataObject[year][month].usedVacationHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex >= todayMonth) return <td key={year + '_' + month + '_usedVacationHours'}>{csvDataObject[year][month].usedVacationHours}</td>
                                            else if (year > todayYear) return <td key={year + '_' + month + '_usedVacationHours'}>{csvDataObject[year][month].usedVacationHours}</td>
                                            return <td key={year + '_' + month + '_empty_cell'}></td>
                                        })}
                                    </tr>
                                )}
                                {showPermits && (
                                    <tr>
                                        <td>Permessi goduti</td>
                                        {Object.keys(csvDataObject[year]).map((month: string, monthIndex: number) => {
                                            if (year < todayYear)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_usedPermitHours'}>
                                                        {csvDataObject[year][month].usedPermitHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex < todayMonth)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_usedPermitHours'}>
                                                        {csvDataObject[year][month].usedPermitHours}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex >= todayMonth) return <td key={year + '_' + month + '_usedPermitHours'}>{csvDataObject[year][month].usedPermitHours}</td>
                                            else if (year > todayYear) return <td key={year + '_' + month + '_usedPermitHours'}>{csvDataObject[year][month].usedPermitHours}</td>
                                            return <td key={year + '_' + month + '_empty_cell'}></td>
                                        })}
                                    </tr>
                                )}
                                {showVacations && (
                                    <tr>
                                        <td>Ferie disponibili</td>
                                        {Object.keys(csvDataObject[year]).map((month: string, monthIndex: number) => {
                                            if (year < todayYear)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                        {getTotalVacations(monthIndex, year)}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex < todayMonth)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                        {getTotalVacations(monthIndex, year)}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex >= todayMonth) return <td key={year + '_' + month + '_gainedVacationHours'}>{getTotalVacations(monthIndex, year)}</td>
                                            else if (year > todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{getTotalVacations(monthIndex, year)}</td>
                                            return <td key={year + '_' + month + '_empty_cell'}></td>
                                        })}
                                    </tr>
                                )}
                                {showPermits && (
                                    <tr>
                                        <td>Permessi disponibili</td>
                                        {Object.keys(csvDataObject[year]).map((month: string, monthIndex: number) => {
                                            if (year < todayYear)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                        {getTotalPermits(monthIndex, year)}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex < todayMonth)
                                                return (
                                                    <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                        {getTotalPermits(monthIndex, year)}
                                                    </td>
                                                )
                                            else if (year == todayYear && monthIndex >= todayMonth) return <td key={year + '_' + month + '_gainedVacationHours'}>{getTotalPermits(monthIndex, year)}</td>
                                            else if (year > todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{getTotalPermits(monthIndex, year)}</td>
                                            return <td key={year + '_' + month + '_empty_cell'}></td>
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
