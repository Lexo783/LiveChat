import database from 'mongoose'

/**
 * créate schéma for room
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, any>}
 */
const schema = new database.Schema({
    name: {type: String},
    defaut:{type: Boolean},
    //option: timestamps ajoute le created_at et update_at
    //option: minimize ... j'ai pas trop compris mais ça peut faire des erreurs a cause d'une clef name donc TKT GROS ON EST BON
},{
    timestamps: true,
    minimize: false
})

const Room = database.model('room', schema)

export default Room