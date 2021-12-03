
import { createUser, getAllUsers, removeUser, getOneUser, modifyUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";
import { checkPostUser, checkDeleteUser, checkPatchUser } from "../validator/ValidatorUser.js";

export async function getUsers(request, response) {

}

export async function getUser(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
}

export async function postUser(request, response){
    console.log('body : ',request.body)
    //check ici
    const check = checkPostUser(request.body)
    console.log(check)
    if(check !== true){
        console.log('check raté')
        response.status(400).send({error: check})
    }else if(check == true){
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

}
export async function patchUser(request, response){
    console.log('body', request.body)

    const check = checkPatchUser(request.body)
    console.log(check)
    if(check !== true){
        console.log('check raté ')
        response.status(400).send({error: check})
    }else if(check == true){
        const user = await modifyUser(request.body)
        response.status(200).send(user)
    }

}


export async function putUser(request, response) {

}

export async function deleteUser(request, response){
    console.log('id : ', request.body.id) // return obj
    //check ici
    const check = checkDeleteUser(request.body)
    console.log(request.body)
    console.log(check)
    if(check !== true){
        console.log('check raté ')
        response.status(400).send({error: check})
    }else if(check == true){
        const user = await removeUser(request.body.id)
        response.status(200).send(user)
    }
}
