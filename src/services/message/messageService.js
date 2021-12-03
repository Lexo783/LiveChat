import Message from "../../model/Message.js";

/**
 * send the data one the database for create message
 * @param creator
 * @param creatorPseudo
 * @param text
 * @param room
 * @returns {Promise<any>}
 */
export async function createMessage(creator = 0,creatorPseudo = "", text = "", room = '') {
    return await Message.create({
        creator, creatorPseudo, text, room
    })
}

/**
 * call the database for find all message by the room
 * @param room
 * @returns {Promise<Query<Array<HydratedDocument<any, {}, {}>>, any, {}, any>>}
 * @constructor
 */
export async function AllMessageByRoom(room) {
    return await Message.find({room})
}

/**
 * call the database for all message
 * @returns {Promise<Query<Array<HydratedDocument<any, {}, {}>>, any, {}, any>>}
 */
export async function getAllMessage(){
    return await Message.find()
}

