const exp = {}
const { getLocation } = require('../utils/location')

exp.getLocation = async () => {
    console.log('getLocation service');
    const location = await getLocation();
    return location;
}

module.exports = exp;