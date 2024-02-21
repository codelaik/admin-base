import { COLORS } from "../../../../styles/theme"

const styles = {
    drowdownContainer:(isSelected: boolean) => ( {
        width: '100%',
        margin: '5px 0px 5px 0px',
        padding: '20px',
        borderRadius: '10px',
        color: COLORS.TEXT_TERTIARY,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isSelected ? COLORS.SECONDARY : null,
        transitionDuration: '.3s',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: isSelected
                ? null
                : COLORS.TEXT_TERTIARY,
        },
    }),
    selectorContainer: (isSelected: boolean) => ({
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        marginBottom: isSelected ? '10px' : null,
        'user-select': 'none',
        '&:hover #navbar-container': {
            cursor: 'pointer',
            backgroundColor: isSelected
                ? COLORS.TEXT_TERTIARY
                : null,
        },
    }),
    carrotAnimation: (isSelected: boolean) => ({
        transitionDuration: '.5s',
        'user-select': 'none',
        transform: isSelected
            ? 'rotate(180deg)'
            : 'rotate(90deg)',
    })
}

export default styles