import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import offersReducer from './offers.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    offers: offersReducer,
});

export default rootReducer;