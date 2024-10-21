'use client'

import { useState } from 'react'
import './page.css'
import MarkDownComponent from './markdown'

interface Note {
    title: string
    content: string
    category: string
}

export default function NoteList(props: {notes: Note[]}) {
    const [selected, setSelected] = useState(0)

    return (
        <>
            <div className="sidebar">
                <div className="header-title-container">
                    <div className="logo"></div>
                    <h2 className="header-title">Your Notes</h2>
                </div>
                {/* <div className="new-note-button">New note</div> */}
                <div className="note-list">
                    {/* <p className="note-list-category">Category 1</p> */}
                    {props.notes.map((note: Note, index: number) => {
                        return <p className="note-list-element" key={index} onClick={() => setSelected(index)}>{note.title}</p>
                    })}
                </div>
            </div>
            <div className="textarea-container">
                {/* <div className="header-title-container">
                    <h2 className="header-title">{props.notes[selected].title || 'Untitled'}</h2>
                </div> */}
                <div className="tiptap-background"></div>
                {props.notes.map((note: Note, index: number) => {
                    return <MarkDownComponent key={index} content={note.content} selected={selected} index={index} />
                })}
            </div>
        </>
    )
}
