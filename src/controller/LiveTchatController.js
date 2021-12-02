export function LiveTchatController(request, response) {
    response.render('live_tchat/liveTchat.html', {
        user: request.user._id
    })
}