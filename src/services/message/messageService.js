import Message from "../../model/Message.js";

export async function createMessage(creator = 0,creatorPseudo = "", text = "", room = '') {
    return await Message.create({
        creator, creatorPseudo, text, room
    })
}

export async function AllMessageByRoom(room) {
    return await Message.find({room})
}

export async function getAllMessage(){
    return await Message.find()
}

