import { start } from 'repl'
import { getColors } from './colors'

const parallaxFirstSocialIcon = [
    {
        start: '0vh',
        duration: '50vh',
        properties: [
            {
                startValue: 0,
                endValue: -2,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: 0,
                endValue: 2,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    }
]

const parallaxSecondSocialIcon = [
    {
        start: '0vh',
        duration: '25vh',
        properties: [
            {
                startValue: 6,
                endValue: 4,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: 0,
                endValue: -2,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    },
    {
        start: '25vh',
        duration: '25vh',
        properties: [
            {
                startValue: 4,
                endValue: -2,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: -2,
                endValue: -4,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    }
]

const parallaxThirdSocialIcon = [
    {
        start: '0vh',
        duration: '30vh',
        properties: [
            {
                startValue: 12,
                endValue: 8,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: 0,
                endValue: -6,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    },
    {
        start: '30vh',
        duration: '20vh',
        properties: [
            {
                startValue: 8,
                endValue: -2,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: -6,
                endValue: -10,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    }
]

const parallaxSocialIconsColor = [
    {
        start: '0vh',
        duration: '10vh',
        properties: [
            {
                startValue: getColors()['on-primary'],
                endValue: getColors()['on-primary'],
                property: 'fill'
            }
        ]
    },
    {
        start: '10vh',
        duration: '10vh',
        properties: [
            {
                startValue: getColors()['on-primary'],
                endValue: getColors()['on-secondary'],
                property: 'fill'
            }
        ]
    }
]

export const parallaxSocialMessageColor = [
    {
        start: '0vh',
        duration: '10vh',
        properties: [
            {
                startValue: getColors()['on-primary'],
                endValue: getColors()['on-primary'],
                property: 'color'
            }
        ]
    },
    {
        start: '10vh',
        duration: '10vh',
        properties: [
            {
                startValue: getColors()['on-primary'],
                endValue: getColors()['on-secondary'],
                property: 'color'
            }
        ]
    }
]

export const parallaxSocialMessageRotation = [
    {
        start: '0vh',
        duration: '25vh',
        properties: [
            {
                startValue: 0,
                endValue: -35,
                unit: 'deg',
                property: 'rotate'
            },
            {
                startValue: 0,
                endValue: -2,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: 0,
                endValue: 2.5,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    },
    {
        start: '25vh',
        duration: '25vh',
        properties: [
            {
                startValue: -35,
                endValue: -90,
                unit: 'deg',
                property: 'rotate'
            },
            {
                startValue: -2,
                endValue: -3,
                unit: 'rem',
                property: 'translateX'
            },
            {
                startValue: 2.5,
                endValue: 6.5,
                unit: 'rem',
                property: 'translateY'
            }
        ]
    }
] 

export const contactsStyles = [
    {
        src: '../img/newportfolio/icons/instagram.svg',
        parallaxPosition: parallaxFirstSocialIcon,
        parallaxColor: parallaxSocialIconsColor,
        link: 'https://www.instagram.com/nicolapasqua99/'
    },
    {
        src: '../img/newportfolio/icons/linkedin.svg',
        parallaxPosition: parallaxSecondSocialIcon,
        parallaxColor: parallaxSocialIconsColor,
        link: 'https://www.linkedin.com/in/nicola-pasqualini-27988219a'
    },
    {
        src: '../img/newportfolio/icons/github.svg',
        parallaxPosition: parallaxThirdSocialIcon,
        parallaxColor: parallaxSocialIconsColor,
        link: 'https://github.com/nicolapasqua99'
    }
]
