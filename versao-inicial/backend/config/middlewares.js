const bodyParder = require('body-parser')
const cors = require('cors')

module.exports = app => {
  app.use(bodyParder.json())
  app.use(cors())
}