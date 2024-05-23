import { get } from 'http'
import './page.css'

const csvData: string = `Anno;2023;;;;;;;;;;;;2024;;;;;;;;;;;;2025;;;;;;;;;;;
Mese;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;
Ferie maturate;0,00;0,00;0,00;0,00;0,00;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;13,20;13,60;13,20;
Permessi maturati;0,00;0,00;0,00;0,00;0,00;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;8,80;8,80;8,40;
Ferie godute;0,00;0,00;0,00;0,00;0,00;0,00;0,00;32,00;0,00;16,00;0,00;24,00;16,00;16,00;0,00;24,00;0,00;32,00;0,00;32,00;0,00;24,00;0,00;32,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;
Permessi goduti;0,00;0,00;0,00;0,00;1,00;0,00;0,00;0,00;0,00;24,00;0,00;0,00;16,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;8,00;16,00;8,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;`

interface MonthInfo {
    monthName: string
    year: string
    gainedVacationHours: string
    gainedPermitHours: string
    usedVacationHours: string
    usedPermitHours: string
}

function getTotalUsedVacations(month: string, year: string) {}

export default function Home() {
    let csvDataArray: string[][] = []
    csvData.split('\n').forEach((line: string) => csvDataArray.push(line.split(';')))
    let csvDataObject: Record<string, Record<string, MonthInfo>> = {}
    let currentYear: string = ''
    csvDataArray[0].forEach((yearCell: string, indexYearCell: number) => {
        if (indexYearCell === 0) return
        if (yearCell !== '') {
            currentYear = yearCell
        }
        if (!csvDataObject[currentYear]) csvDataObject[currentYear] = {}
        csvDataObject[currentYear][csvDataArray[1][indexYearCell]] = {
            monthName: csvDataArray[1][indexYearCell],
            year: currentYear,
            gainedVacationHours: csvDataArray[2][indexYearCell],
            gainedPermitHours: csvDataArray[3][indexYearCell],
            usedVacationHours: csvDataArray[4][indexYearCell],
            usedPermitHours: csvDataArray[5][indexYearCell]
        }
    })

    return (
        <main>
            <header>
                <div>
                    <i></i>
                    <h2>Vacations</h2>
                </div>
                <div>
                    <span>Ferie</span>
                    <span>Permessi</span>
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
                                <tr>
                                    <td>Gained Vacations</td>
                                    {Object.keys(csvDataObject[year]).map((month: string) => {
                                        return <td key={year + '_' + month + '_gainedVacationHours'}>{csvDataObject[year][month].gainedVacationHours}</td>
                                    })}
                                </tr>
                                <tr>
                                    <td>Gained Permits</td>
                                    {Object.keys(csvDataObject[year]).map((month: string) => {
                                        return <td key={year + '_' + month + '_gainedPermitHours'}>{csvDataObject[year][month].gainedPermitHours}</td>
                                    })}
                                </tr>
                                <tr>
                                    <td>Used Vacations</td>
                                    {Object.keys(csvDataObject[year]).map((month: string) => {
                                        return <td key={year + '_' + month + '_usedVacationHours'}>{csvDataObject[year][month].usedVacationHours}</td>
                                    })}
                                </tr>
                                <tr>
                                    <td>Used Permits</td>
                                    {Object.keys(csvDataObject[year]).map((month: string) => {
                                        return <td key={year + '_' + month + '_usedPermitHours'}>{csvDataObject[year][month].usedPermitHours}</td>
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </div>
        </main>
    )
}
