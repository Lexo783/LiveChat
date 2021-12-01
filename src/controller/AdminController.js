import { response } from "express";
import {getAllUsers} from "../services/user/userService.js";
import {deleteUser} from "../services/user/userService.js";
import { createUser } from "../services/user/userService.js";
import axios from 'axios';
import bcrypt from "bcryptjs";

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
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(request.body.password, salt, async function (err, hash) {
            if (err !== null) {
                console.log("je suis dans mon erreur", err)
                response.status(500).send(err)
            }
            const user = await createUser(request.body.email, request.body.pseudo, hash)
            response.status(200).send(user)
        });
    });

}