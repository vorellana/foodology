const exp = {}
const { getLocation } = require('../services/location.service')

exp.getLocation = async (req, res) => {
    let { token } = req.body;
    try {
        let location = await getLocation(token);
        res.status(200).json({location});
    } catch (error) {
        res.status(400).json({error: error.message, tokenError: error.isAxiosError});
    }
}

module.exports = exp;