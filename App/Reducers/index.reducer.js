import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import offersReducer from './offers.reducer';
import restaurantsReducer from './restaurants.reducer';
import restaurantDetailReducer from './restaurantDetail.reducer';
import cartReducer from './cart.reducer';
import locationReducer from './location.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    offers: offersReducer,
    restaurants: restaurantsReducer,
    restaurant: restaurantDetailReducer,
    cart: cartReducer,
    location: locationReducer,
});

export default rootReducer;