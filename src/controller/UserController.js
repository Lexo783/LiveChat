
import { createUser, getAllUsers, removeUser, getOneUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";
import { checkPostUser, checkDeleteUser } from "../validator/ValidatorUser.js";

/**
 * controller get currentUser
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function getCurrentUser(request, response){
    response.status(200).send(request.user)
}

export async function getUsers(request, response) {

}

/**
 * controler get user
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function getUser(request, response) {
    response.status(200).send({
        id: request.params.id
    })
}

/**
 * create user controller
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function postUser(request, response){
    //check ici
    const check = checkPostUser(request.body)
    console.log(check)
    if(check !== true){
        response.status(400).send({error: check})
    }else if(check == true){
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(request.body.password, salt, async function (err, hash) {
                if (err !== null) {
                    response.status(500).send(err)
                }
                const user = await createUser(request.body.email, request.body.pseudo, hash, false)
                response.status(200).send(user)
            });
        });
    }

}

export async function patchUser(request, response){
    const user = await modifyUser(/*champs à modifier ici */)
    response.status(200).send(user)
}


export async function putUser(request, response) {

}

/**
 * delete user controller
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function deleteUser(request, response){
    //check ici
    const check = checkDeleteUser(request.body)

    if(check !== true){
        response.status(400).send({error: check})
    }else if(check == true){
        const user = await removeUser(request.body.id)
        response.status(200).send(user)
    }
}