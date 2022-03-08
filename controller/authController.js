const { User, UserBiodata, UserHistories } = require("../models")
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
                if (biodata) {
                    return res.status(201).json({
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        biodata
                    })
                }
            } else if (!user) {
                res.status(400).json({ message: "bad request"})
            }

            if (user) {
                const history = await UserHistories.create({ name: username, UserId: user.id })
                if (history) {
                    return res.status(201).json({
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        history
                    })
                }
            } else if (!user) {
                res.status(400).json({ message: "bad request" })
            }

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
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
                email: user.email
            })
            res.cookie("UserId", user.id, {
                httpOnly: true
            })
            res.cookie("access_token", access_token, {
                httpOnly: true
            })
            return res.status(200).json({
                id: user.id,
                username: user.username,
                message: `user ${username}, berhasil login`
            })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

module.exports = AuthController