import {getAllUsers} from "../services/user/userService.js";
import {getAllRooms} from "../services/room/roomService.js";
/*import { modifyUser } from "../services/user/userService.js";*/

export async function AdminController(request, response) {
    var users = await getAllUsers()
    var rooms = await getAllRooms()
    
    response.render('admin/adminView.html',{
        title : 'admin',
        h1 : 'Gestion des utilisateurs',
        users : users,
        rooms: rooms,
    })
}