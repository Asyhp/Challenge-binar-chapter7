const { UserHistory } = require('../models')

class HistoryController {
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
    UserHistory.findAll({
      order: [["id", 'ASC']]
    })
      .then((data) => {
        res.render("history", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewById(req, res) {
    const id = req.params.id
    UserHistory.findByPk(id)
      .then((data) => {
        data = [data]
        res.render("history", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  static getEditForm(req, res) {
    const id = req.params.id
    UserHistory.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('history/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editBiodata(req, res) {
    const id = req.params.id
    let updatedHistory = {
        win: req.body.win,
        draw: req.body.draw,
        lose: req.body.lose
    }
    UserHistory.update(updatedHistory, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/history")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteUser(req, res) {
    const id = req.params.id
    UserHistory.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/history")
      })
      .catch((err) => {
        console.log(err)
      })
  }

}

module.exports = { HistoryController }