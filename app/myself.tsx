import React from 'react'
import styled from 'styled-components'

const MySelfImg = styled.img`
    position: absolute;
    left: 5vw;
    bottom: 0;
    width: 40vw;
    height: calc(78vh - 4rem);
    font-weight: 600;
    font-size: 3rem;
`

const MySelfTitle = styled.h2`
    position: absolute;
    top: 45vh;
    right: 5vw;
    width: 50vw;
    line-height: 6rem;
    font-size: 4.5rem;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.primary || 'black'};
`

const MySelfText = styled.p`
    position: absolute;
    top: 55vh;
    right: 10vw;
    width: 40vw;
    line-height: 4.5rem;
    font-size: 3.5rem;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.primary || 'black'};
`
class MySelf extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <>
                <MySelfImg src='../img/newportfolio/photocolorsoldnew.svg' />
                <MySelfTitle>Who i am</MySelfTitle>
                <MySelfText primary={this.context.primaryColor}>
                    Hi! I&apos;m Nicola Pasqualini and I&apos;m studying
                    Interface and Communication Technology at the University of
                    Trento. I love to develop software or interfaces and think
                    about how they will help people. My biggest passion is to
                    get myself and my work every day better.
                </MySelfText>
            </>
        )
    }
}

export default MySelf
