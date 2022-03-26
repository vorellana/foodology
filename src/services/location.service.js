const exp = {}
const { getLocation } = require('../utils/location')

exp.getLocation = async (token) => {
    console.log('getLocation service');
    const location = await getLocation(token);
    return location;
}

module.exports = exp;