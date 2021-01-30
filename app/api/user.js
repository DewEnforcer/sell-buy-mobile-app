import client from "./client";

const endPoint = "/users"

export function signUp (name, email, password) {
    return client.post(endPoint, {name, email, password});
}

export default {
    signUp
}