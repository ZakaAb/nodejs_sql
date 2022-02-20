const express = require('express')
const db = require('./models')
const app = express()

app.use(express.json())
db.sequelize.sync()

app.get('/', (req, res) => {
  res.json({
    message: 'Fake it until you make it..',
  })
})

const router = require('./routes')
app.use('/api/v1', router)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
