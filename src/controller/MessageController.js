/**
 * les services vont récupérer les données en BDD
 */
import {createMessage} from "../services/message/messageService.js";
import {checkPostMessage} from "../validator/ValidatorMessage.js";

export async function getAllMessages(request, response) {

}

export async function getOneMessage(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
}

export async function postMessage(request, response) {
    console.log(request.body)
    const check = checkPostMessage(request.body)
    if(check !== true){
        response.status(400).send({error: check})
    }
    const message = await createMessage(request.body.creator, request.body.text, request.body.room)
    response.status(200).send(message)
}

export async function patchMessage(request, response) {

}

export async function putMessage(request, response) {

}

export async function deleteMessage(request, response) {

}