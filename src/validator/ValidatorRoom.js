import Validator from "fastest-validator";

const valid = new Validator()

const schemaPost = {
    name: {type: "string", min: 3, max: 255},
    defaut: {type: "boolean"},

}

const schemaDelete = {
    id: {type: "string", min: 3, max: 255},
}
export const checkPostRoom = valid.compile(schemaPost)
export const checkDeleteRoom = valid.compile(schemaDelete)