import { combineReducers } from 'redux';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
    authStore: authReducer
});

export default rootReducer;