const { User, UserBiodata, UserHistory } = require("../models")
const { hashPassword, verifyPassword } = require("../helpers/passwordHandler")
const { generateToken } = require("../helpers/tokenHandler")


class AuthController {
    static getRegister(req, res) {
        res.render("register")
    }

    static register = async (req, res) => {
        try {
            const { username, email, password, role } = req.body
            const isEmailExist = await User.findOne({ where: { email }})
            if (isEmailExist) return res.status(409).json({ message: "Email already used"})
            const isUsernameExist = await User.findOne({ where: {username}})
            if (isUsernameExist) return res.status(409).json({ message: "Username already used"})

            const payload = {
                username, email, password: hashPassword(password), role
            }
            const user = await User.create(payload)

            if (user) {
                const biodata = await UserBiodata.create({ name: username, UserId: user.id })
                const history = await UserHistory.create({ name: username, UserId: user.id})
                if (biodata, history) {
                    return res.redirect("login")
                }
            } else if (!user) {
                res.status(400).json({ message: "bad request"})
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }


    static getLogin(req, res) {
        res.render("login")
    }

    static login = async (req, res) => {
        try {
            const { username, password } = req.body
            const user = await User.findOne({
                where: {
                    username: username
                }
            })
            if (!user) return res.status(404).json({ message: "User not found" })
            const isPasswordMatch = await verifyPassword(password, user.password)
            if (!isPasswordMatch) return res.status(409).json({ message: "Password Salah"})
            const access_token = await generateToken({
                id: user.id,
                email: user.email,
                role: user.role
            })
            res.cookie("UserId", user.id, {
                httpOnly: true
            })
            res.cookie("access_token", access_token, {
                httpOnly: true
            })
            res.cookie("role",  user.role, {
                httpOnly: true
            })
            
            return res.redirect("index")

        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    static getIndex (req, res) {
        res.render("auth/index")
    }

}

module.exports = AuthController