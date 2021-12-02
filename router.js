import express from 'express'
import { homeController } from './src/controller/HomeController.js'
import {
    deleteMessage,
    getAllMessages, getAllMessagesByRoom,
    getOneMessage,
    patchMessage,
    postMessage,
    putMessage,
} from './src/controller/MessageController.js'
import {LiveTchatController} from "./src/controller/LiveTchatController.js";
import {AdminController} from './src/controller/AdminController.js';
import {loginController} from './src/controller/LoginController.js'
import requireAuth from "./src/middleware/requireAuth.js"
import {signIn, signOut} from "./src/controller/AuthSecurity.js"
import {deleteUser, getCurrentUser, getUser, getUsers, patchUser, postUser} from "./src/controller/UserController.js";
import {registerController} from "./src/controller/RegisterController.js";
import {getOneRoom, postRoom, patchRoom, deleteRoom} from './src/controller/RoomController.js';


const router = express.Router()

// home page
router.get('/', homeController)

// live Tchat : mettre un midleWare qui va verif la connexion et ci besoin va return la vue de connexion
//router.get('/live_tchat', LiveTchatController)
router.get('/live_tchat', requireAuth, LiveTchatController)

router.get('/register', registerController)
router.get('/login', loginController)
router.post('/signIn', signIn)
router.get('/logout', signOut)
router.get('/currentUserId', requireAuth, getCurrentUser)

// Messages route
router.get('/message', requireAuth,getAllMessages)
router.post('/messagesRoom', requireAuth, getAllMessagesByRoom)
router.get('/message/:id', requireAuth,getOneMessage)
router.post('/message', requireAuth,postMessage)
router.patch('/message', requireAuth,patchMessage) // patch modifie partiellement
router.put('/message', requireAuth,putMessage) // put remplace
router.delete('/message', requireAuth,deleteMessage)
// end Messages route

// admin route 
//router.get('/admin', requireAuth,AdminController)
router.get('/admin',AdminController)


// user route
router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.post('/user', postUser)
router.patch('/user', patchUser) // patch modifie partiellement
router.put('/user', putMessage) // put remplace
router.delete('/user', deleteUser)

// room route
router.get('/room/:id', getOneRoom)
router.post('/room', postRoom)
router.delete('/room', deleteRoom)
router.patch('/room', patchRoom)

export default router