import { createUser, getAllUsers, removeUser, getOneUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";


export async function getUsers(request, response) {

}

export async function getUser(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
}

export async function postUser(request, response){
    console.log('body : ',request.user)
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
export async function patchUser(request, response){
    const user = await modifyUser(/*champs à modifier ici */)
    response.status(200).send(user)
}


export async function putUser(request, response) {

}

export async function deleteUser(request, response){
    console.log(request.body.id) // return obj
    const user = await removeUser(request.body.id)
    response.status(200).send(user)
}