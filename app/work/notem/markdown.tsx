'use client'
import React from 'react'
import Markdown from 'react-markdown';
const markdown = '# Hi, *Pluto*!'

const MarkDownComponent = (props: { content: string; selected: number; index: number }) => {
    if (props.selected === props.index)
        return (
            <>
                <Markdown>{markdown}</Markdown>
            </>
        )
}

export default MarkDownComponent
