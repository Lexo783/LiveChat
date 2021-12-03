
import { getOneUser } from "../services/user/userService.js";
import bcrypt from "bcryptjs";
import { checkPostUser, checkDeleteUser } from "../validator/ValidatorUser.js";
import { getCurrentUser } from "./UserController.js";


export async function ProfileController(request, response) {
    
    console.log('user : ',request.user)
    response.render('profile/profile.html',{
        user: request.user
    })
}

export async function getProfile(request, response){

}

