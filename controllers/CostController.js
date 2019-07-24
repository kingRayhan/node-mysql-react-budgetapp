const Cost = require('../models/Cost')
module.exports.store = async (req, res, next) => {
    let cost = await req.user.createCost({
        ...req.body,
    })

    res.json(cost)
}
