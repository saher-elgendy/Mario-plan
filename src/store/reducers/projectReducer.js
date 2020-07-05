const initialstate = {
    projects: [
        { id: 1, title: 'project1', content: 'bla bla bla' },
        { id: 2, title: 'project2', content: 'bla bla bla' },
        { id: 2, title: 'project3', content: 'bla bla bla' },
    ]
}
export default (state = initialstate, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project);
            return state;
            case 'CREATE_ERROR':
                console.log(action.err);
                return state;
            default:
                return state;
    }
}