const initState = {
    projects: [
        { id: '1', title: 'Ea do minim laboris non', content: 'bla bla bvla' },
        { id: '2', title: 'Ea do minim labor', content: ' minim labor' },
        { id: '3', title: 'Ea  laboris non', content: ' minim labor' }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('cretaed project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
