
const initialState = {
    authErr: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            console.log('sign in success');
            return {
                ...state, authErr: null
            }
        case 'SIGN_IN_ERROR': 
            console.log('sign in error');
            return {
                ...state,
                authErr: 'Sign in failed'
            }
            case 'SIGN_OUT_SUCCESS':
                console.log('sign out success')
                return state;
        default:
            return state;
    }
}

