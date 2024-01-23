import { createTheme } from '@mui/material'

export enum COLORS {
    PRIMARY = '#8EB1C7',
    SECONDARY = '#C1BFB5',
    BACKGROUND_PRIMARY = '#FEFDFF',
    BACKGROUND_SECONDARY = '#FFFFFF',
    TEXT_PRIMARY = '#1E1E1E',
    TEXT_PRIMARY_INVERSE = '#FEFDFF',
    TEXT_SECONDARY = '#8EB1C7',
    TEXT_TERTIARY = '#5C7D8A',
    ERROR = '#B02E0C',
    WARNING = '#CCAC1E',
}

export const theme = createTheme({
    palette: {
        background: {
            default: COLORS.SECONDARY,
        },
        primary: {
            main: COLORS.PRIMARY,
            contrastText: COLORS.TEXT_PRIMARY_INVERSE,
        },
        secondary: {
            main: COLORS.SECONDARY,
        },
        error: {
            main: COLORS.ERROR,
        },
        warning: {
            main: COLORS.WARNING,
        },
    },
})
