import { response } from "express";
import {getAllUsers} from "../services/user/userService.js";
import {deleteUser} from "../services/user/userService.js";
import { createUser } from "../services/user/userService.js";
import axios from 'axios';

export async function AdminController(request, response) {
    var users = await getAllUsers()
    
    response.render('admin/admin.html',{
        title : 'admin',
        h1 : 'Gestion des utilisateurs',
        pseudo : 'Pseudo :',
        id : 'ID',
        users : users,
        formCreate : 'Générer un utilisateur'

    })

}

export async function removeUser(request, response){
    console.log(request.body.id) // return obj
    const user = await deleteUser(request.body.id)
    response.status(200).send(user)
}

export async function generateUser(request, response){
    console.log(request.body)
    const user = await createUser(request.body.pseudo, request.body.email)
    response.status(200).send(user)
}