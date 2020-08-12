
let mongoose = require('mongoose')
let registrationSchema = mongoose.Schema({
  appnbr: String,
  name: String,
  age: String,
  gender: String,
  father: String,
  mother: String,
  address: String,
  grade: String,
  entrtest: String
}, { collection: 'registration' })
let registration = mongoose.model('registration', registrationSchema)
module.exports = registration