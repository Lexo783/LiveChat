/**
 * verify if a cookie with user data is over here
 */
export default function maybeIsAdmin(req, res, next){
    if(req.user.isAdmin === true){
        next()
    }else {
        res.redirect('/')
    }
}