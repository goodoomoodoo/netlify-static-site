import { rootReducer } from './reducer';
import { createStore } from 'redux';

export const configureStore = ( initState = {} ) => {
    return createStore( rootReducer, initState );
};