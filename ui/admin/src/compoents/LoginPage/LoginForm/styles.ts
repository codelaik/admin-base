import { COLORS } from '../../../styles/theme'

const styles = {
    formContainer: {
        padding: '30px',
        background: COLORS.BACKGROUND_SECONDARY,
        borderRadius: '3px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-1px 1px 10px 1px lightblue',
        '& > div': {
            padding: '5px 0px',
        },
    },
    submitButton: { margin: '20px 0px 0px 0px' },
}

export default styles
