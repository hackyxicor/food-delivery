import apisauce from 'apisauce'

import GLOBAL from '../Constants/global.constants';

const create = (baseURL = GLOBAL.BASE_URL) => {
    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })

    const getCocktails = () => api.get('/filter.php', { g: 'Cocktail_glass' })

    return {
        getCocktails,
    }
}

export default {
    create
}