import {getAllRooms} from "../services/room/roomService.js";

export async function LiveTchatController(request, response) {
    const rooms = await getAllRooms()
    response.render('live_tchat/liveTchat.html', {
        rooms: rooms
    })
}