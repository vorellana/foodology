const exp = {}
const { getLocation } = require('../services/location.service')

exp.getLocation = async (req, res) => {
    let location = await getLocation();
    res.status(200).json({location});
}

module.exports = exp;