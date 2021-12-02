import {getAllUsers} from "../services/user/userService.js";
import {deleteUser} from "../services/user/userService.js";
import { createUser } from "../services/user/userService.js";

export async function removeUser(request, response){
    console.log(request.body.id) // return obj
    const user = await deleteUser(request.body.id)
    response.status(200).send(user)
}

export async function generateUser(request, response){
    console.log('body : ',request.body)
    const user = await createUser(request.body.email, request.body.pseudo, request.body.password)
    response.status(200).send(user)
}
export async function updateUser(request, response){
    const user = await modifyUser(/*champs à modifier ici */)
    response.status(200).send(user)
}