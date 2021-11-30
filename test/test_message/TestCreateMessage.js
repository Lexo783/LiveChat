import axios from "axios";
import config from "../../config/config.js";

axios.defaults.baseURL = `http://${config.HOST}:${config.PORT}`

axios.post('/message',{
    creator: 1,
    text: "Je suis un test WOLA"
}).then(result => {
    console.log(result.data)
})