import { Get } from "../Services/http.service";
import { GEOCODING_URL, GEOCODING_KEY } from '../Constants/global.constants';
import { REVERSE_GEOCODING } from "../Constants/api.constants";

class GeocodingApi {
    static GetAddress = (latitude, longitude) => {
        const url = `${REVERSE_GEOCODING}?key=${GEOCODING_KEY}&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
        return Get({ url, BASE_URL: GEOCODING_URL })
    }
}

export default GeocodingApi;
