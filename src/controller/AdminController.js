import {getAllUsers} from "../services/user/userService.js";
import {deleteUser} from "../services/user/userService.js";
import { createUser } from "../services/user/userService.js";

import { removeUser } from "./UserController.js";
/*import { modifyUser } from "../services/user/userService.js";*/

export async function AdminController(request, response) {
    var users = await getAllUsers()
    
    response.render('admin/admin.html',{
        title : 'admin',
        h1 : 'Gestion des utilisateurs',
        pseudo : 'Pseudo :',
        id : 'ID :',
        users : users,
        formCreate : 'Générer un utilisateur',
        email : 'Email :',
        password : 'Mot de passe :'
    })
}