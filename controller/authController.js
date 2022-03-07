const { User } = require("../models")

class AuthController {
    static register = async (req, res) => {
        try {
            const { username, email, password, role } = req.body
            const isEmailExist = await User.findOne({ where: { email }})
            if (isEmailExist) return res.status(409).json({ message: "Email already used"})
            const isUsernameExist = await User.findOne({ where: {username}})
            
        } catch (error) {
            
        }
    }
}