const { User } = require('../models')


class UserController {
    static getUser = async (req, res, next) => {
      // ambil userid dari cookies
      const { UserId } = req.cookies
  
      // ambil dari req.user yang diselipin dari authentikasi
      
      const userStatus = req.user.role
  
      try {
        if ( userStatus === "SUPERADMIN" ){
          const user = await User.findAll()
          res.status(200).json({ user })
        }
      } catch (error) {
        res.status(500).json({ message: "error nih" })
      }
  
    }

    static viewAll(req, res) {
        User.findAll({
            order: [["id", 'ASC']]
        })
            .then((data) => {
                return res.status(200).json({data})
            })
    }
  
    static getUserById = async (req, res, next) => {
      const id = req.user.id
  
      try {
        const findUser = await User.findByPk({
          where: {
            id
          }
        })
        res.status(200).json({ findUser })
      } catch (error) {
        res.status(500).json(error)
      }
    }
  
    
  }


module.exports = { UserController }
