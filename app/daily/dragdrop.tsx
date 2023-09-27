"use client"

import React from 'react'
import styled from 'styled-components'

const DragNDrop = styled.form`
	position: fixed;
	top: 16px;
	left: 35vw;
	width: calc(30vw - 32px);
    height: 32px;
	border: 1px solid black;
	font-size: 16px;
    text-align: center;
    padding: 4px 12px 4px 12px;
    background-color: white;
    color: black;
	display: flex;
	align-items: center;
	justify-content: center;
`

const DragNDropDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: calc(30vw - 8px);
    height: 42px;
`

const TextBox = styled.textarea`
	position: fixed;
	top: 10vh;
	left: 5vw;
	width: calc(90vw - 32px);
	height: calc(75vh - 32px);
	border: 1px solid black;
	resize: none;
	padding: 16px;
	border-radius: 8px;
	font-size: 24px;
`

export default function DragDropFile() {
	// drag state
	const [dragActive, setDragActive] = React.useState(true)
	const [text, setText] = React.useState('')

	// handle drag events
	const handleDrag = function (e: any) {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true)
		} else if (e.type === 'dragleave') {
			setDragActive(false)
		}
	}

	// triggers when file is dropped
	const handleDrop = function (e: any) {
		e.preventDefault()
		e.stopPropagation()
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			e.dataTransfer.files[0].text().then((text: string) => {
				setText(text)
				setDragActive(false)
			})
		}
	}

	return (
		<>
			<TextBox type="text" name="lastData" id="lastData" value={text} onChange={(e: any) => setText(e.target.value)}/>
			{true && (
				<DragNDrop id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e: any) => e.preventDefault()}>
					<p>Drag and drop your file here</p>
					<DragNDropDiv
						id="drag-file-element"
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}
					></DragNDropDiv>
				</DragNDrop>
			)}
		</>
	)
}
