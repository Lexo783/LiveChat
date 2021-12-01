import express from 'express'
import http from 'http'
import router from './router.js'
import nunjucks from 'nunjucks'
import { initMongoose } from './database/database.js'

initMongoose().then(() => {
    console.log("Database connected")
    startWebServer()
}).catch((err) => {
    console.log(err)
})

function startWebServer() {
    const app = express()
    const server = http.createServer(app)

    nunjucks.configure('src/views', {
        autoescape: true,
        express: app
    })
    // config json
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    // services de fichiers statique
    app.use(express.static('public'))
    app.use(express.static('src/views'))

    app.use(router)



    server.listen(8000, '127.0.0.1', () => {
        console.log(`Listening on http://127.0.0.1:8000`)
    })
}