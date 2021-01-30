import client from "./client";

export function sendMessage(body) {
    return client.post("/messages", body);
}