import { COLORS } from "../../../styles/theme"

const styles = {
    formControl: {
        width: '600px',
        backgroundColor: COLORS.BACKGROUND_PRIMARY,
        padding: '10px',
        borderRadius: '10px', 
        '& div': {
            padding: '2px',
        },
        '& select': {
            padding: '5px',
        },
    }
}

export default styles