import './page.css'
export default function Home() {
  return (
    <>
      <div className='bg'></div>
      {/* <!-- DIV PRINCIPALE --> */}
      <div id='head'>
        {/* <!-- DIV HERO --> */}
        <div
          className='hero'
          id='hero'>
          <div className='hero-bg'>
            {/* <!-- DIV STELLE/NEVE --> */}
            <div className='stars'>
              <div className='small'></div>
              <div className='medium'></div>
              <div className='big'></div>
            </div>
            {/* <!-- DIV TITOLO --> */}
            <div
              className='title'
              id='title'>
              <h1>Hi, I&apos;m Nicola Pasqualini</h1>
              <h3>and this is a page about me and what i have done</h3>
            </div>
          </div>
        </div>
        {/* <!-- NAV SUPERIORE --> */}
        <ul
          id='nav-top'
          className='not-fixed nav-top'>
          <li>
            <a href='#other'>OTHER</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
          <li>
            <a href='#experiences'>EXPERIENCES</a>
          </li>
          <li>
            <a href='#tools'>TOOLS</a>
          </li>
          <li>
            <a href='#projects'>PROJECTS</a>
          </li>
          <li>
            <a href='#skills'>SKILLS</a>
          </li>
          <li>
            <a href='#bio'>BIO</a>
          </li>
        </ul>
        {/* <!-- NAV LATERALE --> */}
        <ul
          id='nav-lat'
          className='fixed nav-lat close'>
          <li>
            <a
              className='ciao'
              href='#bio'>
              BIO
            </a>
          </li>
          <li>
            <a
              className='ciao'
              href='#skills'>
              SKILLS
            </a>
          </li>
          <li>
            <a
              className='ciao'
              href='#projects'>
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className='ciao'
              href='#tools'>
              TOOLS
            </a>
          </li>
          <li>
            <a
              className='ciao'
              href='#experiences'>
              EXPERIENCES
            </a>
          </li>
          <li>
            <a
              className='ciao'
              href='#contact'>
              CONTACT
            </a>
          </li>
          <li>
            <a
              className='ciao'
              href='#other'>
              OTHER
            </a>
          </li>
        </ul>
        {/* <!-- BTN MENU --> */}
        <span
          className='navmove'
          id='navmove'>
          <svg
            className='ham hamRotate ham1'
            viewBox='0 0 100 100'
            width='70'
            id='menu'>
            <path
              className='line top'
              d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
            />
            <path
              className='line middle'
              d='m 30,50 h 40'
            />
            <path
              className='line bottom'
              d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
            />
          </svg>
        </span>
      </div>
      {/* <!-- DIVS CONTENUTO, LOAD SERVONO PER NAVBAR, CONTENT RAGGRUPPA TUTTA UNA SEZIONE-->  */}
      <span
        className='load'
        id='bio'></span>
      <div className='content'>
        {/* <!-- TITOLO --> */}
        <h2 id=''>Bio</h2>
        {/* <!-- FLIPPING CARDS --> */}
        <div className='card cardlineauno'>
          {/* <!-- LATO DAVANTI --> */}
          <div className='side'>
            <img
              src='../img/oldportfolio/student.svg'
              alt='logo università di Trento'
            />
            <p>Student at the University of Trento</p>
          </div>
          {/* <!-- LATO DIETRO --> */}
          <div className='side back'></div>
        </div>
        <div className='card cardlineauno'>
          {/* <!-- LATO DAVANTI --> */}
          <div className='side'>
            <img
              src='../img/oldportfolio/ui.svg'
              alt='logo università di Trento'
            />
            <p>Interface and Technologies of comunication</p>
          </div>
          {/* <!-- LATO DIETRO --> */}
          <div className='side back'></div>
        </div>
        <div className='card cardlineauno'>
          {/* <!-- LATO DAVANTI --> */}
          <div className='side'>
            <img
              src='../img/oldportfolio/ux.svg'
              alt='logo università di Trento'
            />
            <p>UX/UI Lover</p>
          </div>
          {/* <!-- LATO DIETRO --> */}
          <div className='side back'></div>
        </div>
        <div className='card cardlineadue'>
          {/* <!-- LATO DAVANTI --> */}
          <div className='side'>
            <img
              src='../img/oldportfolio/programmer.svg'
              alt='logo università di Trento'
            />
            <p>Geek</p>
          </div>
          {/* <!-- LATO DIETRO --> */}
          <div className='side back'></div>
        </div>
        <div className='card cardlineadue'>
          {/* <!-- LATO DAVANTI --> */}
          <div className='side'>
            <img
              src='../img/oldportfolio/design-book.svg'
              alt='logo università di Trento'
            />
            <p>Someone who love learn new things</p>
          </div>
          {/* <!-- LATO DIETRO --> */}
          <div className='side back'></div>
        </div>
      </div>
      <span
        className='load'
        id='skills'></span>
      <div className='content'>
        <div>
          <h2>Skills</h2>
        </div>
      </div>
      <span
        className='load'
        id='projects'></span>
      <div className='content'>
        <div>
          <h2>Projects</h2>
        </div>
      </div>
      <span
        className='load'
        id='tools'></span>
      <div className='content'>
        <div>
          <h2>Tools</h2>
        </div>
      </div>
      <span
        className='load'
        id='experiences'></span>
      <div className='content'>
        <div>
          <h2>Experiences</h2>
        </div>
      </div>
      <span
        className='load'
        id='contact'></span>
      <div className='content'>
        <div>
          <h2>Contact</h2>
        </div>
      </div>
      <span
        className='load'
        id='other'></span>
      <div className='content'>
        <div>
          <h2>Other</h2>
        </div>
      </div>
    </>
  )
}
