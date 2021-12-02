import Room from "../../model/Room.js";

export async function createRoom(name = '') {
    return await Room.create({
        name
    })
}

