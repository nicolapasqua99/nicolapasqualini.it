import "./page.css"
import styled from "styled-components"
import { saveAs } from "file-saver"
import { DragDropFile } from './dragdrop'
import Person from './Person'

const Title = styled.h1`
  position: fixed;
  top: 8px;
  left: 5vw;
  font-size: 24px;
  text-align: center;
`

const DownloadBtn = styled.button`
  position: fixed;
  margin-top: 24px;
  right: 5vw;
  font-size: 16px;
  text-align: center;
  padding: 4px 12px 4px 12px;
  background-color: white;
  color: black;
  cursor: pointer;
  &:hover{
    background-color: black;
    color: white;
  }
`

const PersonBox = styled.div`
  width: 90vw;
  position: fixed;
  bottom: 5vh;
  left: 5vw;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const persons = ['AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA']

function download() {
  let jobValue = document.getElementById("lastData").value
  let blob = new Blob([jobValue], { type: "text/plain;charset=utf-8" })
  saveAs(blob, "sprint68.txt")
}

export default function Home() {
  return (
    <main>
      <Title>Sprint nr: 68</Title>
      <DownloadBtn onClick={download}>export</DownloadBtn>
      <PersonBox>
      {persons.map((person, index) => 
        <Person key={index} person={person} />
      )}
      </PersonBox>
      <DragDropFile></DragDropFile>
    </main>
  );
}
