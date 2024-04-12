
import axios from 'axios';

export const GooglePlaces = async (setLoading, token, input) => {
    setLoading(true);
    const result = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${token}`, {
        params: params,
    }).catch((error) => error);
    return result;
};