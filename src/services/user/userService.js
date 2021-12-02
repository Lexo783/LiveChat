import User from "../../model/User.js";

export async function createUser(email, pseudo, password) {
    const user = await User.create({
        email, pseudo, password
    })
    return user
}

export async function getAllUsers(){
    const users = await User.find()
    return users
}

export async function deleteUser(id){
    const deleteUser = await User.deleteOne({
        ' _id' : `ObjectId(${id})`
    })
    return deleteUser
}
/*export async function modifyUser(email, pseudo, password){
    const user = await User.update({
        email, pseudo, password
    })
    return user
}*/
