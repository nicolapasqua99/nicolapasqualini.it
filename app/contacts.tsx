import React from 'react'
import styled from 'styled-components'
import {ReactSVG} from 'react-svg'
import {primary, secondary, tertiary} from './configs/colors'

const TitleList = styled.h2`
    position: relative;
    padding-top: 64vh;
    padding-bottom: 2vh;
    left: 0vh;
    width: 100vw;
    line-height: 6rem;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.color || 'black'};
`

const SocialLink = styled.a`
    width: 4vw;
    height: 4vw;
    position: relative;
    left: 48vw;
    display: block;
    &:after {
        content: '';
        position: absolute;
        top: calc(2vw - 1px);
        left: calc(2vw - 1px);
        width: 0;
        height: 0;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: all 0.5s ease-in-out;
    }
    &:hover:after {
        top: calc(-1vw - 2px);
        left: calc(-1vw - 2px);
        width: 6vw;
        height: 6vw;
        border: 2px solid ${(props) => props.color || 'white'};
    }
    & div {
        width: 4vw;
        height: 4vw;
        margin: 6vh 0;
    }
    & svg {
        width: 100%;
        height: 100%;
        & path {
            fill: ${(props) => props.color || 'white'} !important;
        }
    }
`

const Container = styled.div`
    position: relative;
    margin-top: 0vh;
    left: 20vw;
    width: 60vw;
    height: auto;
    line-height: 6rem;
`

const DescContact = styled.h3`
    position: relative;
    top: 2vh;
    left: 0vw;
    margin: auto;
    width: auto;
    line-height: 3.5rem;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.color || 'black'};
`

const Contact = styled.p`
    position: relative;
    padding-top: 5vh;
    padding-bottom: 3vh;
    left: 0vh;
    margin: auto;
    max-width: 50vw;
    line-height: 3rem;
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.color || 'black'};
    & a {
        color: ${(props) => props.color || 'black'};
    }
`

class Contacts extends React.Component {
    state: {
        primaryColor: string
        secondaryColor: string
        tertiaryColor: string
    }
    constructor(props: any) {
        super(props)
        this.state = {
            primaryColor: primary,
            secondaryColor: secondary,
            tertiaryColor: tertiary,
        }
    }

    render() {
        return (
            <>
                <TitleList color={this.state.secondaryColor}>
                    Get in Touch with me on my Social
                </TitleList>
                {/* <SocialLink
                    color={this.state.secondaryColor}
                    target={'blank'}
                    href='https://www.instagram.com/nicolapasqua99/'>
                    <ReactSVG src='../img/newportfolio/icons/instagram.svg' />
                </SocialLink>
                <SocialLink
                    color={this.state.secondaryColor}
                    target={'blank'}
                    href='https://www.linkedin.com/in/nicola-pasqualini-27988219a'>
                    <ReactSVG src='../img/newportfolio/icons/linkedin.svg' />
                </SocialLink>
                <SocialLink
                    color={this.state.secondaryColor}
                    target={'blank'}
                    href='https://github.com/nicolapasqua99'>
                    <ReactSVG src='../img/newportfolio/icons/github.svg' />
                </SocialLink> */}
                <Container>
                    <DescContact color={this.state.secondaryColor}>
                        Or send me an email at
                    </DescContact>
                    <Contact color={this.state.secondaryColor}>
                        <a href='nicolapasqua99@gmail.com'>
                            nicolapasqua99@gmail.com
                        </a>
                    </Contact>
                </Container>
            </>
        )
    }
}

export default Contacts
