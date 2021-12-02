import Message from "../../model/Message.js";

export async function createMessage(creator = 0, text = "", room = 0) {
    return await Message.create({
        creator, text, room
    })
}

export async function getAllMessage(){
    return await Message.find()
}

