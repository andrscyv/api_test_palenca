const express = require('express')
const app = express()
const port = 3000
const { generateToken } = require('./auth')

// middleware for parsing request body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Palenca!')
})

app.post('/uber/login', (req, res) => {
    const { email, password } = req.body
    const token = generateToken(email, password);
    if (token) {
        res.status(200)
        res.json({
            message: 'SUCCESS',
            access_token: token
        })

    } else {
        res.status(401)
        res.json({
            message: 'CREDENTIALS_INVALID',
            details: 'Incorrect username or password'
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})