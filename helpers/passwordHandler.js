const bcrypt = require('bcrypt')
const salt = process.env.SALT || 10

const hashPassword = async (password) => {
    return await bcrypt.hashSync(password, salt)
}

const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

module.exports = {
    hashPassword,
    verifyPassword
}