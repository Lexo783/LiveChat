import Message from "../../model/Message.js";

export async function createMessage(creator = 0, text = "", room = 0) {
    const message = await Message.create({
        creator, text
    })
    return message
}

export async function getAllMessage(){
    const messages = await Message.find()
    return messages
}

