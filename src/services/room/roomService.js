import Room from "../../model/Room.js";

/**
 * call the database to send room data
 * @param name
 * @param defaut
 * @returns {Promise<any>}
 */
export async function createRoom(name, defaut) {
    return await Room.create({
        name, defaut
    })
}

/**
 * call the database to get all room
 * @returns {Promise<Query<Array<HydratedDocument<any, {}, {}>>, any, {}, any>>}
 */
export async function getAllRooms(){
    return await Room.find()
}

/**
 * call tje database to get the default room
 * @param defaut
 * @returns {Promise<Query<any, any, {}, any>>}
 */
export async function getdefaultRoom(defaut){
    return await Room.findOne({defaut})
}

export async function getOneRoom(id){
    return await Room.findOne({id})
}

export async function removeRoom(id){
    return await Room.deleteOne({
        ' _id': `ObjectId(${id})`
    })
}
export async function patchRoom(){
    return await Room.update({
        
    })
}
