import { Message } from "discord.js"
import Client from "../classes/Client"

export default function Ping(client:Client, msg:Message) {
    msg.channel.send(
        'pong!\n' +
        client.ws.ping + 'ms'
    )
}

export const aliases:Array<string> = ['ping', '핑', 'pong'] 