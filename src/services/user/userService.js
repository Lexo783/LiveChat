import User from "../../model/User.js";

export async function createUser(email, pseudo, password, isAdmin) {
    return await User.create({
        email, pseudo, password, isAdmin
    })
}

export async function getAllUsers(){
    return await User.find()
}

export async function getOneUser(id){
    return await User.findOne({
        ' _id': `ObjectId(${id})`
    })
}

export async function removeUser(id){
    return await User.deleteOne({
        ' _id': `ObjectId(${id})`
    })
}

export async function modifyUser({id, email, pseudo}){
    console.log(email, pseudo)
    return await User.updateOne(
        {' _id': `ObjectId(${id})`},{$set: {"email" : email, "pseudo" : pseudo}}
    )
}