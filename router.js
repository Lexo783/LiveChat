import express from 'express'
import { homeController } from './src/controller/HomeController.js'
import {
    deleteMessage,
    getAllMessages,
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
import {deleteUser, getUser, getUsers, patchUser, postUser} from "./src/controller/UserController.js";
import {registerController} from "./src/controller/RegisterController.js";


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

// Messages route
router.get('/message', requireAuth,getAllMessages)
router.get('/message/:id', requireAuth,getOneMessage)
router.post('/message', requireAuth,postMessage)
router.patch('/message', requireAuth,patchMessage) // patch modifie partiellement
router.put('/message', requireAuth,putMessage) // put remplace
router.delete('/message', requireAuth,deleteMessage)
// end Messages route

// admin route 
router.get('/admin', requireAuth,AdminController)

router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.post('/user', postUser)
router.patch('/user', patchUser) // patch modifie partiellement
router.put('/user', putMessage) // put remplace
router.delete('/user', deleteUser)

export default router