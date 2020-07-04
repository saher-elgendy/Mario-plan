const initialstate = {
    projects: [
        { id: 1, title: 'project1', content: 'bla bla bla' },
        { id: 2, title: 'project2', content: 'bla bla bla' },
        { id: 2, title: 'project3', content: 'bla bla bla' },
    ]
}
export default (state = initialstate, action) => {
   // eslint-disable-next-line default-case
switch(action.type) {
    case 'CREATE_PROJECT':
        console.log(action.project)
}
return state;
}