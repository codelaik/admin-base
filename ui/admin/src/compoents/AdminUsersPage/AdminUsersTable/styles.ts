import { COLORS } from "../../../styles/theme"

const styles = {
    container: {
        backgroundColor: COLORS.BACKGROUND_PRIMARY,
        borderRadius: '10px',
        '-webkit-box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        '-moz-box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        'box-shadow': '-1px -18px 135px -51px rgba(0,0,0,0.75)'
    },
    tableContainer: { 
        width: '80vw',
        maxHeight: '300px',        
        '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
        'scrollbar-width': 'none',  /* Firefox */
        '&::-webkit-scrollbar': { 
            display: 'none', /* Safari and Chrome */
        } 
    },
    table: { minWidth: '90%' },
    row: {
        height: '10px',
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }
}

export default styles