export const createProject = project => {
    console.log('test');
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            await firestore.collection('projects').add({
                ...project,
                auhtorFirstName: 'Zouaoui',
                auhtorLastName: 'Wass',
                authorId: 1234,
                createdAt: new Date()
            });
            dispatch({ type: 'CREATE_PROJECT', project });
        } catch (error) {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        }
    };
};
