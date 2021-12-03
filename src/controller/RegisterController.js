/**
 * controller view register
 * @param request
 * @param response
 */
export function registerController(request, response) {
    response.render('register/register.html', {
        title_text: "HERE",
        title: "Register"
    })
}