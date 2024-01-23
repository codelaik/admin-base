import { COLORS } from '../../../styles/theme'

const styles = {
    navBarContainer: {
        backgroundColor: COLORS.PRIMARY,
        width: '18%',
        height: '100vh',
        // borderRight: '1px solid black',
        boxShadow: `1px 10px 10px 1px ${COLORS.PRIMARY}`,
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

export default styles
