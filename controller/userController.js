const { User } = require('../models')


class UserController {

    static viewAll (req, res, next) {
        User.findAll({order: [["id", 'ASC']]})
        .then((data) => {
            res.status(200).json({data})
        })
        .catch((error) => {
            res.status(500).json({ message: "anda tidak memiliki akses "})
        })
      }

}


module.exports = { UserController }
