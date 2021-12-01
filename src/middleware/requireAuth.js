import passport from "passport"

export default passport.authenticate("jwt", {
    session: false,
    successRedirect: '/live_tchat',
    failureRedirect: '/login'
});