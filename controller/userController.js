const { User } = require('../models')


class UserController {
    // static getUser = async (req, res, next) => {
    //   // ambil userid dari cookies
    //   const { UserId } = req.cookies
  
    //   // ambil dari req.user yang diselipin dari authentikasi
      
    //   const userStatus = req.user.role
  
    //   try {
    //     if ( userStatus === "SUPERADMIN" ){
    //       const user = await User.findAll()
    //       res.status(200).json({ user })
    //     }
    //   } catch (error) {
    //     res.status(500).json({ message: "error nih" })
    //   }
  
    // }

    static viewAll(req, res) {
        User.findAll({
            order: [["id", 'ASC']]
        })
            .then((data) => {
                return res.render("user", {data})
            })
    }
  
    // static getUserById = async (req, res, next) => {
    //   const id = req.user.id
  
    //   try {
    //     const findUser = await User.findByPk({
    //       where: {
    //         id: req.params.id
    //       }
    //     })
    //     res.status(200).json({ findUser })
    //   } catch (error) {
    //     res.status(500).json(error)
    //   }
    // }
    static viewById(req, res) {
        const id = req.params.id
        User.findByPk(id)
          .then((data) => {
            // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
            data = [data]
            return res.render("user", {data})
          })
          .catch((error) => {
            console.log(error)
          })
      }
    
    // static getBiodataById = async (req, res, next) => {
    //     const userIdDariReqUser = req.user.id
    
    //     try {
    //       const user = await User.findByPk({
    //         where: {
    //           userId: userIdDariReqUser
    //         }
    //       })
    //       res.status(200).json({ user })
    //     } catch (error) {
    //       res.status(500).json(error)
    //     }
    //   }

    static getEditForm(req, res) {
        const id = req.params.id
        User.findByPk(id)
          .then((data) => {
            console.log(data)
            res.render('user/edit', { data })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    
      static editUser(req, res) {
        const id = req.params.id
        let updatedUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        User.update(updatedUser, {
          where: {
            id: id
          }
        })
          .then(() => {
            res.redirect("/user")
          })
          .catch((err) => {
            console.log(err)
          })
      }
    
      static deleteUser(req, res) {
        const id = req.params.id
        Biodata.destroy({
          where: { id: id }
        })
          .then(() => {
            res.redirect("/user")
          })
          .catch((err) => {
            console.log(err)
          })
      }

  }


module.exports = { UserController }
