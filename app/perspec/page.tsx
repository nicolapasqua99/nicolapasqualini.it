'use client'
import React from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'
import Title from './title'
import Navbar from './navbar'
import './page.css'

const Header = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(8vh + 4rem);
    & div {
        width: 100%;
        height: 100%;
    }
`
const Center = styled.div`
    background-color: var(--primary);
    width: 4rem;
    height: 4rem;
`
const Line = styled.div`
    background-color: var(--primary);
    width: 2rem;
    height: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top left;
`

interface PageState {
    angle: number
}

class Page extends React.Component {
    public rectDim: React.RefObject<HTMLDivElement>
    public state: PageState

    constructor(props: any) {
        super(props)
        this.rectDim = React.createRef()
        this.state = {
            angle: 30
        }
    }

    updateAngle(): void {
        let angle
        let width = 100
        let height = 100
        if (this.rectDim.current) {
            width = this.rectDim.current.offsetWidth
            height = this.rectDim.current.offsetHeight
        }
        angle = (180 - Math.sqrt((width * width) + (height * height)))/2
        this.setState({ 
            angle: angle
        })
    }

    componentDidMount() {
        let angle
        let width = 100
        let height = 100
        if (this.rectDim.current) {
            width = this.rectDim.current.offsetWidth
            height = this.rectDim.current.offsetHeight
        }
        angle = (180 - Math.sqrt((width * width) + (height * height)))/2
        this.setState({ 
            angle: angle
        })
        window.addEventListener('resize', this.updateAngle.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateAngle.bind(this))
    }

    render() {
        let styleLeft = {
            transform: 'rotate(' + this.state.angle + 'deg)'
        }
        let styleRight = {
            transform: 'rotate(' + this.state.angle * -1 + 'deg)'
        }
        return (
            <main ref={this.rectDim}>
                {/* <Navbar /> */}
                {/* <Title /> */}
                <Center />
                <Line style={styleLeft} />
                <Line style={styleRight} />
            </main>
        )
    }
}

export default function Portfolio() {
    return <Page></Page>
}
