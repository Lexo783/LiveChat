import User from "../../model/User.js";

export async function createUser(email, pseudo, password) {
    return await User.create({
        email, pseudo, password
    })
}

export async function getAllUsers(){
    return await User.find()
}

export async function getOneUser(email){
    return await User.findOne({email})
}

export async function removeUser(id){
    return await User.deleteOne({
        ' _id': `ObjectId(${id})`
    })
}
/*export async function modifyUser(email, pseudo, password){
    const user = await User.update({
        email, pseudo, password
    })
    return user
}*/
