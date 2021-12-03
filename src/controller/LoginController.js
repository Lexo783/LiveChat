/**
 * login controller
 * @param request
 * @param response
 */
export function loginController(request, response) {
    response.render('login/login.html', {
        title_text: "HERE",
        title: "Log In"
    })
}