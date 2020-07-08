
const initialState = {
    authErr: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            console.log('sign in success');
            return {
                ...state, authErr: null
            }
        case 'SIGNIN_ERROR':
            console.log('sign in error');
            return {
                ...state,
                authErr: 'Sign in failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up success')
            return {
                ...state,
                authErr: null
            }
        case 'SIGNUP_ERROR':
            console.log('sign up failed')
            return {
                ...state,
                authErr: action.err.message
            }
        default:
            return state;
    }
}

