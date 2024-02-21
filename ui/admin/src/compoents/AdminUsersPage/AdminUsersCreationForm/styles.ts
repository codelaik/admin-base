import { COLORS } from "../../../styles/theme"

const styles = {
    formControl: {
        width: '600px',
        backgroundColor: COLORS.BACKGROUND_PRIMARY,
        padding: '10px',
        borderRadius: '10px',
        '-webkit-box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        '-moz-box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        'box-shadow': '-1px -18px 135px -51px rgba(0,0,0,0.75)',
        '& div': {
            padding: '2px',
        },
        '& select': {
            padding: '5px',
        },
    }
}

export default styles