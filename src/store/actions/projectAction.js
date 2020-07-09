export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const state = getState();
        const profile = state.firebase.profile;
        const authorId = state.firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => dispatch({
            type: 'CREATE_PROJECT',
            project
        })).catch(err => dispatch({
            type: 'CREATE_ERROR',
            err
        }))
    }
}