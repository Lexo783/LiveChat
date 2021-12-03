import passport from "passport"

/**
 * verify if a cookie with user data is over here
 */
export default passport.authenticate("jwt", {
    session: false,
    failureRedirect: '/login'
});