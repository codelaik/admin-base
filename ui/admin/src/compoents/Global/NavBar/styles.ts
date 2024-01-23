import { COLORS } from '../../../styles/theme'

export default {
    navBarContainer: {
        backgroundColor: COLORS.PRIMARY,
        width: '20%',
        height: '100vh',
        borderRight: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
    },
    titleContainer: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
            marginBottom: '20px',
        },
    },
    profilePhoto: {
        height: '100px',
        width: '100px',
        borderRadius: '100%',
    },
}
