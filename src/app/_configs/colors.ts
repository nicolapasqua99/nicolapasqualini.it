interface Colors {
    dark: ColorScheme
    light: ColorScheme
}

export interface ColorScheme {
    primary: string
    'surface-tint': string
    'on-primary': string
    'primary-container': string
    'on-primary-container': string
    secondary: string
    'on-secondary': string
    'secondary-container': string
    'on-secondary-container': string
    tertiary: string
    'on-tertiary': string
    'tertiary-container': string
    'on-tertiary-container': string
    error: string
    'on-error': string
    'error-container': string
    'on-error-container': string
    background: string
    'on-background': string
    surface: string
    'on-surface': string
    'surface-variant': string
    'on-surface-variant': string
    outline: string
    'outline-variant': string
    shadow: string
    scrim: string
    'inverse-surface': string
    'inverse-on-surface': string
    'inverse-primary': string
    'primary-fixed': string
    'on-primary-fixed': string
    'primary-fixed-dim': string
    'on-primary-fixed-variant': string
    'secondary-fixed': string
    'on-secondary-fixed': string
    'secondary-fixed-dim': string
    'on-secondary-fixed-variant': string
    'tertiary-fixed': string
    'on-tertiary-fixed': string
    'tertiary-fixed-dim': string
    'on-tertiary-fixed-variant': string
    'surface-dim': string
    'surface-bright': string
    'surface-container-lowest': string
    'surface-container-low': string
    'surface-container': string
    'surface-container-high': string
    'surface-container-highest': string
}

