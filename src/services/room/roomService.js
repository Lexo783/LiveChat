import Room from "../../model/Room.js";


export async function createRoom(name, defaut) {
    return await Room.create({
        name, defaut
    })
}

export async function getAllRooms(){
    return await Room.find()
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
