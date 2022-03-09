const { UserBiodata } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const findBiodata = await UserBiodata.findOne({
            where: {
                id: req.params.id
            }
        })
        if (findBiodata.UserId === req.user.id) {
            console.log('idnya bener nih')
            next()
        } else {
            res.status(403).json({ message: "anda tidak memiliki akses"})
        }

    } catch (error) {
        next(error)
        
    }
}