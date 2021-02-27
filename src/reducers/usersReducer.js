// REDUCER
export const usersReducers = function(state={users:[]}, action){
    switch(action.type){
        case 'DELETE_REQUEST':
            return{loading:true};
        case 'DELETE_SUCCESS':
            return {
                loading:false,
                success:true,
                users: action.payload
            };
        case 'DELETE_FAIL':
            return{
                loading:false,
                success: false,
                error: action.payload
            }
        default:
            return state;
    }
}