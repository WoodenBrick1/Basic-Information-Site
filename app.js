const express = require('express')
const path = require('path')
const app = express()


const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, 'contact-me.html'))
})


app.listen(PORT, (error) => {
    // This is important!
    // Without this, any startup errors will silently fail
    // instead of giving you a helpful error message.
    if (error) {
        throw error
    }
    console.log(`My first Express app - listening on port ${PORT}!`)
})