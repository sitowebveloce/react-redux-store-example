
export const usersActions = id => async(dispatch, getState)=>{
    try{

         // Get State
         const {usersState} = getState();
         const {users} = usersState;
         console.log(usersState);

        // DISPATCH REQUEST
        dispatch({type: 'DELETE_REQUEST'});

        // DATA
       let dataUpdated = users.filter(u=> u.id !== id);

        // DISPATCH SUCCESS
        dispatch({
            type:'DELETE_SUCCESS',
            payload: dataUpdated
        });

    }catch(err){
        console.log(err);
        // DISPATCH FAIL
        dispatch({
            type:'DELETE_FAIL',
            payload: err
        });
    }
}