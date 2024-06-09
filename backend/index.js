
const express = require('express')
const router = require('./routes/project')
const dbConnect = require('./db')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = 5000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/project" , router)    // /project main Url , remaining URLs are connected with router we created in routes
app.listen(port, async () => {
  await dbConnect()
  console.log(`Example app listening on port ${port}`)
})