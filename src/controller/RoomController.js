/**
 * les services vont récupérer les données en BDD
 */
import {createRoom, getAllRooms, removeRoom} from "../services/room/roomService.js";
import { checkPostRoom, checkDeleteRoom } from "../validator/ValidatorRoom.js";

/*export async function getAllRooms(request, response) {

}*/

/**
 * controller get one room
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function getOneRoom(request, response) {
    response.status(200).send({
        id: request.params.id
    })
}

/**
 * create room controller
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
export async function postRoom(request, response) {
    const check = checkPostRoom(request.body)
    if(check !== true){
        response.status(400).send({error: check})
    }else if(check == true){
        const room = await createRoom(request.body.name, request.body.defaut)
        response.status(200).send(room)
    }
}

export async function patchRoom(request, response) {

}

export async function putRoom(request, response) {

}

export async function deleteRoom(request, response) {
    //check ici
    const check = checkDeleteRoom(request.body)
    if(check !== true){
        response.status(400).send({error: check})
    }else if(check == true){
        const room = await removeRoom(request.body.id)
        response.status(200).send(room)
    }
}