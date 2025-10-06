export type IMonthName = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec'

export type IMonthFullName = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'

export type IYearName = '2023' | '2024' | '2025' | '2026'

export interface IDateInfo {
    month: IMonthName
    year: IYearName
    startWorkMonth: IMonthName
    startWorkYear: IYearName
}

export interface IMonthInfo {
    month: IMonthName
    year: IYearName
    gainedVacationHours: number
    gainedPermitHours: number
    usedVacationHours: number
    usedPermitHours: number
    remainingVacationHours: number
    remainingPermitHours: number
}

export type IVacationData = Record<
    IYearName,
    {
        totalGainedVacationHours: number
        totalGainedPermitHours: number
        totalUsedVacationHours: number
        totalUsedPermitHours: number
        monthsData: Record<IMonthName, IMonthInfo>
    }
>
