import React, { useContext } from 'react'
import { IBook } from '../model'
import { AuthorizationContext } from '@/src/app/_context/authorization.context'
import styled from 'styled-components'

const StyledTableHeader = styled.th`
    text-align: center;
    font-size: 2rem;
    padding: 1.5rem;
    color: var(--primary);
    white-space: nowrap;
`

export const StyledTableData = styled.td`
    text-align: center;
    font-size: 16px;
    width: 100px;
    font-weight: 600;
    white-space: nowrap;
    color: var(--primary);
    &:nth-child(even) {
        background-color: var(--surface-bright);
    }
`

const StyledTableRow = styled.tr`
    & ${StyledTableHeader} {
        padding: 1rem;
    }
    & ${StyledTableData} {
        padding: 1rem;
    }
`

const StyledTableBody = styled.tbody``

const StyledTableHead = styled.thead`
    border-bottom: 2px solid var(--primary);
`

const StyledTable = styled.table`
    transform: translate(0, 0);
    padding: 6rem;
    margin: 2rem auto;
    background-color: var(--surface-container);
    border-radius: 2rem;
    width: fit-content;
    &::before {
        content: attr(data-citation);
        position: absolute;
        font-size: 12rem;
        transform: translate(-5.5rem, -9.5rem);
        font-weight: 800;
        color: var(--primary);
        opacity: 0.2 !important;
    }
`

export default function Table({
    values,
    headers,
    id,
    citation
}: {
    values: IBook[] // Will contain future types
    headers: {
        label: string
        key: keyof IBook // Will contain future types
    }[],
    id: string
    citation: string
}) {
    let authorizationContextValue = useContext(AuthorizationContext)

    return (
        authorizationContextValue &&
        authorizationContextValue.claims?.role === 'admin' && (
            <StyledTable role="table" id={id} data-citation={citation}>
                <StyledTableHead>
                    <StyledTableRow>
                        {headers.map((header, index) => (
                            <StyledTableHeader key={index}>{header.label}</StyledTableHeader>
                        ))}
                    </StyledTableRow>
                </StyledTableHead>
                <StyledTableBody>
                    {values.map((value, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <StyledTableData key={colIndex}>
                                    {Array.isArray(value[header.key])
                                        ? (value[header.key] as unknown[]).join(', ')
                                        : value[header.key]}
                                </StyledTableData>
                            ))}
                        </StyledTableRow>
                    ))}
                </StyledTableBody>
            </StyledTable>
        )
    )
}
