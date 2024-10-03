'use client'

import './page.css'
import React, { useState } from 'react'

const csvData: string = `Anno;2023;;;;;;;;;;;;2024;;;;;;;;;;;;2025;;;;;;;;;;;
Mese;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;
Ferie maturate;0,00;0,00;0,00;0,00;0,00;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;
Permessi maturati;0,00;0,00;0,00;0,00;0,00;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;
Ferie godute;0,00;0,00;0,00;0,00;0,00;0,00;0,00;32,00;0,00;16,00;0,00;24,00;16,00;16,00;0,00;24,00;0,00;32,00;0,00;48,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;
Permessi goduti;0,00;0,00;0,00;0,00;1,00;0,00;0,00;0,00;0,00;24,00;0,00;0,00;16,00;0,00;0,00;0,00;0,00;2,00;0,00;2,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;`

type IMonthName = 'Gennaio' | 'Febbraio' | 'Marzo' | 'Aprile' | 'Maggio' | 'Giugno' | 'Luglio' | 'Agosto' | 'Settembre' | 'Ottobre' | 'Novembre' | 'Dicembre'

type IYearName = 2023 | 2024 | 2025
interface IMonthInfo {
    month: IMonthName
    year: IYearName
    gainedVacationHours: number
    gainedPermitHours: number
    usedVacationHours: number
    usedPermitHours: number
    totalPermitsAvailable: number
    totalVacationsAvailable: number
}

interface IVacationData {
    startWorkMonth: number
    startWorkYear: IYearName
    vacationData: Record<IYearName, Record<IMonthName, IMonthInfo>> | undefined
}

export default class Home extends React.Component {
    public state: {
        todayMonth: IMonthName
        todayYear: IYearName
        showPermits: boolean
        showVacations: boolean
        vacations: IVacationData
    }

    constructor(props: any) {
        super(props)
        this.state = {
            todayMonth: this.getMonthName(new Date().getMonth()),
            todayYear: new Date().getFullYear() as unknown as IYearName,
            showPermits: true,
            showVacations: true,
            vacations: {
                startWorkMonth: 5,
                startWorkYear: 2023,
                vacationData: undefined
            }
        }
    }

    getMonthName(monthIndex: number): IMonthName {
        let monthNames: IMonthName[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
        return monthNames[monthIndex]
    }

    getMonthIndex(monthName: IMonthName): number {
        return ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'].findIndex((month: string) => month == monthName)
    }

    initVacationData() {
        let vacationData: IVacationData['vacationData'] = {} as unknown as Record<IYearName, Record<IMonthName, IMonthInfo>>
        let csvDataTable: string[][] = []
        let currentYear: IYearName = 2023
        let currentMonth: IMonthName = 'Gennaio'
        let totalPermitsAvailable: number = 0
        let totalVacationsAvailable: number = 0
        csvData.split('\n').forEach((line: string) => csvDataTable.push(line.split(';')))
        if (vacationData) {
            csvDataTable[0].forEach((yearCell: string, indexYearCell: number) => {
                if (indexYearCell === 0) return
                if (yearCell !== '') {
                    currentYear = yearCell as unknown as IYearName
                }
                currentMonth = csvDataTable[1][indexYearCell] as unknown as IMonthName
                if (!vacationData![currentYear]) vacationData[currentYear] = {} as unknown as Record<IMonthName, IMonthInfo>
                totalPermitsAvailable = totalPermitsAvailable + Number(csvDataTable[3][indexYearCell].replace(',', '.')) - Number(csvDataTable[5][indexYearCell].replace(',', '.'))
                totalVacationsAvailable = totalVacationsAvailable + Number(csvDataTable[2][indexYearCell].replace(',', '.')) - Number(csvDataTable[4][indexYearCell].replace(',', '.'))
                vacationData![currentYear]![currentMonth] = {
                    month: currentMonth,
                    year: currentYear,
                    gainedVacationHours: Number(csvDataTable[2][indexYearCell].replace(',', '.')),
                    gainedPermitHours: Number(csvDataTable[3][indexYearCell].replace(',', '.')),
                    usedVacationHours: Number(csvDataTable[4][indexYearCell].replace(',', '.')),
                    usedPermitHours: Number(csvDataTable[5][indexYearCell].replace(',', '.')),
                    totalPermitsAvailable: Math.round(totalPermitsAvailable * 100) / 100,
                    totalVacationsAvailable: Math.round(totalVacationsAvailable * 100) / 100
                }
            })
        }
        this.setState({
            vacations: {
                startWorkMonth: this.state.vacations.startWorkMonth,
                startWorkYear: this.state.vacations.startWorkYear,
                vacationData: vacationData
            }
        })
    }

    componentDidMount(): void {
        this.initVacationData()
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.state)
    }

