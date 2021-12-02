export function homeController(request, response) {
    response.render('home/home.html', {
        title_text: "HERE",
        title: "My LiveChat"
    })
}