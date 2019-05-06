import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import offersReducer from './offers.reducer';
import restaurantsReducer from './restaurants.reducer';
import restaurantDetailReducer from './restaurantDetail.reducer';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    offers: offersReducer,
    restaurants: restaurantsReducer,
    restaurant: restaurantDetailReducer,
    cart: cartReducer
});

export default rootReducer;