import express, {request} from 'express'
import http from 'http'
import router from './router.js'
import nunjucks from 'nunjucks'
import { initMongoose } from './database/database.js'
import passport from 'passport'
import {jwtLogin, localLogin} from './src/controller/AuthSecurity.js'
import { Server as SioServer} from 'socket.io'
import {createMessage} from "./src/services/message/messageService.js";

initMongoose().then(() => {
    console.log("Database connected")
    startWebServer()
}).catch((err) => {
    console.log(err)
})

function startWebServer() {
    const app = express()
    const server = http.createServer(app)
    const io = new SioServer(server)

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
        socket.on('chat message', async (msg) => {
            var newMessage = await createMessage(msg.creator,msg.creatorPseudo, msg.message, msg.room)
            io.emit('chat message', newMessage);
        });
    });


    app.use(passport.initialize())
    passport.use(jwtLogin);
    passport.use(localLogin);
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