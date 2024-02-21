import { COLORS } from "../../../../styles/theme";

const styles = {
    container: (isSelected: boolean, dropdownItem: boolean) => ({
        width: '100%',
        margin: dropdownItem ? null :'5px 0px 5px 0px',
        padding: '20px',
        backgroundColor: isSelected ? 'white' : null,
        color: isSelected ? COLORS.TEXT_TERTIARY : 'white',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        transitionDuration: '.3s',
        'user-select': 'none',
        '&:hover': {
            cursor: isSelected ? null : 'pointer',
            backgroundColor: isSelected ? null : COLORS.TEXT_TERTIARY,
            transitionDuration: '.3s',
        },
    })
}

export default styles;