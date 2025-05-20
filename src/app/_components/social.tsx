import React from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'
import { ReactSVG } from 'react-svg'
import { contactsStyles, parallaxSocialMessageColor, parallaxSocialMessageRotation } from '../_configs/socialIconsParallaxConfiguration'
import { SocialIcon } from '../../models/social.icons.model'

const Message = styled.p`
    font-family: var(--title-font);
    font-size: 3rem;
    font-weight: 600;
    white-space: nowrap;
`

const MyUl = styled.ul`
    z-index: 20;
    position: fixed;
    bottom: 8rem;
    left: 12rem;
    width: 16rem;
    height: 16rem;
    & div.message-translate-container {
        position: absolute;
        bottom: 5rem;
        left: 0;
        transform-origin: left bottom;
    }
    & div.icon-translate-container {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4rem;
        width: 4rem;
    }
    & svg {
        position: absolute;
        top: 0rem;
        left: 0rem;
        height: 4rem;
        width: 4rem;
        padding: 0rem;
        z-index: 4;
        cursor: pointer;
    }
    & div.icon-translate-container::before {
        content: '';
        position: absolute;
        top: 2.5rem;
        left: 2.5rem;
        height: 0rem;
        width: 0rem;
        background-color: var(--on-primary-container);
        transition: all 0.3s ease-in-out;
    }
    & div.icon-translate-container:nth-of-type(2)::before {
        border-radius: 1.5rem;
    }
    & div.icon-translate-container:nth-of-type(3)::before {
        border-radius: 1rem;
    }
    & div.icon-translate-container:nth-of-type(4)::before {
        border-radius: 5rem;
    }
    & div.icon-translate-container:hover::before {
        top: -0.5rem;
        left: -0.5rem;
        height: 5rem;
        width: 5rem;
    }
    & svg path,
    & svg rect {
        fill: inherit !important;
    }
    & div:nth-of-type(2):hover svg path {
        transition: fill 0.3s ease-in-out;
        fill: #fb3958 !important;
    }
    & div:nth-of-type(3):hover svg path {
        transition: fill 0.3s ease-in-out;
        fill: #0077b7 !important;
    }
    & div:nth-of-type(4):hover svg path {
        transition: fill 0.3s ease-in-out;
        fill: #0d1117 !important;
    }
`

export default function Social() {
    const listItems = contactsStyles.map((item: SocialIcon, index: number) => (
        <Plx className="icon-translate-container" key={index + '_li'} parallaxData={item.parallaxPosition}>
            <a target={'blank'} href={item.link}></a>
            <Plx parallaxData={item.parallaxColor}>
                <ReactSVG src={item.src} />
            </Plx>
        </Plx>
    ))

    return (
        <MyUl>
            <Plx className="message-translate-container" parallaxData={parallaxSocialMessageRotation}>
                <Plx parallaxData={parallaxSocialMessageColor}>
                    <Message>Contact me</Message>
                </Plx>
            </Plx>
            {listItems}
        </MyUl>
    )
}
