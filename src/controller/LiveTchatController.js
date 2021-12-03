import {getAllRooms} from "../services/room/roomService.js";

/**
 * send rooms on live tchats
 * @param request
 * @param response
 * @returns {Promise<void>}
 * @constructor
 */
export async function LiveTchatController(request, response) {
    const rooms = await getAllRooms()
    response.render('live_tchat/liveTchat.html', {
        rooms: rooms
    })
}