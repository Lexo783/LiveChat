import Validator from "fastest-validator";

const valid = new Validator()

const schemaPost = {
    creator: {type: "number", positive: true, integer: true},
    text: {type: 'string',min: 3, max: 255},
    room: {type: "number", positive: true, integer: true},
}

export const checkPostMessage = valid.compile(schemaPost)