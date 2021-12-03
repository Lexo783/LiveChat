
import { getOneUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";
import { checkPostUser, checkDeleteUser } from "../validator/ValidatorUser.js";


export async function ProfileController(request, response) {
    var user = await getOneUser()
    console.log('user : ',user)
    response.render('profile/profile.html',{
        pseudo: user.pseudo,
        email: user.email,
        id: user.id
    })
}

export async function getProfile(request, response){

}

