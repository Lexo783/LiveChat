import express from 'express'
import http from 'http'
import router from './router.js'
import nunjucks from 'nunjucks'

const app = express()
const server = http.createServer(app)
nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

//
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// service de fichiers statique
app.use(express.static('public'))
app.use(express.static('views'))

app.use(router)



server.listen(8000, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:8000`)
})