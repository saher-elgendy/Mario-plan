
//sign in action
export const signIn = ({ email, password }) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(email, password).then(() => dispatch({
            type: 'SIGNIN_SUCCESS'
        })).catch(err => dispatch({
            type: 'SIGNIN_ERROR',
            err
        }))
    }
}

//sign out action
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => dispatch({
            type: 'SIGNOUT_SUCCESS'
        }))
    }
}

//sign up action

export const signUp = ({ email, password, firstName, lastName }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    initials: firstName[0] + lastName[0]
                });
            })
            .then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'SIGNUP_ERROR', err });
            });
    };

}
