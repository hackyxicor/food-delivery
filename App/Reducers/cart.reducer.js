import { UPDATE_CART } from "../Constants/action.constants";

const defaultStore = {
}

export default function cartReducer(store = defaultStore, action) {
    switch (action.type) {
        case UPDATE_CART:
            const { payload } = action;
            const newStore = Object.assign({}, store);
            if (newStore[payload.id]) {
                if (payload.quantity == 0) {
                    delete newStore[payload.id];
                } else {
                    newStore[payload.id]['quantity'] = payload.quantity;
                }
            } else {
                newStore[payload.id] = payload;
            }
            return newStore;
        default:
            return store;
    }
}