import {getAllUsers} from "../services/user/userService.js";
import {deleteUser} from "../services/user/userService.js";
import { createUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";


export async function removeUser(request, response){
    console.log(request.body.id) // return obj
    const user = await deleteUser(request.body.id)
    response.status(200).send(user)
}

export async function createUser(request, response){
    console.log('body : ',request.body)
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
export async function updateUser(request, response){
    const user = await modifyUser(/*champs à modifier ici */)
    response.status(200).send(user)
}