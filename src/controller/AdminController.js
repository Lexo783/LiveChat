import {getAllUsers} from "../services/user/userService.js";
import {getAllRooms} from "../services/room/roomService.js";
/*import { modifyUser } from "../services/user/userService.js";*/

export async function AdminController(request, response) {
    var users = await getAllUsers()
    var rooms = await getAllRooms()
    
    response.render('admin/admin.html',{
        title : 'admin',
        h1 : 'Gestion des utilisateurs',
        pseudo : 'Pseudo :',
        id : 'ID :',
        users : users,
        formCreate : 'Générer un utilisateur',
        formCreateRoom: 'Créer une roomssss',
        nameRoom : 'nom :',
        idRoom : 'ID :',
        rooms: rooms,
        formCreateRoom : 'Créer une room samerres',
        email : 'Email :',
        password : 'Mot de passe :',
        formCreateRoom : 'Créer une room samerres',
        defautRoom : 'par defaut :'
    })
}