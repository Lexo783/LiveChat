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

const router = express.Router()

// home page
router.get('/', homeController)

// Messages route
router.get('/message', getAllMessages)
router.get('/message/:id', getOneMessage)
router.post('/message', postMessage)
router.patch('/message', patchMessage) // patch modifie partiellement
router.put('/message', putMessage) // put remplace
router.delete('/message', deleteMessage)
// end Messages route


export default router