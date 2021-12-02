import Validator from "fastest-validator";

const valid = new Validator()

const schemaPost = {
    email: {type: "email"},
    pseudo: {type: 'string',min: 3, max: 255},
    password: {type: "string", min: 3, max: 255},
}

const schemaDelete = {
    id: {type: "string", min: 3, max: 255},
}
export const checkPostUser = valid.compile(schemaPost)
export const checkDeleteUser = valid.compile(schemaDelete)