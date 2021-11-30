import Validator from "fastest-validator";

const valid = new Validator()

const schema = {
    creator: {type: "number", positive: true, integer: true},
    text: {type: 'string',min: 3, max: 255}
}