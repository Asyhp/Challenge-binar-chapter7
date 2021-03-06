const { UserBiodata } = require('../models')

class BiodataController {
  // static getBiodata = async (req, res, next) => {
  //   // ambil userid dari cookies
  //   const { UserId } = req.cookies

  //   // ambil dari req.user yang diselipin dari authentikasi
    
  //   const userStatus = req.user.role

  //   try {
  //     if ( userStatus === "SUPERADMIN" ){
  //       const userBiodata = await UserBiodata.findAll()
  //       res.render("biodata")
  //     }
  //   } catch (error) {
  //     res.status(500).json({ message: "error nih" })
  //   }

  // }

  // static getBiodataById = async (req, res, next) => {
  //   const userIdDariReqUser = req.user.id

  //   try {
  //     const userBiodata = await UserBiodata.findByPk({
  //       where: {
  //         userId: userIdDariReqUser
  //       }
  //     })
  //     res.render("biodata", {data})
  //   } catch (error) {
  //     res.status(500).json(error)
  //   }
  // }

  static viewAll(req, res) {
    UserBiodata.findAll({
      order: [["id", 'ASC']]
    })
      .then((data) => {
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewById(req, res) {
    const id = req.params.id
    UserBiodata.findByPk(id)
      .then((data) => {
        data = [data]
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  static getEditForm(req, res) {
    const id = req.params.id
    UserBiodata.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('biodata/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editBiodata(req, res) {
    const id = req.params.id
    let updatedBiodata = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birthdate: req.body.birthdate
    }
    UserBiodata.update(updatedBiodata, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteUser(req, res) {
    const id = req.params.id
    UserBiodata.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }

}

module.exports = { BiodataController }