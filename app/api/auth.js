import client from "./client";

const endPoint = "/auth"

function login(email, password) {
    return client.post(endPoint, {email, password});
}

export default {
    login
}