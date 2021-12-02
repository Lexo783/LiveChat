import {getAllUsers} from "../services/user/userService.js";
import {deleteUser} from "../services/user/userService.js";
import { createUser } from "../services/user/userService.js";

<<<<<<< Updated upstream
export async function removeUser(request, response){
    console.log(request.body.id) // return obj
    const user = await deleteUser(request.body.id)
    response.status(200).send(user)
=======
import { createUser, getAllUsers, removeUser, getOneUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";
import { checkPostUser, checkDeleteUser } from "../validator/ValidatorUser.js";

export async function getUsers(request, response) {

}

export async function getUser(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
>>>>>>> Stashed changes
}

export async function generateUser(request, response){
    console.log('body : ',request.body)
<<<<<<< Updated upstream
    const user = await createUser(request.body.email, request.body.pseudo, request.body.password)
    response.status(200).send(user)
}
export async function updateUser(request, response){
    const user = await modifyUser(/*champs à modifier ici */)
=======
    //check ici
    const check = checkPostUser(request.body)
    if(check !== true){
        response.status(400).send({error: check})
    }
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
    console.log('id de ses morts: ', request.body.id) // return obj
    //check ici
    const check = checkDeleteUser(request.body)
    if(check !== true){
        response.status(400).send({error: check})
    }
    const user = await removeUser(request.body.id)
>>>>>>> Stashed changes
    response.status(200).send(user)
}