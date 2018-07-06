const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.promise = Promise
mongoose.connect('mongodb://localhost/warbler', {
  keepAlive: true,
  useMongoClient: true
})