    render(): React.ReactNode {

        return (
            <main>
                <header>
                    <div>
                        <i></i>
                        <h2>Vacations</h2>
                    </div>
                    <div>
                        {this.state.showVacations && (
                            <span className="active" onClick={() => this.setState({ showVacations: false })}>
                                Ferie
                            </span>
                        )}
                        {!this.state.showVacations && <span onClick={() => this.setState({ showVacations: true })}>Ferie</span>}
                        {this.state.showPermits && (
                            <span className="active" onClick={() => this.setState({ showPermits: false })}>
                                Permessi
                            </span>
                        )}
                        {!this.state.showPermits && <span onClick={() => this.setState({ showPermits: true })}>Permessi</span>}
                    </div>
                </header>
                <div className="table-container">
                    {this.state.vacations.vacationData && [2023, 2024, 2025].map((year: number) => {
                        return (
                            <table key={year + '_table'}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string) => {
                                            return <th key={year + '_' + month + '_header'}>{month}</th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody id={year.toString()}>
                                    {this.state.showVacations && (
                                        <tr>
                                            <td>Ferie guadagnate</td>
                                            {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string, monthIndex: number) => {
                                                if (year < this.state.todayYear)
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedVacationHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex < this.getMonthIndex(this.state.todayMonth))
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedVacationHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex >= this.getMonthIndex(this.state.todayMonth)) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedVacationHours}</td>
                                                else if (year > this.state.todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedVacationHours}</td>
                                                return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {this.state.showPermits && (
                                        <tr>
                                            <td>Permessi guadagnati</td>
                                            {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string, monthIndex: number) => {
                                                if (year < this.state.todayYear)
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedPermitHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex < this.getMonthIndex(this.state.todayMonth))
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedPermitHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex >= this.getMonthIndex(this.state.todayMonth)) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedPermitHours}</td>
                                                else if (year > this.state.todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].gainedPermitHours}</td>
                                                return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {this.state.showVacations && (
                                        <tr>
                                            <td>Ferie godute</td>
                                            {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string, monthIndex: number) => {
                                                if (year < this.state.todayYear)
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedVacationHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex < this.getMonthIndex(this.state.todayMonth))
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedVacationHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex >= this.getMonthIndex(this.state.todayMonth)) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedVacationHours}</td>
                                                else if (year > this.state.todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedVacationHours}</td>
                                                return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}

                                    {this.state.showPermits && (
                                        <tr>
                                            <td>Permessi goduti</td>
                                            {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string, monthIndex: number) => {
                                                if (year < this.state.todayYear)
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedPermitHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex < this.getMonthIndex(this.state.todayMonth))
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedPermitHours}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex >= this.getMonthIndex(this.state.todayMonth)) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedPermitHours}</td>
                                                else if (year > this.state.todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].usedPermitHours}</td>
                                                return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {this.state.showVacations && (
                                        <tr>
                                            <td>Ferie disponibili</td>
                                            {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string, monthIndex: number) => {
                                                if (year < this.state.todayYear)
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalVacationsAvailable}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex < this.getMonthIndex(this.state.todayMonth))
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalVacationsAvailable}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex >= this.getMonthIndex(this.state.todayMonth)) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalVacationsAvailable}</td>
                                                else if (year > this.state.todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalVacationsAvailable}</td>
                                                return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}
                                    {this.state.showPermits && (
                                        <tr>
                                            <td>Permessi disponibili</td>
                                            {Object.keys(this.state.vacations.vacationData![year as unknown as IYearName]).map((month: string, monthIndex: number) => {
                                                if (year < this.state.todayYear)
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalPermitsAvailable}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex < this.getMonthIndex(this.state.todayMonth))
                                                    return (
                                                        <td className="pastMonth" key={year + '_' + month + '_gainedVacationHours'}>
                                                            {this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalPermitsAvailable}
                                                        </td>
                                                    )
                                                else if (year == this.state.todayYear && monthIndex >= this.getMonthIndex(this.state.todayMonth)) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalPermitsAvailable}</td>
                                                else if (year > this.state.todayYear) return <td key={year + '_' + month + '_gainedVacationHours'}>{this.state.vacations.vacationData![year as unknown as IYearName][month as unknown as IMonthName].totalPermitsAvailable}</td>
                                                return <td key={year + '_' + month + '_empty_cell'}></td>
                                            })}
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        )
                    })}
                </div>
            </main >
        )
    }
}
