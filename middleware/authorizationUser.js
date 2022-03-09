const { User } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const findRole = await User.findOne({
            where: {
                role: req.user.role
            }
        })
        if (findRole === "SUPERADMIN") {
            console.log('superadmin nih ye')
            next()
        } else {
            res.status(403).json({ message: "anda tidak memiliki akses"})
        }

    } catch (error) {
        next(error)
        
    }
}