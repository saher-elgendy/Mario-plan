//sign in action
export const signIn = ({ email, password }) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(email, password).then(() => dispatch({
            type: 'SIGN_IN_SUCCESS'
        })).catch(err => dispatch({
            type: 'SIGN_IN_ERROR',
            err
        }))
    }
}

//sign out action
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => dispatch({
            type: 'SIGN_OUT_SUCCESS'
        }))
    }
}

//sign up action