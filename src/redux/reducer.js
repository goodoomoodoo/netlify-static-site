import { USER_LOGIN } from './action';

export const rootReducer = ( state = {}, action ) => {
    switch( action.type )
    {
        case USER_LOGIN:
            return { user: action.payload };
        default:
            return state;
    }
}