import React, { useContext, useState } from 'react'
import { IMonthInfo, IMonthName, IYearName } from '../model'
import { AuthorizationContext } from '@/src/app/_context/authorization.context'
import styled from 'styled-components'

const CellInput = styled.input`
    width: 100%;
    padding: 6px 0;
    margin: 0;
    text-align: center;
    text-indent: 12px;
    font-weight: 600;
    font-size: 16px;
    font-family: Oxanium, 'Oxanium Fallback';
    border-radius: 8px;
    outline: none;
    border: 4px solid var(--primary);
`

export const CellTableData = styled.td`
    text-align: center;
    font-size: 16px;
    width: 100px;
    font-weight: 600;
    white-space: nowrap;
    color: var(--primary);
    &.updating {
        & ${CellInput} {
            border-color: var(--primary);
        }
    }
    &.just-updated-with-error {
        & ${CellInput} {
            border-color: var(--error-container);
        }
    }
    &.just-updated {
        & ${CellInput} {
            border-color: var(--primary);
        }
    }
    &.past-month {
        opacity: 0.2;
    }
    &.editing {
        opacity: 1;
        border-radius: 8px;
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
`

export default function Cell({
    year,
    month,
    monthIndex,
    dataKey,
    disabled,
    value,
    getCellClassName
}: {
    year: IYearName
    month: IMonthName
    monthIndex: number
    dataKey: keyof IMonthInfo
    disabled: boolean
    value: number
    getCellClassName: (monthIndex: number) => string
}) {
    const [inputValue, setInputValue] = useState(value)
    const [isEditing, setIsEditing] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isJustUpdated, setIsJustUpdated] = useState(false)
    const [isJustUpdatedWithError, setIsJustUpdatedWithError] = useState(false)
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null)

    let authorizationContextValue = useContext(AuthorizationContext)

    async function setVacationDayData(newValue: number) {
        setIsUpdating(true)
        await fetch('/work/vacations/api/set-vacation-value', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authorizationContextValue?.token}`
            },
            body: JSON.stringify({ year, month, dataKey, newValue })
        })
            .then(async response => {
                if (response.ok) {
                    setIsJustUpdated(true)
                    setTimeout(() => {
                        setIsJustUpdated(false)
                        setIsEditing(false)
                        setIsUpdating(false)
                    }, 2000)
                    console.log('Updated vacation data:', await response.json())
                } else {
                    setIsJustUpdatedWithError(true)
                    setTimeout(() => {
                        setIsJustUpdatedWithError(false)
                        setIsEditing(false)
                        setIsUpdating(false)
                    }, 2000)
                    console.error('Failed to update vacation data:', response)
                }
            })
            .catch(error => {
                console.error('Error setting vacation data:', error)
            })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value
        if (newValue === '') {
            setInputValue(0)
        } else {
            setInputValue(Number(newValue))
        }

        if (typingTimeout) {
            clearTimeout(typingTimeout)
        }

        const timeout = setTimeout(() => {
            setVacationDayData(Number(newValue || 0))
        }, 2000)
        setTypingTimeout(timeout)
    }

    return authorizationContextValue && authorizationContextValue.claims?.role === 'admin' && !disabled ? (
        isEditing ? (
            <CellTableData className={getCellClassName(monthIndex) + ' editing ' + (isJustUpdated ? 'just-updated' : isJustUpdatedWithError ? 'just-updated-with-error' : isUpdating ? 'updating' : '')}>
                <CellInput
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                    autoFocus
                    disabled={isJustUpdated || isJustUpdatedWithError || isUpdating}
                    onKeyDown={e => {
                        if (e.key === 'Escape' || e.key === 'Enter') {
                            setIsEditing(false)
                            if (typingTimeout) {
                                clearTimeout(typingTimeout)
                            }
                            if (e.key === 'Enter') {
                                setVacationDayData(Number(inputValue))
                            } else {
                                setInputValue(value)
                            }
                        }
                    }}
                />
            </CellTableData>
        ) : (
            <CellTableData onClick={() => setIsEditing(true)} className={getCellClassName(monthIndex)} style={{ cursor: 'pointer', padding: isEditing ? '0px' : '12px 0px' }}>
                {inputValue}
            </CellTableData>
        )
    ) : (
        <CellTableData className={getCellClassName(monthIndex)} style={{ padding: '12px 0px' }}>
            {inputValue}
        </CellTableData>
    )
}
