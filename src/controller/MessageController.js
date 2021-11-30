/**
 * les services vont récupérer les données en BDD
 */
import {createMessage} from "../services/message/messageService.js";

export async function getAllMessages(request, response) {
}

export async function getOneMessage(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
}

export async function postMessage(request, response) {
    const message = await createMessage(request.body.creator, request.body.text)
    response.status(200).send(message)
}

export async function patchMessage(request, response) {

}

export async function putMessage(request, response) {

}

export async function deleteMessage(request, response) {

}