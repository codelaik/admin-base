import { COLORS } from '../../../styles/theme'

const styles = {
    navBarContainer: {
        backgroundColor: COLORS.PRIMARY,
        width: '18%',
        padding: '0px 10px 0px 10px',
        height: '100vh',
        overflow: 'scroll',
        'overflow-y': 'none',
        display: 'flex',
        flexDirection: 'column',
        '-webkit-box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        '-moz-box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        'box-shadow': 'inset -1px -18px 135px -51px rgba(0,0,0,0.75)',
        '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
        'scrollbar-width': 'none',  /* Firefox */
        '&::-webkit-scrollbar': { 
            display: 'none', /* Safari and Chrome */
        }
    },
    titleContainer: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left'
    },
    waterMark: {
        position: 'absolute',
        bottom: 0,
        color: 'white',
        paddingBottom: '10px',
    }
}

export default styles
