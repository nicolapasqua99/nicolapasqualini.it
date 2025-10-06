'use client'

import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { ButtonStyledComponent } from '../../../_components/_styled/button'
import Link from 'next/link'
import { IBook } from '../model'
import { url } from 'inspector'

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

const StyledBookListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
        font-size: 3rem;
        font-weight: 600;
        color: var(--primary);
        text-align: center;
        margin-bottom: 1rem;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        background-color: var(--surface-container);
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 2rem;
        font-weight: 500;
        color: var(--primary);
        &:hover {
            background-color: var(--surface-bright);
            cursor: pointer;
        }
    }
`

const StyledSearchForm = styled.form`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    & select,
    & input {
        border: none;
        outline: none;
        background-color: var(--surface-variant);
        text-align: center;
        font-size: 2rem;
        padding: 2rem;
        margin: 1rem;
        color: var(--tertiary);
        transition: all 0.4s ease;
        border-radius: 2rem;
        &:focus,
        &:not(:placeholder-shown) {
            color: var(--primary);
            border-radius: 1rem;
        }
    }
    & label {
        width: 100%;
        text-align: center;
        color: var(--primary);
        font-size: 2rem;
        line-height: 2rem;
        transition: all 0.4s ease;
        transform: translateY(5rem);
        pointer-events: none;
        user-select: none;
    }
    & span {
        content: '';
        transition: all 0.4s ease;
        display: block;
        height: 0.5rem;
        background-color: var(--primary);
        width: 10%;
        margin-left: 45%;
        transform: translateY(-2rem);
        border-radius: 2px;
    }
    label:has(+ input:focus),
    label:has(+ input:not(:placeholder-shown)) {
        transform: translateY(0rem);
    }
    & input:focus,
    input:not(:placeholder-shown) {
        & + span {
            width: 88%;
            margin-left: 6%;
        }
    }
`

export default function AddBook() {
    const [bookListResult, setBookListResult] = useState<IBook[]>([])
    const [singleBookResult, setSingleBookResult] = useState<IBook | null>(null)

    async function searchBooks(searchBy: 'isbn' | 'title' | 'author', value: string) {
        let response
        const headers = new Headers({
            'User-Agent': 'NPPortfolioAndTools/1.0 (nicolapasqua99@gmail.com)'
        })
        const options = {
            method: 'GET',
            headers: headers
        }
        const urlParams = new URLSearchParams()
        urlParams.append('fields', 'key, title, author_name, editions')
        switch (searchBy) {
            case 'isbn':
                response = await fetch(`https://openlibrary.org/isbn/${value}.json`, options)
                break
            case 'title':
                urlParams.append('title', value)
                response = await fetch(`https://openlibrary.org/search.json?${urlParams}`, options)
                break
            case 'author':
                urlParams.append('author', value)
                response = await fetch(`https://openlibrary.org/search.json?${urlParams}`, options)
                break
            default:
                break
        }
        if (response && response.ok) {
            const data = await response.json()
            setBookListResult(data.docs || [])
        } else {
            setBookListResult([])
        }
    }

    return (
        <MainStyledComponent>
            <TableContainerStyledComponent>
                <HeaderStyledComponent>
                    <div>
                        <h1>Add Book</h1>
                    </div>
                    <div>
                        <ButtonStyledComponent>
                            <Link href="books">Back to Books</Link>
                        </ButtonStyledComponent>
                        <ButtonStyledComponent>
                            <Link href="/login">Homepage</Link>
                        </ButtonStyledComponent>
                    </div>
                </HeaderStyledComponent>
                <StyledSearchForm
                    onSubmit={async e => {
                        e.preventDefault()
                        const formData = new FormData(e.currentTarget)
                        const searchBy = formData.get('searchBy') as 'author' | 'title' | 'isbn'
                        const value = formData.get('value') as string

                        await searchBooks(searchBy, value)
                    }}>
                    <select name="searchBy" defaultValue="isbn">
                        <option value="isbn">ISBN</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </select>
                    <input name="value" placeholder="value" />
                    <ButtonStyledComponent type="submit">Search</ButtonStyledComponent>
                </StyledSearchForm>
                {bookListResult && bookListResult.length > 0 && (
                    <StyledBookListContainer>
                        <h2>Results</h2>
                        <ul>
                            {bookListResult.map((book: any ) => (
                                <li key={book.isbn}>
                                    <strong>{book.title}</strong> by {book.author_name}
                                </li>
                            ))}
                        </ul>
                    </StyledBookListContainer>
                )}
            </TableContainerStyledComponent>
        </MainStyledComponent>
    )
}
