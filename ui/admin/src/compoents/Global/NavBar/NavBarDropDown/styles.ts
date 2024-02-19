import { COLORS } from "../../../../styles/theme"

const styles = {
    drowdownContainer: (isSelected: boolean) => ({
        width: '100%',
        margin: '0px',
        color: COLORS.TEXT_TERTIARY,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: isSelected
            ? `5px solid ${COLORS.TEXT_TERTIARY}`
            : null,
    }),
    selectorContainer: (isSelected: boolean) => ({
        display: 'flex',
        width: '100%',
        margin: '0px',
        padding: '20px',
        justifyContent: 'space-between',
        color: 'white',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: isSelected
                ? null
                : COLORS.TEXT_TERTIARY,
        },
    }),
    itemsMenu: { padding: '0px', paddingLeft: '20px' }
}

export default styles