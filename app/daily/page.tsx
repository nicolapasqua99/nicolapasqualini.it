import './page.css'
import Person from './person'

const persons = ['AAAAA', 'BBBBB', 'AAAAAAAAAAAA AAAAAAAAAAAAAAAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA', 'BBBBB', 'AAAAA']

export default function Home() {
    return (
        <main>
            <div className="hcrollable">
                <header className="lateraltitlebox">
                    <h1 className="lateraltitle">sprint daily</h1>
                </header>
                <div className="personcontainer">
                    {persons.map((person, index) => (
                        <Person key={index} person={person} x={index} y={index} />
                    ))}
                </div>
                <div className="personcontainer">
                    {persons.map((person, index) => (
                        <Person key={index} person={person} x={index} y={index} />
                    ))}
                </div>
            </div>
        </main>
    )
}
