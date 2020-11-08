import Client from "../classes/Client"

export default function onReady(client:Client) {
    console.log(
        client.user!.username + ' is now online!\n' +
        'prefix: ' + client.Setting.prefix
    )
}