import database from 'mongoose'

const schema = new database.Schema({
    name: {type: String},
    //option: timestamps ajoute le created_at et update_at
    //option: minimize ... j'ai pas trop compris mais ça peut faire des erreurs a cause d'une clef name donc TKT GROS ON EST BON
},{
    timestamps: true,
    minimize: false
})

const User = database.model('room', schema)

export default User