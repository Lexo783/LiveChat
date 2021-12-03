import database from "mongoose"

/**
 * create schéma for message
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, any>}
 */
const schema = new database.Schema({
    creator: {type: String},
    creatorPseudo: {type: String},
    text: {type: String},
    room: {type: String},
    //option: timestamps ajoute le created_at et update_at
    //option: minimize ... j'ai pas trop compris mais ça peut faire des erreurs a cause d'une clef name donc TKT GROS ON EST BON
},{
    timestamps: true,
    minimize: false
})

const Message = database.model('message', schema)

export default Message