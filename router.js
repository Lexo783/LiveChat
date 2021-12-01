import express from 'express'
import { homeController } from './src/controller/HomeController.js'
import {
    deleteMessage,
    getAllMessages,
    getOneMessage,
    patchMessage,
    postMessage,
    putMessage
} from './src/controller/MessageController.js'
import {LiveTchatController} from "./src/controller/LiveTchatController.js";
import requireAuth from "./src/middleware/requireAuth.js"

const router = express.Router()

// home page
router.get('/', homeController)

// live Tchat : mettre un midleWare qui va verif la connexion et ci besoin va return la vue de connexion
router.get('/live_tchat',requireAuth,LiveTchatController)

// Messages route
router.get('/message', getAllMessages)
router.get('/message/:id', getOneMessage)
router.post('/message', postMessage)
router.patch('/message', patchMessage) // patch modifie partiellement
router.put('/message', putMessage) // put remplace
router.delete('/message', deleteMessage)
// end Messages route


export default router