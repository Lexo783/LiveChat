/**
 * les services vont récupérer les données en BDD
 */
import {createRoom, getAllRooms, removeRoom} from "../services/room/roomService.js";
import { checkPostRoom, checkDeleteRoom } from "../validator/ValidatorRoom.js";

/*export async function getAllRooms(request, response) {

}*/

export async function getOneRoom(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
}


export async function postRoom(request, response) {
    const check = checkPostRoom(request.body)
    console.log(check)
    if(check !== true){
        console.log('check raté')
        response.status(400).send({error: check})
    }else if(check == true){
        const room = await createRoom(request.body.name)
        response.status(200).send(room)
    }
}

export async function patchRoom(request, response) {

}

export async function putRoom(request, response) {

}

export async function deleteRoom(request, response) {
    console.log('id : ', request.body.id) // return obj
    //check ici
    const check = checkDeleteRoom(request.body)
    console.log(request.body)
    console.log(check)
    if(check !== true){
        console.log('check raté ')
        response.status(400).send({error: check})
    }else if(check == true){
        const room = await removeRoom(request.body.id)
        response.status(200).send(room)
    }
}