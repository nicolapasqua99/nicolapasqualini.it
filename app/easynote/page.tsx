import './page.css'

export default function Home() {

    return (
        <main>
            <div className="sidebar">
                <div className='header-title-container'>
                    <i className='logo'></i>
                    <h2 className='header-title'>Your Notes</h2>
                </div>
                <div className='new-note-button'>New note</div>
                <p className='note-list-category'>Category 1</p>
                <p className='note-list-element'>Note number 1</p>
                <p className='note-list-element'>Note number 2</p>
                <p className='note-list-element'>Note number 3</p>
                <p className='note-list-element'>Note number 4</p>
                <p className='note-list-category'>Category 2</p>
                <p className='note-list-element'>Note number 1</p>
                <p className='note-list-element'>Note number 2</p>
                <p className='note-list-element'>Note number 3</p>
                <p className='note-list-element'>Note number 4</p>
            </div>
            <div className="textarea-container">
                <div className='header-title-container'>
                    <h2 className='header-title'>Open notes title</h2>
                </div>
            </div>
        </main>
    )
}