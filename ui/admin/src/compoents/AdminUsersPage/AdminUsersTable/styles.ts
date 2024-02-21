import { COLORS } from "../../../styles/theme"

const styles = {
    container: {
        backgroundColor: COLORS.BACKGROUND_PRIMARY,
        borderRadius: '10px',
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
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }
}

export default styles