import Message from "../../model/Message.js";

export async function createMessage(creator = 0, text = "") {
    const message = await Message.create({
        creator, text
    })
    return message
}