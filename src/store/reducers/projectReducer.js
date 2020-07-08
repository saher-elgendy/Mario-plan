
export default (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project);
            return state;
            case 'CREATE_ERROR':
                return state;
            default:
                return state;
    }
}