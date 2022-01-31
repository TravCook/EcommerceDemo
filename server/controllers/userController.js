const db = require('../models/index');
const { findOne } = require('../models/userModel');

module.exports = {
  create: (req, res) => {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: (req, res) => {
    db.User
    .findOne(req.email)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  remove: (req, res) => {
      db.User
        .findOne({ email: req.body.email })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
}