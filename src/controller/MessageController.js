/**
 * les services vont récupérer les données en BDD
 */
import {AllMessageByRoom, createMessage, getAllMessage} from "../services/message/messageService.js";
import {checkPostMessage} from "../validator/ValidatorMessage.js";
import {getdefaultRoom} from "../services/room/roomService.js";

/**
 * controller get all message
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function getAllMessages(request, response) {
    const messages =  await getAllMessage()
    response.status(200).send(messages)
}

/**
 * controler get all messages by the room
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function getAllMessagesByRoom(request, response) {
    let roomName
    if(request.body.roomName === null){
        const defaultRoom = await getdefaultRoom(true)
        roomName = defaultRoom.name
    }else {
        roomName = request.body.roomName
    }
    const messages = await AllMessageByRoom(roomName)
    const data = {
        currentRoom: roomName,
        messages: messages
    }
    response.status(200).send(data)

}

/**
 * controller return on message
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function getOneMessage(request, response) {
    response.status(200).send({
        id: request.params.id
    })
}

/**
 * controller create message
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function postMessage(request, response) {
    const check = checkPostMessage(request.body)
    if(check !== true){
        response.status(400).send({error: check})
    }
    const message = await createMessage(request.body.creator, request.body.creatorPseudo ,request.body.text, request.body.room)
    response.status(200).send(message)
}

export async function patchMessage(request, response) {

}

export async function putMessage(request, response) {

}

export async function deleteMessage(request, response) {

}