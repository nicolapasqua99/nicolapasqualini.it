import React from 'react'
import { IDateInfo, IMonthInfo, IMonthName, IVacationData, IYearName } from '../model'
import Cell, { CellTableData } from './cell'

export default function Row({
    label,
    dataKey,
    vacations,
    year,
    today,
    totalValue,
    getMonthIndex
}: {
    label: string
    dataKey: keyof IMonthInfo
    vacations: IVacationData
    year: IYearName
    today: IDateInfo
    totalValue: number | string
    getMonthIndex: (month: IMonthName) => number
}) {
    const getCellClassName = (monthIndex: number) => {
        if (year === today.year && monthIndex === getMonthIndex(today.month)) {
            return 'current-month'
        } else if (year < today.year || (year === today.year && monthIndex < getMonthIndex(today.month))) {
            return 'past-month'
        }
        return 'next-month'
    }

    return (
        <tr>
            <CellTableData>{label}</CellTableData>
            {Object.keys(vacations[year].monthsData).map((month: string, monthIndex: number) => {
                return <Cell 
                    year={year} 
                    month={month as IMonthName} 
                    monthIndex={monthIndex} 
                    dataKey={dataKey} 
                    value={vacations[year].monthsData[month as IMonthName][dataKey] as number} 
                    disabled={dataKey === 'remainingVacationHours' || dataKey === 'remainingPermitHours'}
                    getCellClassName={getCellClassName} 
                    key={year + '_' + month + '_' + dataKey}

                    />
            })}
            <CellTableData className={getCellClassName(12)}>{totalValue}</CellTableData>
        </tr>
    )
}
