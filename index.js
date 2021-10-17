const express = require('express')
const app = express()
const port = 8000
const { generateToken } = require('./auth')
const { getProfile } = require('./profile')

// middleware for parsing request body
app.use(express.json())

// in a more complex app the endpoints would be grouped in folders
// each folder would export an express router object to register routes

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

app.get('/uber/get-profile/:accessToken', (req, res) => {
    const { accessToken } = req.params
    const profile = getProfile(accessToken);
    
    if (profile) {
        res.status(200)
        res.json({
            message: 'SUCCESS',
            platform: 'uber',
            profile
        })
    } else {
        res.status(401)
        res.json({
            message: 'CREDENTIALS_INVALID',
            details: 'Incorrect token'
        })
    }
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})