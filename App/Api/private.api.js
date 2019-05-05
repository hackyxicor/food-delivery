import { Get } from "../Services/http.service";
import { GET_OFFERS, GET_RESTAURANTS, POPULAR_SEARCH, RESTAURANT_DETAIL, UPDATE_PROFILE } from "../Constants/api.constants";

class PrivateApi {
    static UpdateProfile = () => {
        return Get({ url: UPDATE_PROFILE })
    }

    static GetOffers = () => {
        return Get({ url: GET_OFFERS })
    }

    static GetRestaurants = () => {
        return Get({ url: GET_RESTAURANTS })
    }

    static GetPopularSearch = () => {
        return Get({ url: POPULAR_SEARCH })
    }

    static GetRestaurantDetail = () => {
        return Get({ url: RESTAURANT_DETAIL })
    }
}

export default PrivateApi;
