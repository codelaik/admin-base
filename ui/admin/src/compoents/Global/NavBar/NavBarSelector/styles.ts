import { COLORS } from "../../../../styles/theme";

const styles = {
    container: (isSelected: boolean) => ({
        width: '100%',
        margin: '0px',
        padding: '20px',
        backgroundColor: isSelected ? 'white' : null,
        color: isSelected ? COLORS.TEXT_TERTIARY : 'white',
        display: 'flex',
        justifyContent: 'space-between',
        '&:hover': {
            cursor: isSelected ? null : 'pointer',
            backgroundColor: isSelected ? null : COLORS.TEXT_TERTIARY,
        },
    })
}

export default styles;