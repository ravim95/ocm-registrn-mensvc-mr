let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let mongoose = require('mongoose')
let cors = require('cors')

//import registration Model from ./models
let registration = require('./models/registration.js')
//initialize express app
let app = express()
//configure express app to parse json content and form data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//configure express app to serve static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

//connect to mongodb instance where database is ocm
mongoose.connect('mongodb://127.0.0.1:27017/ocm')
//save new registration
app.post('/register', (req, res, next) => {
 //create new registration using schema
 var appnbr = Math.floor(Math.random()*(53453465345-896786)+896786)
 console.log(appnbr)
 let newRegistration = new registration({
     appnbr: appnbr,
     name: req.body.name,
     age: req.body.age,
     gender: req.body.gender,
     father: req.body.father,
     mother: req.body.mother,
     address: req.body.address,
     grade: req.body.grade,
  	 entrtest: req.body.entrtest
 })
 //save new registration to db
 newRegistration.save((err, result) => {
   if (err) { console.log(err) }
   else { res.json(result) }
 })
})
app.get('/register', (req, res, next) => {
 var appnbr = Math.floor(Math.random()*(53453465345-896786)+896786)
 console.log(appnbr)
  //use find() method to return all registrations
  registration.find((err, result) => {
    if(err) { console.log(err) }
    else { res.json(result) }
  })
})
//listen on port 3000
app.listen(3001, () => {
 console.log('Server listening on port 3001')
})