export function getColors(): ColorScheme {
    const COLORS: Colors = {
        dark: {
            primary: 'rgb(138, 214, 183)',
            'surface-tint': 'rgb(138, 214, 183)',
            'on-primary': 'rgb(0, 56, 41)',
            'primary-container': 'rgb(0, 81, 60)',
            'on-primary-container': 'rgb(165, 242, 211)',
            secondary: 'rgb(179, 204, 192)',
            'on-secondary': 'rgb(30, 53, 44)',
            'secondary-container': 'rgb(53, 76, 66)',
            'on-secondary-container': 'rgb(206, 233, 219)',
            tertiary: 'rgb(167, 204, 224)',
            'on-tertiary': 'rgb(10, 52, 69)',
            'tertiary-container': 'rgb(38, 75, 92)',
            'on-tertiary-container': 'rgb(194, 232, 253)',
            error: 'rgb(255, 180, 171)',
            'on-error': 'rgb(105, 0, 5)',
            'error-container': 'rgb(147, 0, 10)',
            'on-error-container': 'rgb(255, 218, 214)',
            background: 'rgb(15, 21, 18)',
            'on-background': 'rgb(222, 228, 223)',
            surface: 'rgb(15, 21, 18)',
            'on-surface': 'rgb(222, 228, 223)',
            'surface-variant': 'rgb(64, 73, 68)',
            'on-surface-variant': 'rgb(191, 201, 194)',
            outline: 'rgb(137, 147, 141)',
            'outline-variant': 'rgb(64, 73, 68)',
            shadow: 'rgb(0, 0, 0)',
            scrim: 'rgb(0, 0, 0)',
            'inverse-surface': 'rgb(222, 228, 223)',
            'inverse-on-surface': 'rgb(44, 50, 47)',
            'inverse-primary': 'rgb(25, 107, 82)',
            'primary-fixed': 'rgb(165, 242, 211)',
            'on-primary-fixed': 'rgb(0, 33, 22)',
            'primary-fixed-dim': 'rgb(138, 214, 183)',
            'on-primary-fixed-variant': 'rgb(0, 81, 60)',
            'secondary-fixed': 'rgb(206, 233, 219)',
            'on-secondary-fixed': 'rgb(8, 32, 23)',
            'secondary-fixed-dim': 'rgb(179, 204, 192)',
            'on-secondary-fixed-variant': 'rgb(53, 76, 66)',
            'tertiary-fixed': 'rgb(194, 232, 253)',
            'on-tertiary-fixed': 'rgb(0, 31, 43)',
            'tertiary-fixed-dim': 'rgb(167, 204, 224)',
            'on-tertiary-fixed-variant': 'rgb(38, 75, 92)',
            'surface-dim': 'rgb(15, 21, 18)',
            'surface-bright': 'rgb(52, 59, 55)',
            'surface-container-lowest': 'rgb(10, 15, 13)',
            'surface-container-low': 'rgb(23, 29, 26)',
            'surface-container': 'rgb(27, 33, 30)',
            'surface-container-high': 'rgb(37, 43, 40)',
            'surface-container-highest': 'rgb(48, 54, 51)'
        },
        light: {
            primary: 'rgb(25, 107, 82)',
            'surface-tint': 'rgb(25, 107, 82)',
            'on-primary': 'rgb(255, 255, 255)',
            'primary-container': 'rgb(165, 242, 211)',
            'on-primary-container': 'rgb(0, 81, 60)',
            secondary: 'rgb(76, 99, 89)',
            'on-secondary': 'rgb(255, 255, 255)',
            'secondary-container': 'rgb(206, 233, 219)',
            'on-secondary-container': 'rgb(53, 76, 66)',
            tertiary: 'rgb(63, 99, 117)',
            'on-tertiary': 'rgb(255, 255, 255)',
            'tertiary-container': 'rgb(194, 232, 253)',
            'on-tertiary-container': 'rgb(38, 75, 92)',
            error: 'rgb(186, 26, 26)',
            'on-error': 'rgb(255, 255, 255)',
            'error-container': 'rgb(255, 218, 214)',
            'on-error-container': 'rgb(147, 0, 10)',
            background: 'rgb(245, 251, 246)',
            'on-background': 'rgb(23, 29, 26)',
            surface: 'rgb(245, 251, 246)',
            'on-surface': 'rgb(23, 29, 26)',
            'surface-variant': 'rgb(219, 229, 222)',
            'on-surface-variant': 'rgb(64, 73, 68)',
            outline: 'rgb(112, 121, 116)',
            'outline-variant': 'rgb(191, 201, 194)',
            shadow: 'rgb(0, 0, 0)',
            scrim: 'rgb(0, 0, 0)',
            'inverse-surface': 'rgb(44, 50, 47)',
            'inverse-on-surface': 'rgb(236, 242, 237)',
            'inverse-primary': 'rgb(138, 214, 183)',
            'primary-fixed': 'rgb(165, 242, 211)',
            'on-primary-fixed': 'rgb(0, 33, 22)',
            'primary-fixed-dim': 'rgb(138, 214, 183)',
            'on-primary-fixed-variant': 'rgb(0, 81, 60)',
            'secondary-fixed': 'rgb(206, 233, 219)',
            'on-secondary-fixed': 'rgb(8, 32, 23)',
            'secondary-fixed-dim': 'rgb(179, 204, 192)',
            'on-secondary-fixed-variant': 'rgb(53, 76, 66)',
            'tertiary-fixed': 'rgb(194, 232, 253)',
            'on-tertiary-fixed': 'rgb(0, 31, 43)',
            'tertiary-fixed-dim': 'rgb(167, 204, 224)',
            'on-tertiary-fixed-variant': 'rgb(38, 75, 92)',
            'surface-dim': 'rgb(213, 219, 215)',
            'surface-bright': 'rgb(245, 251, 246)',
            'surface-container-lowest': 'rgb(255, 255, 255)',
            'surface-container-low': 'rgb(239, 245, 240)',
            'surface-container': 'rgb(233, 239, 234)',
            'surface-container-high': 'rgb(228, 234, 229)',
            'surface-container-highest': 'rgb(222, 228, 223)'
        }
    }
    if (typeof window !== 'undefined') {
        if (window.matchMedia) {
            let colors: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? COLORS.dark : COLORS.light
            return colors
        }
    }
    return COLORS.dark
}
