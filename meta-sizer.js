const cors = require('cors')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = module.exports = express()

app.use(cors())

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.post('/upload', upload.single('meta-file'), (request, response) => {
  let kb = (request.file.size / 1000).toFixed(2)
  response.json(`${kb} KB`)
})

app.listen(process.env.PORT || 8080, () => {
  console.log('You are being served.')
})
