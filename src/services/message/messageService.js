import Message from "../../model/Message.js";

export async function createMessage(creator = Number, text = "") {
    const message = await Message.create({
        creator, text
    })
    return message
}