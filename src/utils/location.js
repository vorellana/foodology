const exp = {};
const axios = require('axios').default;
const config = require('../../src/config');

exp.getLocation = async (token) => {

    if (token === undefined)
        token = config.tokenWidgets

    let points = [
        { lat: '3.4253177', lng: '-76.5427535', address : 'Parque San Fernando Nuevo, Cali, Valle del Cauca, Colombia' },
        { lat: '3.4236443', lng: '-76.5453402', address : 'Asmet Salud Eps Tequendama, Carrera 39, Cali, Valle del Cauca, Colombia' },
        { lat: '3.4299691', lng: '-76.5368321', address : 'El Rancho Veterinario, Calle 8a, Cali, Valle del Cauca, Colombia' },
        { lat: '3.4208882', lng: '-76.5290605', address : 'Cancha De Futbol El Dorado, Calle 13a, Cali, Valle del Cauca, Colombia' }
    ];

    let foodologyBrands = [
        { id: '900093992', title: 'Avocalia' },
        { id: '900093905', title: 'Brunch & Munch' },
        { id: '900093898', title: 'Bottaniko' },
        { id: '900093906', title: 'La Cuadra' },
        { id: '900093900', title: 'Cacerola' },
        { id: '900093909', title: 'Burritos & Co' }
    ];

    let restaurantsFound = await processDataApi(points, foodologyBrands, token);
    let processedList = processListRestaurants(foodologyBrands, restaurantsFound);
    let result = {processedList, restaurantsFound, points}
    return result;
}

const processListRestaurants = (foodologyBrands, restaurantsFound) => {
    let processedList = [];
    foodologyBrands.forEach(brand => {
        let restaurants = restaurantsFound.filter( restaurant => restaurant.title === brand.title);
        let positionSum = 0;
        restaurants.forEach(restaurant => {
            positionSum += restaurant.position;
        })
        processedList.push({
            id: brand.id,
            title: brand.title,
            visible: (restaurants.length > 0 ? 'Yes': 'No'),
            average_position: positionSum / restaurants.length
        })
    })
    return processedList;
}

const processDataApi = async (points, foodologyBrands, token) => {
    let restaurantsFound = [];
    const httpConfig = { headers: { Authorization: `Bearer ${token}` } };
    for(let i = 0; i < points.length; i++){
        let point = points[i];
        let url = config.urlWidgets + '&lat='+ point.lat + '&lng=' + point.lng;
        let response = await axios.get(url, httpConfig);
        let restaurantBlocks = response.data.widgets.filter(item => item.title === 'Restaurantes')
        restaurantBlocks.forEach(block => {
            block.data.forEach( (restaurant, restaurantIndex) => {
                foodologyBrands.forEach(brand => {
                    if (brand.title === restaurant.title && restaurant.enabled == true && restaurant.is_hidden == false ){
                        restaurantsFound.push({
                            position: restaurantIndex + 1,
                            title: restaurant.title,
                            id: restaurant.id
                        })
                    }
                })
            })
        })
    }
    return restaurantsFound
}

module.exports = exp;