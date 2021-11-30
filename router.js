import express from 'express'
import { homeController } from './controller/HomeController.js'
import {
    deleteMessage,
    getAllMessages,
    getOneMessage,
    patchMessage,
    postMessage,
    putMessage
} from './controller/MessageController.js'

const router = express.Router()

// home page
router.get('/', homeController)

// Messages route
router.get('/messages', getAllMessages)
router.get('/messages/:id', getOneMessage)
router.post('/messages', postMessage)
router.patch('/messages', patchMessage) // patch modifie partiellement
router.put('/messages', putMessage) // put remplace
router.delete('/messages', deleteMessage)
// end Messages route


export default router