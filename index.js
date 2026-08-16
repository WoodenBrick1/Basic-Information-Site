const http = require('node:http')
const fs = require('fs/promises')

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
    const url = req.url
    let page

    if (url === '/') {

        page = await readPage('./index.html')

    } else if (url == '/about') {

        page = await readPage('./about.html')

    } else if (url == '/contact-me') {

        page = await readPage('./contact-me.html')

    } else {
        page = await readPage('./404.html')
    }
    console.log(page)

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(page)

})

const readPage = async (url) => {
    return await fs.readFile(url, 'utf8')
}
server.listen(8080)