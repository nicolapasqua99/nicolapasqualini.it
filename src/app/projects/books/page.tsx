'use client'

import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { ButtonStyledComponent } from '../../_components/_styled/button'
import Link from 'next/link'
import { IBook } from './model'
import Table from './_components/table'

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
`

export default function Books() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [books, setBooks] = useState<IBook[]>([])

    async function initBooksData() {
        setBooks([
            {
                id: '1',
                isbn: '978-0143128540',
                title: 'The Art of Code',
                author: 'Jane Doe',
                description: 'A journey into the beauty of programming.',
                categories: ['Programming', 'Technology'],
                publishedDate: '2021-05-10',
                publisher: 'TechBooks Publishing',
                pageCount: 320
            },
            {
                id: '2',
                isbn: '978-0671027032',
                title: 'React in Action',
                author: 'John Smith',
                description: 'Hands-on guide to building web apps with React.',
                categories: ['Web Development', 'JavaScript'],
                publishedDate: '2022-08-15',
                publisher: 'WebDev Press',
                pageCount: 400
            },
            {
                id: '3',
                isbn: '978-0132350884',
                title: 'Clean Code',
                author: 'Robert C. Martin',
                description: 'A handbook of agile software craftsmanship.',
                categories: ['Software Engineering'],
                publishedDate: '2008-08-01',
                publisher: 'Prentice Hall',
                pageCount: 464
            }
        ])
        //     await fetch('/work/vacations/api/get')
        //         .then(async response => {
        //             if (response.ok) {
        //                 const data: IVacationData = await response.json()
        //                 if (data) {
        //                     setBooks(data)
        //                 } else {
        //                     console.error('No vacation data found.')
        //                 }
        //             } else {
        //                 console.error('Failed to fetch vacation data:', response.statusText)
        //             }
        //             setLoaded(true)
        //         })
        //         .catch(error => {
        //             console.error('Error fetching vacation data:', error)
        //         })
    }

    useEffect(() => {
        initBooksData()
    }, [])

    // TODO: Change citation value dinamically using some random word generator or api
    let citation = 'Books Table'

    return (
        <MainStyledComponent>
            <TableContainerStyledComponent>
                <HeaderStyledComponent>
                    <div>
                        <h1>Books</h1>
                    </div>
                    <div>
                        <ButtonStyledComponent>
                            <Link href="books/add">Add Book</Link>
                        </ButtonStyledComponent>
                        <ButtonStyledComponent>
                            <Link href="/login">Homepage</Link>
                        </ButtonStyledComponent>
                    </div>
                </HeaderStyledComponent>
                {books.length > 0 ? (
                    <Table
                        values={books}
                        headers={[
                            { label: 'Title', key: 'title' },
                            { label: 'Author', key: 'author' },
                            { label: 'Description', key: 'description' },
                            { label: 'Categories', key: 'categories' },
                            { label: 'Published Date', key: 'publishedDate' },
                            { label: 'Publisher', key: 'publisher' }
                        ]}
                        id="books-table"
                        citation={citation}
                    />
                ) : (
                    <p>No books available.</p>
                )}
            </TableContainerStyledComponent>
        </MainStyledComponent>
    )
}
