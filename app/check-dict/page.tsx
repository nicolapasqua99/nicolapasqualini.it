import {child, get, getDatabase, onValue, ref} from 'firebase/database'
import firebase_app from '../../firebase/config'
import './page.css'

export default function Home() {
    const db = getDatabase(firebase_app)
    const dbRef = ref(db)
    let dbValues = {}

    onValue(dbRef, (val) => (dbValues = val.val()))

    return (
        <main>
            <h1>CHECK DICTIONARIES</h1>
            <div>
                <h3>KEYWORD</h3>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
            </div>

            <div>
                <h3>KEYWORD</h3>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
            </div>

            <div>
                <h3>KEYWORD</h3>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
            </div>

            <div>
                <h3>KEYWORD</h3>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
            </div>

            <div>
                <h3>KEYWORD</h3>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
                <p>keyword1</p>
            </div>
        </main>
    )
}
