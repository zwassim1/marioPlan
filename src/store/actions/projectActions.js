export const createProject = project => {
    console.log('test')
	return (dispatch, getState) => {
		dispatch({ type: 'CREATE_PROJECT', project });
	};
};
