import axios from "axios";

export type Message = {
    name: string,
    email: string,
    message: string
}

export async function sendMessage(message: Message) {
    const res = await axios.post("http://localhost:8000/msg/", message);
    return res;
}