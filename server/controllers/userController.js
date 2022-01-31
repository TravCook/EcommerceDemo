const db = require('../models/index')

module.exports = {
  findAll: (req, res) => {
    res.json({
      look: "u did it"
    })
  }
}