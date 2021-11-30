/**
 * les services vont récupérer les données en BDD
 */

export function getAllMessages(request, response) {
}

export function getOneMessage(request, response) {
    console.log(request.params) // return obj
    response.status(200).send({
        id: request.params.id
    })
}

export function postMessage(request, response) {

}

export function patchMessage(request, response) {

}

export function putMessage(request, response) {

}

export function deleteMessage(request, response) {

}