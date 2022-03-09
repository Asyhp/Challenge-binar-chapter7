const { User } = require('../models')

module.exports = async (req, res, next) => {
    try {
        if (req.user.role === "SUPERADMIN") {
            console.log('superadmin nih cuy')
            next()
        } else if (req.user.id === req.params.id ) {
            console.log('bisa buka id aja')
            next()
        } else {
            res.status(403).json({ message: "anda tidak memiliki akses"})
        }
        
        
    } catch (error) {
        next(error)
        
    }
}