import {primary, secondary, tertiary} from './colors'

const parallaxBackgroundNavbar = [
    {
        start: '0vh',
        duration: '90vh',
        properties: [
            {
                startValue: tertiary,
                endValue: tertiary,
                property: 'backgroundColor',
            },
        ],
    },
    {
        start: '70vh',
        duration: '20vh',
        properties: [
            {
                startValue: tertiary,
                endValue: secondary,
                property: 'backgroundColor',
            },
        ],
    },
    {
        start: '320vh',
        duration: '20vh',
        properties: [
            {
                startValue: secondary,
                endValue: tertiary,
                property: 'backgroundColor',
            },
        ],
    },
]

const parallaxColorNavbar = [
    {
        start: '0vh',
        duration: '90vh',
        properties: [
            {
                startValue: secondary,
                endValue: tertiary,
                property: 'color',
            },
        ],
    },
    {
        start: '320vh',
        duration: '20vh',
        properties: [
            {
                startValue: tertiary,
                endValue: secondary,
                property: 'color',
            },
            {
                startValue: 0,
                endValue: -115,
                unit: '%',
                property: 'translateX',
            },
        ],
    },
]

const parallaxColorNavbarUnderline = [
    {
        start: '0vh',
        duration: '90vh',
        properties: [
            {
                startValue: secondary,
                endValue: tertiary,
                property: 'backgroundColor',
            },
        ],
    },
    {
        start: '320vh',
        duration: '20vh',
        properties: [
            {
                startValue: tertiary,
                endValue: secondary,
                property: 'backgroundColor',
            },
        ],
    },
]

const firstIcon = [
    {
        start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 3,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 3,
                endValue: 4,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '270vh',
        duration: '30vh',
        properties: [
            {
                startValue: 3,
                endValue: 3,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 4,
                endValue: 28,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '300vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 50,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 30,
                endValue: 32,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
]

const secondIcon = [
    {
        start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 6,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 9,
                endValue: 4,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '270vh',
        duration: '30vh',
        properties: [
            {
                startValue: 6,
                endValue: 6,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 4,
                endValue: 30,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '300vh',
        duration: '50vh',
        properties: [
            {
                startValue: 6,
                endValue: 50,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 30,
                endValue: 40,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
]

const thirdIcon = [
    {
        start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 3,
                endValue: 9,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 15,
                endValue: 4,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '270vh',
        duration: '30vh',
        properties: [
            {
                startValue: 9,
                endValue: 9,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 4,
                endValue: 32,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '300vh',
        duration: '50vh',
        properties: [
            {
                startValue: 9,
                endValue: 50,
                unit: 'vw',
                property: 'translateX',
            },
            {
                startValue: 30,
                endValue: 48,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
]

const parallaxColorIcons = [
    {
        start: '0vh',
        duration: '90vh',
        properties: [
            {
                startValue: secondary,
                endValue: tertiary,
                property: 'fill',
            },
        ],
    },
    {
        start: '320vh',
        duration: '10vh',
        properties: [
            {
                startValue: tertiary,
                endValue: secondary,
                property: 'fill',
            },
        ],
    },
]

let contactsStyles = [
    {
        src: '../img/newportfolio/icons/instagram.svg',
        parallaxPosition: firstIcon,
        parallaxColor: parallaxColorIcons,
        link: 'https://www.instagram.com/nicolapasqua99/',
    },
    {
        src: '../img/newportfolio/icons/linkedin.svg',
        parallaxPosition: secondIcon,
        parallaxColor: parallaxColorIcons,
        link: 'https://www.linkedin.com/in/nicola-pasqualini-27988219a',
    },
    {
        src: '../img/newportfolio/icons/github.svg',
        parallaxPosition: thirdIcon,
        parallaxColor: parallaxColorIcons,
        link: 'https://github.com/nicolapasqua99',
    },
]

export {
    parallaxColorNavbar,
    parallaxColorNavbarUnderline,
    parallaxBackgroundNavbar,
    contactsStyles,
}
