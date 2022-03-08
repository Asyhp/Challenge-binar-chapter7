const Joi = require('joi')

const username = Joi.string().min(5).max(20)
const email = Joi.string()
const password = Joi.string().min(5)
const role = Joi.string()

const registerUserSchema = Joi.object({
  email: email.required(),
  username: username.required(),
  password: password.required(),
  role: role.required()
})

const loginUserSchema = Joi.object({
  username: username,
  password: password.required(),
})

module.exports = { registerUserSchema, loginUserSchema }