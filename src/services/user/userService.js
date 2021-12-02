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

<<<<<<< Updated upstream
export async function deleteUser(id){
    const deleteUser = await User.deleteOne({
        ' _id' : `ObjectId(${id})`
=======
export async function removeUser(id){
    console.log(id)
    return await User.deleteOne({
        ' _id': `ObjectId(${id})`
>>>>>>> Stashed changes
    })
    return deleteUser
}
/*export async function modifyUser(email, pseudo, password){
    const user = await User.update({
        email, pseudo, password
    })
    return user
}*/
