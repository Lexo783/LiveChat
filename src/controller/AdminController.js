import {getAllUsers} from "../services/admin/adminService.js";

export async function AdminController(request, response) {
    var users = await getAllUsers()
    console.log('user :',users[1].email);
    response.render('admin/admin.html',{
        title : 'admin',
        h1 : 'Gestion des utilisateurs',
        users : users
    })

}

