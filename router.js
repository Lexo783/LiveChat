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
import { AdminController } from './src/controller/AdminController.js';
import { generateUser } from './src/controller/UserController.js';
import { removeUser } from './src/controller/UserController.js';
import { getAllUsers } from './src/services/user/userService.js';

const router = express.Router()

// home page
router.get('/', homeController)

// live Tchat : mettre un midleWare qui va verif la connexion et ci besoin va return la vue de connexion
router.get('/live_tchat',LiveTchatController)

// Messages route
router.get('/message', getAllMessages)
router.get('/message/:id', getOneMessage)
router.post('/message', postMessage)
router.patch('/message', patchMessage) // patch modifie partiellement
router.put('/message', putMessage) // put remplace
router.delete('/message', deleteMessage)
// end Messages route

// admin route 
router.get('/admin', AdminController)
router.post('/createUser', generateUser)
router.post('/deleteUser', removeUser)
router.get('/getAllUsers', getAllUsers)


export default router