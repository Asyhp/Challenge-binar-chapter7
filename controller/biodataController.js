const { UserBiodata } = require('../models')

class BiodataController {
  static getBiodata = async (req, res, next) => {
    // ambil userid dari cookies
    const { UserId } = req.cookies

    // ambil dari req.user yang diselipin dari authentikasi
    
    const userStatus = req.user.role

    try {
      if ( userStatus === "SUPERADMIN" ){
        const userBiodata = await UserBiodata.findAll()
        res.status(200).json({ userBiodata })
      }
    } catch (error) {
      res.status(500).json({ message: "error nih" })
    }

  }

  static getBiodataById = async (req, res, next) => {
    const userIdDariReqUser = req.user.id

    try {
      const userBiodata = await UserBiodata.findByPk({
        where: {
          userId: userIdDariReqUser
        }
      })
      res.status(200).json({ userBiodata })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  
}

module.exports = { BiodataController }